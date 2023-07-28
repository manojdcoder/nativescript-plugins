import { Button, Color, Frame, GridLayout, ItemSpec, WebView, LoadEventData, isAndroid, Http, Observable } from '@nativescript/core';
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
  activities: IActivityItem[];
  pagination: IPagination;
}

interface IActivityItem {
  activeDuration?: number;
  activityLevel?: IActivityLevel[];
  activityName?: string;
  activityTypeId?: number;
  calories?: number;
  caloriesLink?: string;
  duration?: number;
  elevationGain?: number;
  lastModified?: string;
  logId?: number;
  logType?: string;
  manualValuesSpecified?: IManualValueSpecified;
  originalDuration?: number;
  originalStartTime?: string;
  startTime?: string;
  steps?: number;
  tcxLink?: string;
}

interface IActivityLevel {
  minutes?: number;
  name?: string;
}

interface IManualValueSpecified {
  calories?: boolean;
  distance?: boolean;
  steps?: boolean;
}

interface IPagination {
  afterDate?: string;
  limit?: number;
  next?: string;
  offset?: number;
  previous?: string;
  sort?: string;
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
        const afterDate = `${startDate.getFullYear()}-${('0' + (startDate.getMonth() + 1)).slice(-2)}-${('0' + startDate.getDate()).slice(-2)}T${('0' + startDate.getHours()).slice(-2)}:${('0' + startDate.getMinutes()).slice(-2)}:${('0' + startDate.getSeconds()).slice(-2)}`;
        let result: PedometerData | undefined = {
          startDate: startDate,
          endDate: endDate,
          numberOfSteps: 0,
          numberOfCalories: 0,
        };

        if (authResponse.expires_at < new Date().getTime()) {
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
            authResponse.expires_at = new Date().getTime() + authResponse.expires_in * 1000;
          } else {
            reject(response.content.toJSON());
            return;
          }
        }

        let hasMore = true;
        let url = `https://api.fitbit.com/1/user/${authResponse.user_id}/activities/list.json?afterDate=${afterDate}&sort=asc&limit=100&offset=0`;
        while (hasMore) {
          const response = await Http.request({
            method: 'GET',
            headers: {
              authorization: `${authResponse.token_type} ${authResponse.access_token}`,
              accept: 'application/json',
            },
            url: url,
          });
          if (response.statusCode === 200) {
            const data = response.content.toJSON() as IActivityResponse;
            const activities = data.activities || [];
            url = data.pagination?.next ?? '';
            hasMore = !!url;
            for (let item of activities) {
              const startTime = new Date(item.originalStartTime);
              if (startTime > endDate) {
                hasMore = false;
                break;
              }
              if (item.manualValuesSpecified?.steps !== true) {
                result.numberOfSteps += item.steps ?? 0;
              }
              if (item.manualValuesSpecified?.calories !== true) {
                result.numberOfCalories += item.calories ?? 0;
              }
            }
          } else {
            hasMore = false;
            result = undefined;
            reject(response.content.toJSON());
          }
        }

        if (result) {
          resolve(result);
        }
      } catch (err) {
        reject(err);
      }
    });
  }
}
