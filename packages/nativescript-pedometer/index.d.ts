import { Common } from './common';

export { PedometerData, PedometerEventData, PedometerEventType, PedometerEventUpdatesOptions, PedometerQueryOptions, PedometerUpdatesOptions } from './common';

export declare class Pedometer extends Common {}

export function openUrl(url: string): Promise<void>;
