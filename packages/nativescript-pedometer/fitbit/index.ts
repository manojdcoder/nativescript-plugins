import { Button, Color, Frame, GridLayout, ItemSpec, WebView, LoadEventData, isAndroid, Http, Observable, HttpResponse } from '@nativescript/core';
import { PedometerData, PedometerQueryOptions } from '../common';

export interface IAuthResponse {
  client_id: string;
  access_token: string;
  expires_in: number;
  expires_at: number;
  refresh_token: string;
  scope: string;
  token_type: string;
  user_id: string;
}

interface IActivityResponse {
  'activities-steps': IActivity[];
  'activities-steps-intraday': IActivityIntraday;
  'activities-calories': IActivity[];
  'activities-calories-intraday': IActivityIntraday;
}

interface IActivity {
  dateTime: string;
  value: string;
}

interface IActivityIntraday {
  dataset: IActivityDataset[];
  datasetInterval: number;
  datasetType: string;
}

interface IActivityDataset {
  level: number;
  time: string;
  value: number;
}

export class Fitbit extends Observable {
  connect(clientId: string, redirectUrl: string): Promise<IAuthResponse> {
    return new Promise((resolve, reject) => {
      const modalView = new GridLayout();
      modalView.backgroundColor = new Color('#000');
      modalView.addRow(new ItemSpec(1, 'auto'));
      modalView.addRow(new ItemSpec(1, 'star'));
      modalView.addColumn(new ItemSpec(1, 'star'));

      const newWebView = new WebView();
      newWebView.src = `https://www.fitbit.com/oauth2/authorize?client_id=${clientId}&code_challenge=-4cf-Mzo_qg9-uq0F4QwWhRh4AjcAqNx7SbYVsdmyQM&code_challenge_method=S256&response_type=code&scope=activity`;
      modalView.addChildAtCell(newWebView, 1, 0);

      newWebView.addEventListener(WebView.loadStartedEvent, async ({ url }: LoadEventData) => {
        if (url.startsWith(redirectUrl)) {
          modalView.closeModal();
          const params: Record<string, string> = {};
          (url.split('?')[1]?.split('&') || []).forEach((item) => {
            const arr = item.split('=');
            params[arr[0]] = arr[1] || '';
          });
          if (params.code) {
            try {
              let code = params.code;
              if (code.endsWith('#_')) {
                code = code.substring(0, code.length - 2);
              }
              const response = await Http.request({
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                url: 'https://api.fitbit.com/oauth2/token',
                content: `client_id=${clientId}&code=${code}&code_verifier=01234567890123456789012345678901234567890123456789&grant_type=authorization_code`,
              });
              if (response.statusCode === 200) {
                const result = response.content.toJSON() as IAuthResponse;
                result.client_id = clientId;
                result.expires_at = new Date().getTime() + result.expires_in * 1000;
                resolve(result);
              } else {
                reject(response.content.toJSON());
              }
            } catch (err) {
              reject(err);
            }
          }
        }
      });

      const closeButton = new Button();
      closeButton.id = 'btnClose';
      closeButton.marginTop = isAndroid ? 40 : 0;
      closeButton.backgroundColor = new Color('transparent');
      closeButton.borderColor = new Color('transparent');
      closeButton.color = new Color('#fff');
      closeButton.text = 'Close';
      closeButton.once(Button.tapEvent, () => {
        reject();
        modalView.closeModal();
      });
      modalView.addChildAtCell(closeButton, 0, 0);

      Frame.topmost().showModal(modalView, {
        context: {},
        closeCallback: () => {},
        fullscreen: true,
        cancelable: false,
      });
    });
  }

  query(authResponse: IAuthResponse, { startDate, endDate }: PedometerQueryOptions): Promise<PedometerData> {
    return new Promise(async (resolve, reject) => {
      try {
        if (!endDate) {
          endDate = new Date();
        }

        const result: PedometerData | undefined = {
          startDate: startDate,
          endDate: endDate,
          numberOfSteps: 0,
          numberOfCalories: 0,
        };

        let cursorDate = new Date(startDate.getTime());
        cursorDate.setUTCHours(0);
        cursorDate.setUTCMinutes(0);
        cursorDate.setUTCSeconds(0);
        cursorDate.setUTCMilliseconds(0);

        while (cursorDate <= endDate) {
          const currentTime = new Date().getTime();
          if (authResponse.expires_at < currentTime) {
            const response = await Http.request({
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              url: 'https://api.fitbit.com/oauth2/token',
              content: `grant_type=refresh_token&refresh_token=${authResponse.refresh_token}&client_id=${authResponse.client_id}`,
            });

            if (response.statusCode === 200) {
              Object.assign(authResponse, response.content.toJSON() as IAuthResponse);
              authResponse.expires_at = currentTime + authResponse.expires_in * 1000;
            } else {
              throw this.prepareErrorObj(response);
            }
          }

          const date = `${cursorDate.getUTCFullYear()}-${('0' + (cursorDate.getUTCMonth() + 1)).slice(-2)}-${('0' + cursorDate.getUTCDate()).slice(-2)}`;
          const url = `https://api.fitbit.com/1/user/${authResponse.user_id}/activities/steps/date/${date}/${date}/1min/time/00:00:00/23:59:59.json`;
          const [stepsResponse, caloriesResponse] = await Promise.all([
            Http.request({
              method: 'GET',
              headers: {
                authorization: `${authResponse.token_type} ${authResponse.access_token}`,
                accept: 'application/json',
              },
              url: url,
            }),
            Http.request({
              method: 'GET',
              headers: {
                authorization: `${authResponse.token_type} ${authResponse.access_token}`,
                accept: 'application/json',
              },
              url: url.replace('steps', 'calories'),
            }),
          ]);

          if (stepsResponse.statusCode !== 200) {
            throw this.prepareErrorObj(stepsResponse);
          }

          if (caloriesResponse.statusCode !== 200) {
            throw this.prepareErrorObj(caloriesResponse);
          }

          const stepsData = stepsResponse.content.toJSON() as IActivityResponse;
          stepsData['activities-steps-intraday'].dataset.forEach((item) => {
            const times = item.time.split(':');
            const date = new Date(cursorDate.getTime());
            date.setUTCHours(parseFloat(times[0]) || 0);
            date.setUTCMinutes(parseFloat(times[1]) || 0);
            date.setUTCSeconds(parseFloat(times[2]) || 0);
            date.setUTCMilliseconds(0);
            if (date >= startDate && date <= endDate) {
              result.numberOfSteps += item.value;
            }
          });

          const caloriesData = caloriesResponse.content.toJSON() as IActivityResponse;
          caloriesData['activities-calories-intraday'].dataset.forEach((item) => {
            const times = item.time.split(':');
            const date = new Date(cursorDate.getTime());
            date.setUTCHours(parseFloat(times[0]) || 0);
            date.setUTCMinutes(parseFloat(times[1]) || 0);
            date.setUTCSeconds(parseFloat(times[2]) || 0);
            date.setUTCMilliseconds(0);
            if (date >= startDate && date <= endDate) {
              if (item.level > 0) {
                result.numberOfCalories += item.value;
              }
            }
          });

          cursorDate = new Date(cursorDate.getTime() + 24 * 60 * 60 * 1000);
        }

        result.numberOfCalories = Math.round(result.numberOfCalories);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }

  private prepareErrorObj(response: HttpResponse): any {
    const errorObj = response.content.toJSON() || {};
    errorObj.headers = {};
    Object.assign(errorObj.headers, response.headers);
    return errorObj;
  }
}
