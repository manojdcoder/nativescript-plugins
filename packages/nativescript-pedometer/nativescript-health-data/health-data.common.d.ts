export interface ConfigurationData {
  startDate: Date;
  endDate: Date;
  gfBucketUnit: string;
  gfBucketSize: number;
  typeOfData: string;
}
export interface HealthDataType {
  name: string;
  accessType: 'read' | 'write' | 'readAndWrite';
}
export declare type AggregateBy = 'hour' | 'day' | 'sourceAndDay';
export declare type BackgroundUpdateFrequency = 'immediate' | 'hourly' | 'daily' | 'weekly';
export declare type SortOrder = 'asc' | 'desc';
export interface QueryRequest {
  startDate: Date;
  endDate: Date;
  dataType: string;
  unit: string;
  aggregateBy?: AggregateBy;
  sortOrder?: SortOrder;
  limit?: number;
}
export interface StartMonitoringRequest {
  enableBackgroundUpdates?: boolean;
  backgroundUpdateFrequency?: BackgroundUpdateFrequency;
  dataType: string;
  onUpdate: (completionHandler: () => void) => void;
  onError?: (error: string) => void;
}
export interface StopMonitoringRequest {
  dataType?: string;
}
export interface ResponseItem {
  start: Date;
  end: Date;
  value: number;
  unit: string;
  source?: string;
}
export interface HealthDataApi {
  isAvailable(updateGooglePlayServicesIfNeeded?: boolean): Promise<boolean>;
  isAuthorized(types: Array<HealthDataType>): Promise<boolean>;
  requestAuthorization(types: Array<HealthDataType>): Promise<boolean>;
  query(opts: QueryRequest): Promise<Array<ResponseItem>>;
  startMonitoring(opts: StartMonitoringRequest): Promise<void>;
  stopMonitoring(opts: StopMonitoringRequest): Promise<void>;
}
export declare abstract class Common {
  protected aggregate(parsedData: Array<ResponseItem>, aggregateBy?: AggregateBy): Array<ResponseItem>;
  private aggregateData;
  private isSameAggregationInterval;
}
