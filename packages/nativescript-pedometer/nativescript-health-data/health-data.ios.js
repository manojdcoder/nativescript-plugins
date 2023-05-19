'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.HealthData = void 0;
var health_data_common_1 = require('./health-data.common');
var HealthData = (function (_super) {
  __extends(HealthData, _super);
  function HealthData() {
    var _this = _super.call(this) || this;
    _this.monitorQueries = new Map();
    if (HKHealthStore.isHealthDataAvailable()) {
      _this.healthStore = HKHealthStore.new();
    }
    return _this;
  }
  HealthData.prototype.isAvailable = function (updateGooglePlayServicesIfNeeded) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      resolve(_this.healthStore !== undefined);
    });
  };
  HealthData.prototype.isAuthorized = function (types) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      if (_this.healthStore === undefined) {
        reject('Health not available');
        return;
      }
      var authorized = true;
      types.forEach(function (t) {
        authorized = authorized && _this.healthStore.authorizationStatusForType(_this.resolveDataType(acceptableDataTypes[t.name])) === 2;
      });
      resolve(authorized);
    });
  };
  HealthData.prototype.requestAuthorization = function (types) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      if (_this.healthStore === undefined) {
        reject('Health not available');
        return;
      }
      var readDataTypes = NSMutableSet.alloc().init();
      var writeDataTypes = NSMutableSet.alloc().init();
      types
        .filter(function (t) {
          return t.accessType === 'read' || t.accessType === 'readAndWrite';
        })
        .forEach(function (t) {
          return readDataTypes.addObject(_this.resolveDataType(acceptableDataTypes[t.name]));
        });
      types
        .filter(function (t) {
          return t.accessType === 'write' || t.accessType === 'readAndWrite';
        })
        .forEach(function (t) {
          return writeDataTypes.addObject(_this.resolveDataType(acceptableDataTypes[t.name]));
        });
      _this.healthStore.requestAuthorizationToShareTypesReadTypesCompletion(writeDataTypes, readDataTypes, function (success, error) {
        if (success) {
          resolve(true);
        } else {
          reject('You do not have permissions for requested data type');
        }
      });
    });
  };
  HealthData.prototype.query = function (opts) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      _this.requestAuthorization([{ name: opts.dataType, accessType: 'read' }]).then(function (authorized) {
        if (!authorized) {
          reject('Not authorized');
          return;
        }
        var typeOfData = acceptableDataTypes[opts.dataType];
        if (quantityTypes[typeOfData] || categoryTypes[typeOfData]) {
          _this.queryForQuantityOrCategoryData(typeOfData, opts, function (res, error) {
            if (error) {
              reject(error);
            } else {
              resolve(res);
            }
          });
        } else {
          reject('Type not supported (yet)');
        }
      });
    });
  };
  HealthData.prototype.startMonitoring = function (opts) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      _this.requestAuthorization([{ name: opts.dataType, accessType: 'read' }]).then(function (authorized) {
        if (!authorized) {
          reject('Not authorized');
          return;
        }
        var typeOfData = acceptableDataTypes[opts.dataType];
        if (quantityTypes[typeOfData] || categoryTypes[typeOfData]) {
          _this.monitorData(typeOfData, opts);
          resolve();
        } else {
          reject('Type not supported (yet)');
        }
      });
    });
  };
  HealthData.prototype.stopMonitoring = function (opts) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      var typeOfData = acceptableDataTypes[opts.dataType];
      var objectType = _this.resolveDataType(typeOfData);
      if (quantityTypes[typeOfData] || categoryTypes[typeOfData]) {
        var rememberedQuery = _this.monitorQueries.get(opts.dataType);
        if (rememberedQuery) {
          _this.healthStore.stopQuery(rememberedQuery);
          _this.monitorQueries.delete(opts.dataType);
        }
        _this.healthStore.disableBackgroundDeliveryForTypeWithCompletion(objectType, function (success, error) {
          success ? resolve() : reject(error.localizedDescription);
        });
      } else {
        reject('Type not supported (yet)');
      }
    });
  };
  HealthData.prototype.resolveDataType = function (type) {
    if (quantityTypes[type]) {
      return HKObjectType.quantityTypeForIdentifier(quantityTypes[type]);
    } else if (characteristicTypes[type]) {
      return HKObjectType.characteristicTypeForIdentifier(characteristicTypes[type]);
    } else if (categoryTypes[type]) {
      return HKObjectType.categoryTypeForIdentifier(categoryTypes[type]);
    } else {
      console.log('Constant not supported: ' + type);
      return null;
    }
  };
  HealthData.prototype.queryForQuantityOrCategoryData = function (dataType, opts, callback) {
    var _this = this;
    var objectType = this.resolveDataType(dataType);
    var predicate = HKQuery.predicateForSamplesWithStartDateEndDateOptions(opts.startDate, opts.endDate, 1);
    var endDateSortDescriptor = NSSortDescriptor.alloc().initWithKeyAscending(HKSampleSortIdentifierEndDate, opts.sortOrder !== 'desc');
    var sortBy = NSArray.arrayWithObject(endDateSortDescriptor);
    var unit = opts.unit ? HKUnit.unitFromString(opts.unit) : undefined;
    var query = HKSampleQuery.alloc().initWithSampleTypePredicateLimitSortDescriptorsResultsHandler(objectType, predicate, null, sortBy, function (query, listResults, error) {
      if (listResults) {
        var parsedData = [];
        for (var index_1 = 0; index_1 < listResults.count; index_1++) {
          var sample = listResults.objectAtIndex(index_1);
          var startDate = sample.startDate,
            endDate = sample.endDate,
            source = sample.source;
          var resultItem = {
            source: source.bundleIdentifier,
            unit: opts.unit,
            start: startDate,
            end: endDate,
          };
          if (sample instanceof HKCategorySample) {
            resultItem.value = sample.value;
          } else if (sample instanceof HKQuantitySample) {
            if (sample.quantity.isCompatibleWithUnit(unit)) {
              resultItem.value = sample.quantity.doubleValueForUnit(unit);
            } else {
              console.log('Incompatible unit passed: ' + opts.unit + ' (' + unit + ')');
            }
          }
          parsedData.push(resultItem);
        }
        callback(_this.aggregate(parsedData, opts.aggregateBy), null);
      } else {
        console.dir(error);
        callback(null, error.localizedDescription);
      }
    });
    this.healthStore.executeQuery(query);
  };
  HealthData.prototype.monitorData = function (dataType, opts) {
    var objectType = this.resolveDataType(dataType);
    var query = HKObserverQuery.alloc().initWithSampleTypePredicateUpdateHandler(objectType, null, function (observerQuery, handler, error) {
      if (error) {
        opts.onError(error.localizedDescription);
        handler();
      } else {
        opts.onUpdate(function () {
          return handler();
        });
      }
    });
    this.monitorQueries.set(opts.dataType, query);
    this.healthStore.executeQuery(query);
    if (opts.enableBackgroundUpdates) {
      this.healthStore.enableBackgroundDeliveryForTypeFrequencyWithCompletion(objectType, this.getHKUpdateFrequency(opts.backgroundUpdateFrequency), function (success, error) {
        if (!success) {
          opts.onError(error.localizedDescription);
        }
      });
    }
  };
  HealthData.prototype.getHKUpdateFrequency = function (frequency) {
    if (frequency === 'weekly') {
      return 4;
    } else if (frequency === 'daily') {
      return 3;
    } else if (frequency === 'hourly') {
      return 2;
    } else {
      return 1;
    }
  };
  HealthData.prototype.queryForCharacteristicData = function (dataType) {
    var dataToRetrieve;
    switch (characteristicTypes[dataType]) {
      case HKCharacteristicTypeIdentifierBiologicalSex:
        return {
          type: dataType,
          result: this.healthStore.biologicalSexWithError().biologicalSex,
        };
      case HKCharacteristicTypeIdentifierBloodType:
        return {
          type: dataType,
          result: this.healthStore.bloodTypeWithError().bloodType,
        };
      case HKCharacteristicTypeIdentifierDateOfBirth:
        return {
          type: dataType,
          result: this.healthStore.dateOfBirthComponentsWithError().date,
        };
      case HKCharacteristicTypeIdentifierFitzpatrickSkinType:
        return {
          type: dataType,
          result: this.healthStore.fitzpatrickSkinTypeWithError().skinType,
        };
      case HKCharacteristicTypeIdentifierWheelchairUse:
        return {
          type: dataType,
          result: this.healthStore.wheelchairUseWithError().wheelchairUse,
        };
      default:
        console.log('Characteristic not implemented!');
        return null;
    }
  };
  return HealthData;
})(health_data_common_1.Common);
exports.HealthData = HealthData;
var quantityTypes = {
  activeEnergyBurned: HKQuantityTypeIdentifierActiveEnergyBurned,
  appleExerciseTime: HKQuantityTypeIdentifierAppleExerciseTime,
  basalBodyTemperature: HKQuantityTypeIdentifierBasalBodyTemperature,
  basalEnergyBurned: HKQuantityTypeIdentifierBasalEnergyBurned,
  bloodAlcoholContent: HKQuantityTypeIdentifierBloodAlcoholContent,
  bloodGlucose: HKQuantityTypeIdentifierBloodGlucose,
  bloodPressureDiastolic: HKQuantityTypeIdentifierBloodPressureDiastolic,
  bloodPressureSystolic: HKQuantityTypeIdentifierBloodPressureSystolic,
  bodyFatPercentage: HKQuantityTypeIdentifierBodyFatPercentage,
  bodyMass: HKQuantityTypeIdentifierBodyMass,
  bodyMassIndex: HKQuantityTypeIdentifierBodyMassIndex,
  bodyTemperature: HKQuantityTypeIdentifierBodyTemperature,
  dietaryBiotin: HKQuantityTypeIdentifierDietaryBiotin,
  dietaryCaffeine: HKQuantityTypeIdentifierDietaryCaffeine,
  dietaryCalcium: HKQuantityTypeIdentifierDietaryCalcium,
  dietaryCarbohydrates: HKQuantityTypeIdentifierDietaryCarbohydrates,
  dietaryChloride: HKQuantityTypeIdentifierDietaryChloride,
  dietaryCholesterol: HKQuantityTypeIdentifierDietaryCholesterol,
  dietaryChromium: HKQuantityTypeIdentifierDietaryChromium,
  dietaryCopper: HKQuantityTypeIdentifierDietaryCopper,
  dietaryEnergyConsumed: HKQuantityTypeIdentifierDietaryEnergyConsumed,
  dietaryFatMonounsaturated: HKQuantityTypeIdentifierDietaryFatMonounsaturated,
  dietaryFatPolyunsaturated: HKQuantityTypeIdentifierDietaryFatPolyunsaturated,
  dietaryFatSaturated: HKQuantityTypeIdentifierDietaryFatSaturated,
  dietaryFatTotal: HKQuantityTypeIdentifierDietaryFatTotal,
  dietaryFiber: HKQuantityTypeIdentifierDietaryFiber,
  dietaryFolate: HKQuantityTypeIdentifierDietaryFolate,
  dietaryIodine: HKQuantityTypeIdentifierDietaryIodine,
  dietaryIron: HKQuantityTypeIdentifierDietaryIron,
  dietaryMagnesium: HKQuantityTypeIdentifierDietaryMagnesium,
  dietaryManganese: HKQuantityTypeIdentifierDietaryManganese,
  dietaryaMolybdenum: HKQuantityTypeIdentifierDietaryMolybdenum,
  dietaryNiacin: HKQuantityTypeIdentifierDietaryNiacin,
  dietaryPantothenicAcid: HKQuantityTypeIdentifierDietaryPantothenicAcid,
  dietaryPhosphorus: HKQuantityTypeIdentifierDietaryPhosphorus,
  dietaryPotassium: HKQuantityTypeIdentifierDietaryPotassium,
  dietaryProtein: HKQuantityTypeIdentifierDietaryProtein,
  dietaryRiboflavin: HKQuantityTypeIdentifierDietaryRiboflavin,
  dietarySelenium: HKQuantityTypeIdentifierDietarySelenium,
  dietarySodium: HKQuantityTypeIdentifierDietarySodium,
  dietarySugar: HKQuantityTypeIdentifierDietarySugar,
  dietaryThiamin: HKQuantityTypeIdentifierDietaryThiamin,
  dietaryViataminA: HKQuantityTypeIdentifierDietaryVitaminA,
  dietaryVitaminB12: HKQuantityTypeIdentifierDietaryVitaminB12,
  dietaryVitaminB6: HKQuantityTypeIdentifierDietaryVitaminB6,
  dietaryVitaminC: HKQuantityTypeIdentifierDietaryVitaminC,
  dietaryVitaminD: HKQuantityTypeIdentifierDietaryVitaminD,
  dietaryVitaminE: HKQuantityTypeIdentifierDietaryVitaminE,
  dietaryVitaminK: HKQuantityTypeIdentifierDietaryVitaminK,
  dietaryWater: HKQuantityTypeIdentifierDietaryWater,
  dietaryZinc: HKQuantityTypeIdentifierDietaryZinc,
  distanceCycling: HKQuantityTypeIdentifierDistanceCycling,
  distanceWalkingRunning: HKQuantityTypeIdentifierDistanceWalkingRunning,
  electrodermalActivity: HKQuantityTypeIdentifierElectrodermalActivity,
  flightsClimbed: HKQuantityTypeIdentifierFlightsClimbed,
  forcedExpiratoryVolume1: HKQuantityTypeIdentifierForcedExpiratoryVolume1,
  forcedVitalCapacity: HKQuantityTypeIdentifierForcedVitalCapacity,
  heartRate: HKQuantityTypeIdentifierHeartRate,
  height: HKQuantityTypeIdentifierHeight,
  inhalerUsage: HKQuantityTypeIdentifierInhalerUsage,
  leanBodyMass: HKQuantityTypeIdentifierLeanBodyMass,
  nikeFuel: HKQuantityTypeIdentifierNikeFuel,
  numberOfTimesFallen: HKQuantityTypeIdentifierNumberOfTimesFallen,
  oxygenSaturation: HKQuantityTypeIdentifierOxygenSaturation,
  peakExpiratoryFlowRate: HKQuantityTypeIdentifierPeakExpiratoryFlowRate,
  peripheralPerfusionIndex: HKQuantityTypeIdentifierPeripheralPerfusionIndex,
  respiratoryRate: HKQuantityTypeIdentifierRespiratoryRate,
  stepCount: HKQuantityTypeIdentifierStepCount,
  uvExposure: HKQuantityTypeIdentifierUVExposure,
};
if (typeof HKQuantityTypeIdentifierDistanceSwimming !== 'undefined') {
  Object.assign(quantityTypes, {
    distanceSwimming: HKQuantityTypeIdentifierDistanceSwimming,
  });
}
if (typeof HKQuantityTypeIdentifierDistanceWheelchair !== 'undefined') {
  Object.assign(quantityTypes, {
    distanceWheelChair: HKQuantityTypeIdentifierDistanceWheelchair,
  });
}
if (typeof HKQuantityTypeIdentifierPushCount !== 'undefined') {
  Object.assign(quantityTypes, {
    pushCount: HKQuantityTypeIdentifierPushCount,
  });
}
if (typeof HKQuantityTypeIdentifierSwimmingStrokeCount !== 'undefined') {
  Object.assign(quantityTypes, {
    swimmingStrokeCount: HKQuantityTypeIdentifierSwimmingStrokeCount,
  });
}
var characteristicTypes = {
  biologicalSex: HKCharacteristicTypeIdentifierBiologicalSex,
  bloodType: HKCharacteristicTypeIdentifierBloodType,
  dateOfBirthComponents: HKCharacteristicTypeIdentifierDateOfBirth,
  fitzpatrickSkinType: HKCharacteristicTypeIdentifierFitzpatrickSkinType,
};
if (typeof HKCharacteristicTypeIdentifierWheelchairUse !== 'undefined') {
  Object.assign(characteristicTypes, {
    wheelchairUse: HKCharacteristicTypeIdentifierWheelchairUse,
  });
}
var categoryTypes = {
  appleStandHour: HKCategoryTypeIdentifierAppleStandHour,
  cervicalMucusQuality: HKCategoryTypeIdentifierCervicalMucusQuality,
  intermenstrualBleeding: HKCategoryTypeIdentifierIntermenstrualBleeding,
  menstrualFlow: HKCategoryTypeIdentifierMenstrualFlow,
  ovulationTestResult: HKCategoryTypeIdentifierOvulationTestResult,
  sleepAnalysis: HKCategoryTypeIdentifierSleepAnalysis,
  sexualActivity: HKCategoryTypeIdentifierSexualActivity,
};
if (typeof HKCategoryTypeIdentifierMindfulSession !== 'undefined') {
  Object.assign(categoryTypes, {
    mindfulSession: HKCategoryTypeIdentifierMindfulSession,
  });
}
var acceptableDataTypes = {
  steps: 'stepCount',
  sleep: 'sleepAnalysis',
  menstrual: 'menstrualFlow',
  ovulation: 'ovulationTestResult',
  mucus: 'cervicalMucusQuality',
  distance: 'distanceWalkingRunning',
  calories: 'activeEnergyBurned',
  height: 'height',
  weight: 'bodyMass',
  heartRate: 'heartRate',
  fatPercentage: 'bodyFatPercentage',
};
