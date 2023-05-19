import { Common, HealthDataApi, HealthDataType, QueryRequest, ResponseItem, StartMonitoringRequest, StopMonitoringRequest } from './health-data.common';
export declare class HealthData extends Common implements HealthDataApi {
  private healthStore;
  private monitorQueries;
  constructor();
  isAvailable(updateGooglePlayServicesIfNeeded?: boolean): Promise<boolean>;
  isAuthorized(types: Array<HealthDataType>): Promise<boolean>;
  requestAuthorization(types: Array<HealthDataType>): Promise<boolean>;
  query(opts: QueryRequest): Promise<Array<ResponseItem>>;
  startMonitoring(opts: StartMonitoringRequest): Promise<void>;
  stopMonitoring(opts: StopMonitoringRequest): Promise<void>;
  private resolveDataType;
  private queryForQuantityOrCategoryData;
  private monitorData;
  private getHKUpdateFrequency;
  private queryForCharacteristicData;
}
