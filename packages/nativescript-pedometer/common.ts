import { ApplicationSettings, Observable } from '@nativescript/core';
import { HealthData, HealthDataType } from 'nativescript-health-data';

export interface PedometerQueryOptions {
  startDate: Date;
  endDate?: Date;
}

export interface PedometerUpdatesOptions {
  startDate?: Date;
  onUpdate: (data: PedometerData) => void;
}

export interface PedometerData {
  startDate: Date;
  endDate: Date;
  numberOfSteps: number;
  numberOfCalories?: number;
  distance?: number;
  floorsAscended?: number;
  floorsDescended?: number;
  currentPace?: number;
  currentCadence?: number;
  averageActivePace?: number;
}

export enum PedometerEventType {
  Pause = 'pause',
  Resume = 'resume',
}

export interface PedometerEventData {
  type: PedometerEventType;
  date: Date;
}

export interface PedometerEventUpdatesOptions {
  onUpdate: (data: PedometerEventData) => void;
}

export abstract class Common extends Observable {
  protected abstract manualSourceId: string;

  private healthData: HealthData;
  private defaultTypes: Array<HealthDataType> = [
    { name: 'distance', accessType: 'readAndWrite' },
    { name: 'steps', accessType: 'readAndWrite' },
    { name: 'calories', accessType: 'readAndWrite' },
    { name: 'height', accessType: 'readAndWrite' },
    { name: 'weight', accessType: 'readAndWrite' },
    { name: 'heartRate', accessType: 'readAndWrite' },
    { name: 'fatPercentage', accessType: 'readAndWrite' },
  ];

  constructor(protected useHealthData: boolean = true) {
    super();
    if (this.useHealthData) {
      this.healthData = new HealthData();
    }
  }

  isAvailable(): Promise<boolean> {
    return this.useHealthData ? this.healthData.isAvailable() : this.isStepCountingAvailable();
  }

  abstract isStepCountingAvailable(): Promise<boolean>;
  abstract isDistanceAvailable(): Promise<boolean>;
  abstract isFloorCountingAvailable(): Promise<boolean>;
  abstract isPaceAvailable(): Promise<boolean>;
  abstract isCadenceAvailable(): Promise<boolean>;
  abstract isEventTrackingAvailable(): Promise<boolean>;
  protected abstract runOnMainThread(callback: () => void);

  isAuthorized(types?: Array<HealthDataType>): Promise<boolean> {
    return this.healthData.isAuthorized(types || this.defaultTypes);
  }

  requestAuthorization(types?: Array<HealthDataType>): Promise<void> {
    return this.healthData.requestAuthorization(types || this.defaultTypes).then(() => undefined);
  }

  query({ startDate, endDate }: PedometerQueryOptions): Promise<PedometerData> {
    if (!endDate) {
      endDate = new Date();
    }

    return Promise.all([this.healthData.query({ startDate, endDate, dataType: 'steps', unit: 'count', aggregateBy: 'sourceAndDay' }), this.healthData.query({ startDate, endDate, dataType: 'calories', unit: 'kcal', aggregateBy: 'sourceAndDay' })]).then((response) => {
      const result: PedometerData = {
        startDate: startDate,
        endDate: endDate,
        numberOfSteps: 0,
        numberOfCalories: 0,
      };

      response[0].forEach((responseItem) => {
        if (responseItem.source !== this.manualSourceId) {
          result.numberOfSteps += responseItem.value;
        }
      });

      response[1].forEach((responseItem) => {
        if (responseItem.source !== this.manualSourceId) {
          result.numberOfCalories += responseItem.value;
        }
      });

      return result;
    });
  }

  startUpdates({ startDate, onUpdate }: PedometerUpdatesOptions): Promise<void> {
    if (!startDate) {
      startDate = new Date();
    }

    return this.healthData.startMonitoring({
      dataType: 'steps',
      enableBackgroundUpdates: true,
      backgroundUpdateFrequency: 'immediate',
      onUpdate: (completionHandler: () => void) => {
        this.runOnMainThread(() => {
          this.query({ startDate: startDate, endDate: new Date() })
            .then((result) => onUpdate(result))
            .then(() => completionHandler());
        });
      },
    });
  }

  stopUpdates(): Promise<void> {
    return this.healthData.stopMonitoring({
      dataType: 'steps',
    });
  }

  startEventUpdates?(options: PedometerEventUpdatesOptions): Promise<void>;
  stopEventUpdates?(): Promise<void>;
  isRecording?(): boolean;
  startRecording?(): void;
  stopRecording?(): void;
}

export const DatabaseName = 'step-counter';

export const ServiceStateProperty = 'StepCounterServiceState';
const NotificationTitleProperty = 'StepCounterNotificationTitle';
const NotificationDescriptionProperty = 'StepCounterNotificationDescription';

export function setNotificationTitle(value: string) {
  ApplicationSettings.setString(NotificationTitleProperty, value);
}

export function getNotificationTitle(): string {
  return ApplicationSettings.getString(NotificationTitleProperty, 'Step Counter');
}

export function setNotificationDescription(value: string) {
  ApplicationSettings.setString(NotificationDescriptionProperty, value);
}

export function getNotificationDescription(): string {
  return ApplicationSettings.getString(NotificationDescriptionProperty, 'Recording the step counts.');
}

export enum ServiceAction {
  Start = 'Start',
  Stop = 'Stop',
}

export enum ServiceState {
  Started = 'Started',
  Stopped = 'Stopped',
}
