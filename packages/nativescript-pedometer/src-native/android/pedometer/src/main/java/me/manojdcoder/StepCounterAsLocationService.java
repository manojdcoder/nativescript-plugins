package me.manojdcoder;

import android.content.pm.ServiceInfo;
import android.os.Build;

import androidx.annotation.RequiresApi;

public class StepCounterAsLocationService extends StepCounterService {
   @RequiresApi(api = Build.VERSION_CODES.Q)
   @Override
   protected int findForegroundServiceType() {
     return  ServiceInfo.FOREGROUND_SERVICE_TYPE_LOCATION;
   }
}
