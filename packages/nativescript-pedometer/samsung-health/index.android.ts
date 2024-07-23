import { Utils, EventData } from "@nativescript/core";
import { Common } from "./common";

export class SamsungHealth extends Common {
    public static statusEvent = "status";

    private connectionListener: com.samsung.android.sdk.healthdata.HealthDataStore.ConnectionListener;
    private healthDataStore: com.samsung.android.sdk.healthdata.HealthDataStore;

    constructor() {
        super();
        this.connectionListener = new ConnectionListener(this);
        this.healthDataStore = new com.samsung.android.sdk.healthdata.HealthDataStore(Utils.android.getApplicationContext(), this.connectionListener);
    }

    private get permissionSet(): java.util.Set<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionKey> {
        const permissionSet = new java.util.HashSet<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionKey>();
        permissionSet.add(new com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionKey(com.samsung.android.sdk.healthdata.HealthConstants.StepCount.HEALTH_DATA_TYPE, com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionType.READ));
        permissionSet.add(new com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionKey(com.samsung.android.sdk.healthdata.HealthConstants.StepDailyTrend.HEALTH_DATA_TYPE, com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionType.READ));
        return permissionSet;
    }

    public connectService(): void {
        this.healthDataStore.connectService();
    }

    public disconnectService(): void {
        this.healthDataStore.disconnectService();
    }

    public isAuthorized(): boolean {
        const pmsManager = new com.samsung.android.sdk.healthdata.HealthPermissionManager(this.healthDataStore);
        const result = pmsManager.isPermissionAcquired(this.permissionSet);
        return !result.values().contains(java.lang.Boolean.FALSE);
    }

    public requestAuthorization(): Promise<void> {
        return new Promise((resolve, reject) => {
            const pmsManager = new com.samsung.android.sdk.healthdata.HealthPermissionManager(this.healthDataStore);
            pmsManager.requestPermissions(this.permissionSet, Utils.android.getCurrentActivity())
                .setResultListener(new com.samsung.android.sdk.healthdata.HealthResultHolder.ResultListener({
                    onResult(param0) {
                        param0.getResultMap().values().contains(java.lang.Boolean.FALSE) ? reject() :
                            resolve();
                    },
                }));
        });
    }
}

@NativeClass()
@Interfaces([com.samsung.android.sdk.healthdata.HealthDataStore.ConnectionListener])
class ConnectionListener
    extends java.lang.Object
    implements com.samsung.android.sdk.healthdata.HealthDataStore.ConnectionListener {

    constructor(public owner: SamsungHealth) {
        super();
        return global.__native(this)
    }

    public onConnected(): void {
        this.owner.notify<StatusEventData>({
            eventName: SamsungHealth.statusEvent,
            object: this.owner,
            type: StatusEventType.Connected
        });
    }

    public onConnectionFailed(result: com.samsung.android.sdk.healthdata.HealthConnectionErrorResult): void {
        this.owner.notify<StatusEventData>({
            eventName: SamsungHealth.statusEvent,
            object: this.owner,
            type: StatusEventType.Failed,
            errorCode: result.getErrorCode()
        });
    }

    public onDisconnected(): void {
        this.owner.notify<StatusEventData>({
            eventName: SamsungHealth.statusEvent,
            object: this.owner,
            type: StatusEventType.Disconnected
        });
    }
}

export enum StatusEventType {
    Connected = 'connected',
    Disconnected = 'disconnected',
    Failed = 'failed',
}

export enum StatusErrorCodes {
    UNKNOWN = 0,
    CONNECTION_FAILURE = 1,
    PLATFORM_NOT_INSTALLED = 2,
    OLD_VERSION_SDK = 3,
    OLD_VERSION_PLATFORM = 4,
    TIMEOUT = 5,
    PLATFORM_DISABLED = 6,
    USER_PASSWORD_NEEDED = 7,
    PLATFORM_SIGNATURE_FAILURE = 8,
    USER_AGREEMENT_NEEDED = 9
}

export interface StatusEventData extends EventData {
    type: StatusEventType;
    errorCode?: StatusErrorCodes;
}
