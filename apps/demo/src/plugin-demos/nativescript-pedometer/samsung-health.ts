import { EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptPedometer } from '@demo/shared';
import { SamsungHealth, StatusErrorCodes, StatusEventData, StatusEventType } from '@manojdcoder/nativescript-pedometer/samsung-health';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new SamsungHealthModel();
}

export class SamsungHealthModel extends DemoSharedNativescriptPedometer {
    public isConnected: boolean;

    private instance: SamsungHealth = new SamsungHealth();

    constructor() {
        super();
        this.instance.addEventListener(SamsungHealth.statusEvent, this.onStatusUpdate, this);
    }

    onStatusUpdate(args: StatusEventData) {
        console.log(`Samsung Health Status: ${args.type}`);
        if (args.errorCode !== undefined) {
            switch (args.errorCode) {
                case StatusErrorCodes.UNKNOWN:
                    alert("Failed with an unknown error!");
                    break;
                case StatusErrorCodes.CONNECTION_FAILURE:
                    alert("Something went wrong, unable to connect!");
                    break;
                case StatusErrorCodes.PLATFORM_NOT_INSTALLED:
                    alert("Please install Samsung Health app and try again!");
                    break;
                case StatusErrorCodes.OLD_VERSION_SDK:
                    alert("Oops, the developer needs to update the SDK!");
                    break;
                case StatusErrorCodes.OLD_VERSION_PLATFORM:
                    alert("Oops, you are using an older version of Samsung Health app, please update!");
                    break;
                case StatusErrorCodes.TIMEOUT:
                    alert("Timeout, try again!");
                    break;
                case StatusErrorCodes.PLATFORM_DISABLED:
                    alert("Samsung Health is disabled!");
                    break;
                case StatusErrorCodes.USER_PASSWORD_NEEDED:
                    alert("Samsung Health needs password!");
                    break;
                case StatusErrorCodes.PLATFORM_SIGNATURE_FAILURE:
                    alert("It fails to check the signature of the health data framework.")
                    break;
                case StatusErrorCodes.USER_AGREEMENT_NEEDED:
                    alert("User must accept agreement in Samsung Health app!");
                    break;
                default:
                    alert("Unidentified error!");
            }
        }
        this.isConnected = args.type === StatusEventType.Connected;
        this.notifyPropertyChange("isConnected", this.isConnected);
    }

    connect() {
        if (this.isConnected) {
            this.instance.disconnectService();
            this.isConnected = false;
            this.notifyPropertyChange("isConnected", this.isConnected);
        } else {
            this.instance.connectService();
        }
    }

    isAuthorized(): void {
        const result = this.instance.isAuthorized();
        alert(result ? 'Authorized' : 'Not Authorized');
    }

    requestAuthorization(): void {
        this.instance.requestAuthorization()
            .then(() => alert('Permission granted'))
            .catch(() => {
                alert('Permission denied');
            });
    }
}
