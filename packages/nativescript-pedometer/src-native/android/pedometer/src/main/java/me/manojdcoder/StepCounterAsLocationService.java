package me.manojdcoder;

import android.content.pm.ServiceInfo;
import android.os.Build;

import androidx.annotation.RequiresApi;

public class StepCounterAsLocationService extends StepCounterService {
   @RequiresApi(api = Build.VERSION_CODES.UPSIDE_DOWN_CAKE)
   @Override
   protected int findForegroundServiceType() {
     return  ServiceInfo.FOREGROUND_SERVICE_TYPE_LOCATION;
   }
}
