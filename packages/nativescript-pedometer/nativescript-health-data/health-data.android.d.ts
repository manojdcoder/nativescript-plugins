import { Common, HealthDataApi, HealthDataType, QueryRequest, ResponseItem, StartMonitoringRequest, StopMonitoringRequest } from './health-data.common';
export declare class HealthData extends Common implements HealthDataApi {
  isAvailable(updateGooglePlayServicesIfNeeded?: boolean): Promise<boolean>;
  isAuthorized(types: Array<HealthDataType>): Promise<boolean>;
  requestAuthorization(types: Array<HealthDataType>): Promise<boolean>;
  requestAuthorizationInternal(types: Array<HealthDataType>): Promise<boolean>;
  query(opts: QueryRequest): Promise<Array<ResponseItem>>;
  startMonitoring(opts: StartMonitoringRequest): Promise<void>;
  stopMonitoring(opts: StopMonitoringRequest): Promise<void>;
  private parseData;
  private dumpDataSet;
  private getDataType;
  private requestHardwarePermissions;
  private wasPermissionGranted;
  private wasPermissionsGrantedForAll;
  private requestPermissionFor;
  private permissionsNeeded;
}
