import { Button, Color, Frame, GridLayout, Http, HttpResponse, ItemSpec, LoadEventData, Observable, WebView, isAndroid } from '@nativescript/core';
import OAuthSignature from './oauth-signature';
import { PedometerData, PedometerQueryOptions } from '../common';

export interface IAuthResponse {
  oauth_consumer_key: string;
  oauth_consumer_secret: string;
  oauth_token: string;
  oauth_token_secret: string;
}

export interface IDailySummary {
  userId: string;
  summaryId: string;
  calendarDate: string;
  activityType: string;
  activeKilocalories: number;
  bmrKilocalories: number;
  steps: number;
  pushes: number;
  distanceInMeters: number;
  pushDistanceInMeters: number;
  durationInSeconds: number;
  activeTimeInSeconds: number;
  startTimeInSeconds: number;
  startTimeOffsetInSeconds: number;
  moderateIntensityDurationInSeconds: number;
  vigorousIntensityDurationInSeconds: number;
  floorsClimbed: number;
  minHeartRateInBeatsPerMinute: number;
  maxHeartRateInBeatsPerMinute: number;
  averageHeartRateInBeatsPerMinute: number;
  restingHeartRateInBeatsPerMinute: number;
  timeOffsetHeartRateSamples: string;
  source: string;
  stepsGoal: number;
  pushesGoal: number;
  intensityDurationGoalInSeconds: number;
  floorsClimbedGoal: number;
  averageStressLevel: number;
  maxStressLevel: number;
  stressDurationInSeconds: number;
  restStressDurationInSeconds: number;
  activityStressDurationInSeconds: number;
  lowStressDurationInSeconds: number;
  mediumStressDurationInSeconds: number;
  highStressDurationInSeconds: number;
  stressQualifier: string;
}

export class Garmin extends Observable {
  private readonly maxTimeRange = 86400000;

  connect(consumerKey: string, consumerSecret: string, redirectUrl: string): Promise<IAuthResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const requestTokenUrl = 'https://connectapi.garmin.com/oauth-service/oauth/request_token';
        const requestTokenHeader = this.generateHeader(requestTokenUrl, 'POST', consumerKey, consumerSecret);
        const requestTokenResult = this.parseUrlParams(
          (
            await Http.request({
              url: requestTokenUrl,
              method: 'POST',
              headers: {
                Authorization: requestTokenHeader,
              },
            })
          ).content?.toString()
        );
        const modalView = new GridLayout();
        modalView.backgroundColor = new Color('#000');
        modalView.addRow(new ItemSpec(1, 'auto'));
        modalView.addRow(new ItemSpec(1, 'star'));
        modalView.addColumn(new ItemSpec(1, 'star'));

        const newWebView = new WebView();
        newWebView.src = `https://connect.garmin.com/oauthConfirm?oauth_token=${requestTokenResult.oauth_token}`;
        modalView.addChildAtCell(newWebView, 1, 0);

        newWebView.addEventListener(WebView.loadStartedEvent, async ({ url }: LoadEventData) => {
          if (url.startsWith(redirectUrl)) {
            modalView.closeModal();
            const oauthTokenResult = this.parseUrlParams(url.split('?')[1]);
            if (oauthTokenResult.oauth_verifier && oauthTokenResult.oauth_verifier !== 'null') {
              const accessTokenUrl = 'https://connectapi.garmin.com/oauth-service/oauth/access_token';
              const accessTokenHeader = this.generateHeader(accessTokenUrl, 'POST', consumerKey, consumerSecret, requestTokenResult.oauth_token_secret, { oauth_token: requestTokenResult.oauth_token, oauth_verifier: oauthTokenResult.oauth_verifier });
              const accessTokenResult = this.parseUrlParams(
                (
                  await Http.request({
                    url: accessTokenUrl,
                    method: 'POST',
                    headers: {
                      Authorization: accessTokenHeader,
                    },
                  })
                ).content?.toString()
              );
              resolve({
                oauth_consumer_key: consumerKey,
                oauth_consumer_secret: consumerSecret,
                oauth_token: accessTokenResult.oauth_token,
                oauth_token_secret: accessTokenResult.oauth_token_secret,
              } as IAuthResponse);
            } else {
              reject();
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
      } catch (err) {
        reject(err);
      }
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

        let cursorStartDate = new Date(startDate.getTime());
        let cursorEndDate = cursorStartDate;

        while (cursorEndDate < endDate) {
          cursorStartDate = cursorEndDate;
          cursorEndDate = new Date(endDate.getTime() - cursorStartDate.getTime() > this.maxTimeRange ? cursorStartDate.getTime() + this.maxTimeRange : endDate.getTime());

          const uploadStartTimeInSeconds = this.toSeconds(cursorStartDate);
          const uploadEndTimeInSeconds = this.toSeconds(cursorEndDate);
          const apiUrl = 'https://apis.garmin.com/wellness-api/rest/dailies';
          const apiHeader = this.generateHeader(apiUrl, 'GET', authResponse.oauth_consumer_key, authResponse.oauth_consumer_secret, authResponse.oauth_token_secret, { oauth_token: authResponse.oauth_token, uploadStartTimeInSeconds: uploadStartTimeInSeconds.toString(), uploadEndTimeInSeconds: uploadEndTimeInSeconds.toString() });
          const response = await Http.request({
            method: 'GET',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: apiHeader,
            },
            url: `${apiUrl}?uploadStartTimeInSeconds=${uploadStartTimeInSeconds}&uploadEndTimeInSeconds=${uploadEndTimeInSeconds}`,
          });

          if (response.statusCode !== 200) {
            throw this.prepareErrorObj(response);
          }

          const data = response.content.toJSON() as IDailySummary[];
          const item = data[data.length - 1];

          if (item && item.steps) {
            result.numberOfSteps = item.steps;
          }
          if (item && item.activeKilocalories) {
            result.numberOfCalories = item.activeKilocalories;
          }
        }

        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }

  private toSeconds(value: Date): number {
    return Math.floor(value.getTime() / 1000);
  }

  private parseUrlParams(value: string): Record<string, string> {
    const params: Record<string, string> = {};
    value.split('&').forEach((param) => {
      const keyValue = param.split('=');
      params[keyValue[0]] = keyValue[1];
    });
    return params;
  }

  private generateHeader(url: string, method: string, key: string, secret1: string, secret2?: string, extraParams?: Record<string, string>): string {
    const oAuthTimestamp = this.toSeconds(new Date());
    const oauthNonce = this.generateOauthNonce(10);
    const perEnc = new OAuthSignature.Rfc3986();
    const parameters = {
      oauth_consumer_key: key,
      oauth_signature_method: 'HMAC-SHA1',
      oauth_nonce: oauthNonce,
      oauth_timestamp: oAuthTimestamp,
      oauth_version: '1.0',
    };

    if (extraParams) {
      Object.assign(parameters, extraParams);
    }

    const requestTokenSignatureBaseString = new OAuthSignature.SignatureBaseString(method, url, parameters).generate();
    const requestTokenSignatureUnencoded = new OAuthSignature.HmacSha1Signature(requestTokenSignatureBaseString, secret1, secret2).generate(false);
    const requestTokenSignatureEncoded = perEnc.encode(requestTokenSignatureUnencoded);

    let result = `OAuth oauth_nonce="${perEnc.encode(oauthNonce)}", oauth_signature="${requestTokenSignatureEncoded}", oauth_consumer_key="${key}", oauth_timestamp="${oAuthTimestamp}", oauth_signature_method="HMAC-SHA1", oauth_version="1.0"`;

    if (extraParams) {
      for (let key in extraParams) {
        result += `, ${key}="${extraParams[key]}"`;
      }
    }

    return result;
  }

  private generateOauthNonce(length: number) {
    let nonce = '';
    const range = '0123456789';
    for (let i = 0; i < length; i++) {
      nonce += range.charAt(Math.floor(Math.random() * range.length));
    }
    return nonce;
  }

  private prepareErrorObj(response: HttpResponse): any {
    const errorObj = response.content.toJSON() || {};
    errorObj.headers = {};
    Object.assign(errorObj.headers, response.headers);
    return errorObj;
  }
}
