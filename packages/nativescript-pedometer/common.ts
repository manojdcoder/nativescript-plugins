import { Observable } from '@nativescript/core';

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
  abstract isAvailable(): Promise<boolean>;
  abstract isStepCountingAvailable(): Promise<boolean>;
  abstract isDistanceAvailable(): Promise<boolean>;
  abstract isFloorCountingAvailable(): Promise<boolean>;
  abstract isPaceAvailable(): Promise<boolean>;
  abstract isCadenceAvailable(): Promise<boolean>;
  abstract isEventTrackingAvailable(): Promise<boolean>;
  abstract isAuthorized(): Promise<boolean>;
  abstract requestAuthorization(): Promise<void>;
  abstract query(options: PedometerQueryOptions): Promise<PedometerData>;
  abstract startUpdates(options: PedometerUpdatesOptions): Promise<void>;
  abstract stopUpdates(): Promise<void>;
  abstract startEventUpdates(options: PedometerEventUpdatesOptions): Promise<void>;
  abstract stopEventUpdates(): Promise<void>;
}
