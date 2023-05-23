import { ApplicationSettings, Observable } from '@nativescript/core';
import { HealthDataType } from 'nativescript-health-data';

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
  protected defaultTypes: Array<HealthDataType> = [
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
  }
  abstract isAvailable(): Promise<boolean>;
  abstract isStepCountingAvailable(): Promise<boolean>;
  abstract isDistanceAvailable(): Promise<boolean>;
  abstract isFloorCountingAvailable(): Promise<boolean>;
  abstract isPaceAvailable(): Promise<boolean>;
  abstract isCadenceAvailable(): Promise<boolean>;
  abstract isEventTrackingAvailable(): Promise<boolean>;
  abstract isAuthorized(types?: Array<HealthDataType>): Promise<boolean>;
  abstract requestAuthorization(types?: Array<HealthDataType>): Promise<void>;
  abstract query(options: PedometerQueryOptions): Promise<PedometerData>;
  abstract startUpdates(options: PedometerUpdatesOptions): Promise<void>;
  abstract stopUpdates(): Promise<void>;
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
