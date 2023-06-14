'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.HealthData = void 0;
var health_data_common_1 = require('./health-data.common');
var core_1 = require('@nativescript/core');
var index_android_1 = require('@nativescript/core/application/index.android');
var GOOGLE_FIT_PERMISSIONS_REQUEST_CODE = 2;
var AppPackageName = useAndroidX() ? global.androidx.core.app : android.support.v4.app;
var ContentPackageName = useAndroidX() ? global.androidx.core.content : android.support.v4.content;
function useAndroidX() {
  return global.androidx && global.androidx.appcompat;
}
var DataReadRequest = com.google.android.gms.fitness.request.DataReadRequest;
var DataType = com.google.android.gms.fitness.data.DataType;
var Fitness = com.google.android.gms.fitness.Fitness;
var GoogleApiAvailability = com.google.android.gms.common.GoogleApiAvailability;
var TimeUnit = java.util.concurrent.TimeUnit;
var FitnessOptions = com.google.android.gms.fitness.FitnessOptions;
var FitnessActivities = com.google.android.gms.fitness.FitnessActivities;
var GoogleSignIn = com.google.android.gms.auth.api.signin.GoogleSignIn;
var HealthData = (function (_super) {
  __extends(HealthData, _super);
  function HealthData() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  HealthData.prototype.isAvailable = function (updateGooglePlayServicesIfNeeded) {
    if (updateGooglePlayServicesIfNeeded === void 0) {
      updateGooglePlayServicesIfNeeded = true;
    }
    return new Promise(function (resolve, reject) {
      var gApi = GoogleApiAvailability.getInstance();
      var apiResult = gApi.isGooglePlayServicesAvailable(core_1.Utils.android.getApplicationContext());
      var available = apiResult === com.google.android.gms.common.ConnectionResult.SUCCESS;
      if (!available && updateGooglePlayServicesIfNeeded && gApi.isUserResolvableError(apiResult)) {
        gApi.showErrorDialogFragment(
          core_1.Application.android.foregroundActivity || core_1.Application.android.startActivity,
          apiResult,
          1,
          new android.content.DialogInterface.OnCancelListener({
            onCancel: function (dialogInterface) {
              return console.log('Google Play Services update dialog was canceled');
            },
          })
        );
      }
      resolve(available);
    });
  };
  HealthData.prototype.isAuthorized = function (types) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      var fitnessOptionsBuilder = FitnessOptions.builder();
      types
        .filter(function (t) {
          return t.accessType === 'read' || t.accessType === 'readAndWrite';
        })
        .forEach(function (t) {
          return fitnessOptionsBuilder.addDataType(_this.getDataType(t.name), FitnessOptions.ACCESS_READ);
        });
      types
        .filter(function (t) {
          return t.accessType === 'write' || t.accessType === 'readAndWrite';
        })
        .forEach(function (t) {
          return fitnessOptionsBuilder.addDataType(_this.getDataType(t.name), FitnessOptions.ACCESS_WRITE);
        });
      resolve(GoogleSignIn.hasPermissions(GoogleSignIn.getLastSignedInAccount(core_1.Application.android.foregroundActivity || core_1.Application.android.startActivity), fitnessOptionsBuilder.build()));
    });
  };
  HealthData.prototype.requestAuthorization = function (types) {
    return Promise.all([this.requestHardwarePermissions(types), this.requestAuthorizationInternal(types)]).then(function (results) {
      return Promise.resolve(results[0] && results[1]);
    });
  };
  HealthData.prototype.requestAuthorizationInternal = function (types) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      var fitnessOptionsBuilder = FitnessOptions.builder();
      types
        .filter(function (t) {
          return t.accessType === 'read' || t.accessType === 'readAndWrite';
        })
        .forEach(function (t) {
          return fitnessOptionsBuilder.addDataType(_this.getDataType(t.name), FitnessOptions.ACCESS_READ);
        });
      types
        .filter(function (t) {
          return t.accessType === 'write' || t.accessType === 'readAndWrite';
        })
        .forEach(function (t) {
          return fitnessOptionsBuilder.addDataType(_this.getDataType(t.name), FitnessOptions.ACCESS_WRITE);
        });
      var fitnessOptions = fitnessOptionsBuilder.build();
      if (GoogleSignIn.hasPermissions(GoogleSignIn.getLastSignedInAccount(core_1.Application.android.foregroundActivity || core_1.Application.android.startActivity), fitnessOptions)) {
        resolve(true);
        return;
      }
      var activityResultHandler = function (args) {
        core_1.Application.android.off(index_android_1.AndroidApplication.activityResultEvent, activityResultHandler);
        resolve(args.requestCode === GOOGLE_FIT_PERMISSIONS_REQUEST_CODE && args.resultCode === android.app.Activity.RESULT_OK);
      };
      core_1.Application.android.on(index_android_1.AndroidApplication.activityResultEvent, activityResultHandler);
      GoogleSignIn.requestPermissions(core_1.Application.android.foregroundActivity, GOOGLE_FIT_PERMISSIONS_REQUEST_CODE, GoogleSignIn.getLastSignedInAccount(core_1.Application.android.foregroundActivity || core_1.Application.android.startActivity), fitnessOptions);
    });
  };
  HealthData.prototype.query = function (opts) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      try {
        _this.requestAuthorizationInternal([{ name: opts.dataType, accessType: 'read' }]).then(function (authorized) {
          if (!authorized) {
            reject('Not authorized');
            return;
          }
          var readRequest = new DataReadRequest.Builder().read(_this.getDataType(opts.dataType));
          if (_this.getDataType(opts.dataType) === DataType.AGGREGATE_CALORIES_EXPENDED) {
            readRequest = readRequest.bucketByActivitySegment(1, TimeUnit.SECONDS);
          }
          readRequest = readRequest.setTimeRange(opts.startDate.getTime(), opts.endDate.getTime(), TimeUnit.MILLISECONDS).build();
          Fitness.getHistoryClient(core_1.Application.android.foregroundActivity || core_1.Application.android.startActivity, GoogleSignIn.getLastSignedInAccount(core_1.Application.android.foregroundActivity || core_1.Application.android.startActivity))
            .readData(readRequest)
            .addOnSuccessListener(
              new com.google.android.gms.tasks.OnSuccessListener({
                onSuccess: function (dataReadResponse) {
                  resolve(_this.parseData(dataReadResponse.getResult(), opts));
                },
              })
            )
            .addOnFailureListener(
              new com.google.android.gms.tasks.OnFailureListener({
                onFailure: function (exception) {
                  reject(exception.getMessage());
                },
              })
            )
            .addOnCompleteListener(
              new com.google.android.gms.tasks.OnCompleteListener({
                onComplete: function (task) {},
              })
            );
        });
      } catch (e) {
        reject(e);
      }
    });
  };
  HealthData.prototype.startMonitoring = function (opts) {
    return new Promise(function (resolve, reject) {
      reject('Not supported');
    });
  };
  HealthData.prototype.stopMonitoring = function (opts) {
    return new Promise(function (resolve, reject) {
      reject('Not supported');
    });
  };
  HealthData.prototype.parseData = function (readResult, opts) {
    var result = [];
    if (readResult.getBuckets().size() > 0) {
      for (var indexBucket = 0; indexBucket < readResult.getBuckets().size(); indexBucket++) {
        var bucket = readResult.getBuckets().get(indexBucket);
        if (bucket.getActivity() !== FitnessActivities.STILL && bucket.getActivity() !== FitnessActivities.UNKNOWN) {
          var dataSets = bucket.getDataSets();
          for (var indexDataSet = 0; indexDataSet < dataSets.size(); indexDataSet++) {
            result = result.concat(this.dumpDataSet(dataSets.get(indexDataSet), opts));
          }
        }
      }
    } else if (readResult.getDataSets().size() > 0) {
      for (var index_1 = 0; index_1 < readResult.getDataSets().size(); index_1++) {
        result = result.concat(this.dumpDataSet(readResult.getDataSets().get(index_1), opts));
      }
    }
    if (opts.sortOrder === 'desc') {
      result = result.reverse();
    }
    return result;
  };
  HealthData.prototype.dumpDataSet = function (dataSet, opts) {
    var parsedData = [];
    var packageManager = core_1.Utils.android.getApplicationContext().getPackageManager();
    var packageToAppNameCache = new Map();
    for (var index_2 = 0; index_2 < dataSet.getDataPoints().size(); index_2++) {
      var pos = dataSet.getDataPoints().get(index_2);
      for (var indexField = 0; indexField < pos.getDataType().getFields().size(); indexField++) {
        var field = pos.getDataType().getFields().get(indexField);
        var value = pos.getValue(field);
        var packageName = pos.getOriginalDataSource().getAppPackageName();
        var source = packageName ? packageName : pos.getOriginalDataSource().getStreamName();
        if (packageName) {
          if (!packageToAppNameCache.has(packageName)) {
            try {
              var appName = packageManager.getApplicationLabel(packageManager.getApplicationInfo(packageName, android.content.pm.PackageManager.GET_META_DATA));
              packageToAppNameCache.set(packageName, appName);
            } catch (ignore) {
              packageToAppNameCache.set(packageName, packageName);
            }
          }
          source = packageToAppNameCache.get(packageName);
        }
        parsedData.push({
          start: new Date(pos.getStartTime(TimeUnit.MILLISECONDS)),
          end: new Date(pos.getEndTime(TimeUnit.MILLISECONDS)),
          value: value.getFormat() === 1 ? value.asInt() : Math.round(value.asFloat() * 1000) / 1000,
          unit: opts.unit,
          source: source,
        });
      }
    }
    return this.aggregate(parsedData, opts.aggregateBy);
  };
  HealthData.prototype.getDataType = function (pluginType) {
    var typeOfData = acceptableDataTypesForCommonity[pluginType];
    return aggregatedDataTypes[typeOfData];
  };
  HealthData.prototype.requestHardwarePermissions = function (types) {
    var _this = this;
    return this.requestPermissionFor(
      types,
      this.permissionsNeeded(types).filter(function (permission) {
        return !_this.wasPermissionGranted(permission);
      })
    );
  };
  HealthData.prototype.wasPermissionGranted = function (permission) {
    var hasPermission = android.os.Build.VERSION.SDK_INT < 23;
    if (!hasPermission) {
      hasPermission = android.content.pm.PackageManager.PERMISSION_GRANTED === ContentPackageName.ContextCompat.checkSelfPermission(core_1.Utils.android.getApplicationContext(), permission);
    }
    return hasPermission;
  };
  HealthData.prototype.wasPermissionsGrantedForAll = function (types) {
    var _this = this;
    return this.permissionsNeeded(types).every(function (permission) {
      return _this.wasPermissionGranted(permission);
    });
  };
  HealthData.prototype.requestPermissionFor = function (types, permissions) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      if (!_this.wasPermissionsGrantedForAll(types)) {
        var activityRequestPermissionsHandler_1 = function (args) {
          core_1.Application.android.off(index_android_1.AndroidApplication.activityRequestPermissionsEvent, activityRequestPermissionsHandler_1);
          resolve(true);
        };
        core_1.Application.android.on(index_android_1.AndroidApplication.activityRequestPermissionsEvent, activityRequestPermissionsHandler_1);
        AppPackageName.ActivityCompat.requestPermissions(core_1.Application.android.foregroundActivity, permissions, 235);
      } else {
        resolve(true);
      }
    });
  };
  HealthData.prototype.permissionsNeeded = function (types) {
    var permissions = [android.Manifest.permission.ACCESS_NETWORK_STATE];
    if (android.os.Build.VERSION.SDK_INT < 23) {
      permissions.push(android.Manifest.permission.GET_ACCOUNTS);
    }
    if (android.os.Build.VERSION.SDK_INT > 28) {
      permissions.push(android.Manifest.permission.ACTIVITY_RECOGNITION);
    }
    if (types.find((item) => aggregatedDataTypes[acceptableDataTypesForCommonity[item.name]] === DataType.AGGREGATE_DISTANCE_DELTA)) {
      permissions.push(android.Manifest.permission.ACCESS_FINE_LOCATION);
    }
    if (android.os.Build.VERSION.SDK_INT > 19 && types.find((item) => aggregatedDataTypes[acceptableDataTypesForCommonity[item.name]] === DataType.AGGREGATE_HEART_RATE_SUMMARY)) {
      permissions.push(android.Manifest.permission.BODY_SENSORS);
    }
    return permissions;
  };
  return HealthData;
})(health_data_common_1.Common);
exports.HealthData = HealthData;
var aggregatedDataTypes = {
  TYPE_STEP_COUNT_DELTA: DataType.AGGREGATE_STEP_COUNT_DELTA,
  TYPE_DISTANCE_DELTA: DataType.AGGREGATE_DISTANCE_DELTA,
  TYPE_CALORIES_EXPENDED: DataType.AGGREGATE_CALORIES_EXPENDED,
  TYPE_HEIGHT: DataType.TYPE_HEIGHT,
  TYPE_WEIGHT: DataType.TYPE_WEIGHT,
  TYPE_HEART_RATE_BPM: DataType.AGGREGATE_HEART_RATE_SUMMARY,
  TYPE_BODY_FAT_PERCENTAGE: DataType.AGGREGATE_BODY_FAT_PERCENTAGE_SUMMARY,
  TYPE_NUTRITION: DataType.AGGREGATE_NUTRITION_SUMMARY,
};
var acceptableDataTypesForCommonity = {
  steps: 'TYPE_STEP_COUNT_DELTA',
  distance: 'TYPE_DISTANCE_DELTA',
  calories: 'TYPE_CALORIES_EXPENDED',
  height: 'TYPE_HEIGHT',
  weight: 'TYPE_WEIGHT',
  heartRate: 'TYPE_HEART_RATE_BPM',
  fatPercentage: 'TYPE_BODY_FAT_PERCENTAGE',
};
