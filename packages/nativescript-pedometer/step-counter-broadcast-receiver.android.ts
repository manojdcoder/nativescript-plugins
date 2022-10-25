/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pedometer } from '.';

@NativeClass()
@JavaProxy('me.manojdcoder.StepCounterBroadcastReceiver')
class StepCounterBroadcastReceiver extends android.content.BroadcastReceiver {
  public override onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void {
    const pedometer = new Pedometer();
    if (intent.getAction() === android.content.Intent.ACTION_BOOT_COMPLETED && pedometer.isRecording?.() === true) {
      pedometer.startRecording?.();
    }
  }
}
