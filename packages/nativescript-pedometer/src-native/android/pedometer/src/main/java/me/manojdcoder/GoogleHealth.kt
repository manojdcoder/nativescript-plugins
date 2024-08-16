package me.manojdcoder

import android.content.Intent
import androidx.health.connect.client.time.TimeRangeFilter
import android.net.Uri
import androidx.activity.result.ActivityResultLauncher
import androidx.appcompat.app.AppCompatActivity
import androidx.health.connect.client.HealthConnectClient
import androidx.health.connect.client.PermissionController
import androidx.health.connect.client.permission.HealthPermission
import androidx.health.connect.client.records.ActiveCaloriesBurnedRecord
import androidx.health.connect.client.records.StepsRecord
import androidx.health.connect.client.records.TotalCaloriesBurnedRecord
import androidx.health.connect.client.request.ReadRecordsRequest
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import java.time.Instant

class GoogleHealth(private val activity: AppCompatActivity, private val providerPackageName: String) {
  private val instance: HealthConnectClient by lazy { HealthConnectClient.getOrCreate(activity)  }
  private lateinit var activityResultLauncher : ActivityResultLauncher<Set<String>>
  private var permissionCallback: ((Boolean) -> Unit)? = null

  init {
    val requestPermissionActivityContract = PermissionController.createRequestPermissionResultContract(providerPackageName)
    activityResultLauncher = activity.registerForActivityResult(requestPermissionActivityContract) { granted ->
      permissionCallback?.let {
        it(
          granted.containsAll(permissions)
        )
      }
      permissionCallback = null
    }
  }

  private val permissions =
    setOf(
      HealthPermission.getReadPermission(StepsRecord::class),
      HealthPermission.getReadPermission(ActiveCaloriesBurnedRecord::class),
      HealthPermission.getReadPermission(TotalCaloriesBurnedRecord::class),
    )

  fun isAvailable(redirect: Boolean) : Boolean   {
    val availabilityStatus = HealthConnectClient.getSdkStatus(activity, providerPackageName)

    if (redirect && availabilityStatus == HealthConnectClient.SDK_UNAVAILABLE_PROVIDER_UPDATE_REQUIRED) {
      activity.startActivity(
        Intent(Intent.ACTION_VIEW).apply {
          setPackage("com.android.vending")
          data = Uri.parse("market://details?id=$providerPackageName&url=healthconnect%3A%2F%2Fonboarding")
          putExtra("overlay", true)
          putExtra("callerId", activity.packageName)
        }
      )
    }

    return availabilityStatus == HealthConnectClient.SDK_AVAILABLE
  }

  fun isAuthorized(callback: (Boolean) -> Unit) {
    CoroutineScope(Dispatchers.Default).launch {
      val result = instance.permissionController.getGrantedPermissions()
      callback(result.containsAll(permissions))
    }
  }

  fun requestAuthorization(callback: (Boolean) -> Unit) {
    permissionCallback = callback
    activityResultLauncher.launch(permissions)
  }

  fun query(startTime: Long, endTime: Long, callback: (String?, Long, Double, Double) -> Unit ) {
    CoroutineScope(Dispatchers.Default).launch {
      try {
        val startTimeInstant = Instant.ofEpochMilli(startTime)
        val endTimeInstant = Instant.ofEpochMilli(endTime)
        val stepResponse = instance.readRecords(
            ReadRecordsRequest(
              StepsRecord::class,
              timeRangeFilter = TimeRangeFilter.between(startTimeInstant, endTimeInstant)
            )
          )
        val totalCalResponse = instance.readRecords(
          ReadRecordsRequest(
            TotalCaloriesBurnedRecord::class,
            timeRangeFilter = TimeRangeFilter.between(startTimeInstant, endTimeInstant)
          )
        )
        val activeCalResponse = instance.readRecords(
          ReadRecordsRequest(
            ActiveCaloriesBurnedRecord::class,
            timeRangeFilter = TimeRangeFilter.between(startTimeInstant, endTimeInstant)
          )
        )
       callback(null,  stepResponse.records.sumOf { it.count }, totalCalResponse.records.sumOf { it.energy.inKilocalories }, activeCalResponse.records.sumOf { it.energy.inKilocalories })
      } catch (e: Exception) {
        callback(e.toString(), 0, 0.0, 0.0)
      }
    }
  }
}
