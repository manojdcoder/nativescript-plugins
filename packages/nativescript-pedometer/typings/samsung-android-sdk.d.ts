declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class BuildConfig {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class HealthConnectionErrorResult {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConnectionErrorResult>;
						public static UNKNOWN: number;
						public static CONNECTION_FAILURE: number;
						public static PLATFORM_NOT_INSTALLED: number;
						public static OLD_VERSION_SDK: number;
						public static OLD_VERSION_PLATFORM: number;
						public static TIMEOUT: number;
						public static PLATFORM_DISABLED: number;
						public static USER_PASSWORD_NEEDED: number;
						public static PLATFORM_SIGNATURE_FAILURE: number;
						public static USER_AGREEMENT_NEEDED: number;
						public static SUCCESS: number;
						public static PLATFORM_INITIALIZING: number;
						public static USER_PASSWORD_POPUP: number;
						public hasResolution(): boolean;
						public constructor(param0: number, param1: boolean);
						public getErrorCode(): number;
						public resolve(param0: globalAndroid.app.Activity): void;
						public setPackageManager(param0: globalAndroid.content.pm.PackageManager): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class HealthConstants {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants>;
						public static USER_PROFILE_DATA_TYPE: string;
						public constructor();
					}
					export namespace HealthConstants {
						export class Albumin extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Albumin>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Albumin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static ALBUMIN: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class Alp extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Alp>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Alp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static ALP: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class Alt extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Alt>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Alt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static ALT: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class AmbientTemperature extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.AmbientTemperature>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$AmbientTemperature interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static TEMPERATURE: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static LATITUDE: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static HUMIDITY: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static LONGITUDE: string;
							public static ALTITUDE: string;
							public static UPDATE_TIME: string;
							public static ACCURACY: string;
							public static COMMENT: string;
						}
						export class Amylase extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Amylase>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Amylase interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static AMYLASE: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class Ast extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Ast>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Ast interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static AST: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class BloodGlucose extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.BloodGlucose>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$BloodGlucose interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static MEAL_TYPE_BEFORE_DINNER: number;
							public static MEAL_TYPE_AFTER_BEDTIME: number;
							public static SAMPLE_SOURCE_TYPE: string;
							public static SAMPLE_SOURCE_TYPE_VENOUS: number;
							public static TIME_OFFSET: string;
							public static MEAL_TYPE: string;
							public static MEAL_TYPE_BEFORE_LUNCH: number;
							public static MEASUREMENT_TYPE_PLASMA: number;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static MEAL_TYPE_BEFORE_MEAL: number;
							public static MEASUREMENT_TYPE_WHOLE_BLOOD: number;
							public static DEVICE_UUID: string;
							public static UPDATE_TIME: string;
							public static MEAL_TYPE_AFTER_LUNCH: number;
							public static SAMPLE_SOURCE_TYPE_NOT_DEFINED: number;
							public static MEAL_TYPE_AFTER_MEAL: number;
							public static MEAL_TYPE_AFTER_SNACK: number;
							public static MEAL_TYPE_BEFORE_BREAKFAST: number;
							public static SAMPLE_SOURCE_TYPE_CAPILLARY: number;
							public static GLUCOSE: string;
							public static MEAL_TYPE_AFTER_DINNER: number;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static MEAL_TYPE_GENERAL: number;
							public static UUID: string;
							public static MEASUREMENT_TYPE: string;
							public static MEAL_TYPE_AFTER_BREAKFAST: number;
							public static START_TIME: string;
							public static MEASUREMENT_TYPE_SERUM: number;
							public static MEAL_TIME: string;
							public static MEASUREMENT_TYPE_NOT_DEFINED: number;
							public static MEAL_TYPE_BEFORE_SLEEP: number;
							public static MEAL_TYPE_FASTING: number;
							public static COMMENT: string;
						}
						export class BloodPressure extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.BloodPressure>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$BloodPressure interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static PULSE: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static MEAN: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static DIASTOLIC: string;
							public static UPDATE_TIME: string;
							public static SYSTOLIC: string;
							public static COMMENT: string;
						}
						export class BodyFat extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.BodyFat>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$BodyFat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static BODY_FAT: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class BodyMuscle extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.BodyMuscle>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$BodyMuscle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static BODY_MUSCLE: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class BodyTemperature extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.BodyTemperature>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$BodyTemperature interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static TEMPERATURE: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static COMMENT: string;
						}
						export class Bun extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Bun>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Bun interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static BUN: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class CaffeineIntake extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.CaffeineIntake>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$CaffeineIntake interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static UNIT_AMOUNT: string;
							public static START_TIME: string;
							public static AMOUNT: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static COMMENT: string;
						}
						export class Common {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Common>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Common interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static DEVICE_UUID: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static UUID: string;
						}
						export class Cpk extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Cpk>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Cpk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static CPK: string;
						}
						export class Creatinine extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Creatinine>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Creatinine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CREATININE: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class DirectBilirubin extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.DirectBilirubin>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$DirectBilirubin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static DIRECT_BILIRUBIN: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class DiscreteMeasurement extends com.samsung.android.sdk.healthdata.HealthConstants.Common {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$DiscreteMeasurement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static UUID: string;
						}
						export class Electrocardiogram extends com.samsung.android.sdk.healthdata.HealthConstants.SessionMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Electrocardiogram>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Electrocardiogram interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static SAMPLE_FREQUENCY: string;
							public static END_TIME: string;
							public static MAX_HEART_RATE: string;
							public static MEAN_HEART_RATE: string;
							public static DATA: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static START_TIME: string;
							public static DATA_FORMAT: string;
							public static DEVICE_UUID: string;
							public static SAMPLE_COUNT: string;
							public static MIN_HEART_RATE: string;
							public static UPDATE_TIME: string;
							public static COMMENT: string;
						}
						export class Exercise extends com.samsung.android.sdk.healthdata.HealthConstants.SessionMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Exercise>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Exercise interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static EXERCISE_TYPE: string;
							public static COUNT_TYPE: string;
							public static TIME_OFFSET: string;
							public static MIN_ALTITUDE: string;
							public static MAX_RPM: string;
							public static COUNT: string;
							public static COUNT_TYPE_STROKE: number;
							public static PACKAGE_NAME: string;
							public static MEAN_CALORICBURN_RATE: string;
							public static HEALTH_DATA_TYPE: string;
							public static DURATION: string;
							public static MEAN_RPM: string;
							public static INCLINE_DISTANCE: string;
							public static DISTANCE: string;
							public static MAX_CALORICBURN_RATE: string;
							public static MAX_POWER: string;
							public static DEVICE_UUID: string;
							public static MAX_CADENCE: string;
							public static UPDATE_TIME: string;
							public static LIVE_DATA: string;
							public static CALORIE: string;
							public static ADDITIONAL: string;
							public static MEAN_POWER: string;
							public static COUNT_TYPE_REPETITION: number;
							public static COUNT_TYPE_SWING: number;
							public static MAX_ALTITUDE: string;
							public static END_TIME: string;
							public static EXERCISE_CUSTOM_TYPE: string;
							public static MAX_HEART_RATE: string;
							public static MAX_SPEED: string;
							public static MEAN_HEART_RATE: string;
							public static LOCATION_DATA: string;
							public static COUNT_TYPE_STRIDE: number;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static ALTITUDE_LOSS: string;
							public static MEAN_CADENCE: string;
							public static UUID: string;
							public static MEAN_SPEED: string;
							public static START_TIME: string;
							public static ALTITUDE_GAIN: string;
							public static MIN_HEART_RATE: string;
							public static DECLINE_DISTANCE: string;
							public static VO2_MAX: string;
							public static COMMENT: string;
						}
						export class Fev1 extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Fev1>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Fev1 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static FEV1: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class FloorsClimbed extends com.samsung.android.sdk.healthdata.HealthConstants.SessionMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.FloorsClimbed>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$FloorsClimbed interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static END_TIME: string;
							public static FLOOR: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class FoodInfo extends com.samsung.android.sdk.healthdata.HealthConstants.Common {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.FoodInfo>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$FoodInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static PROVIDER_FOOD_ID: string;
							public static DIETARY_FIBER: string;
							public static PACKAGE_NAME: string;
							public static INFO_PROVIDER: string;
							public static HEALTH_DATA_TYPE: string;
							public static SATURATED_FAT: string;
							public static TRANS_FAT: string;
							public static SERVING_DESCRIPTION: string;
							public static UNIT_COUNT_PER_CALORIE: string;
							public static SODIUM: string;
							public static DEVICE_UUID: string;
							public static CARBOHYDRATE: string;
							public static DEFAULT_NUMBER_OF_SERVING_UNIT: string;
							public static UPDATE_TIME: string;
							public static IRON: string;
							public static CALORIE: string;
							public static NAME: string;
							public static SUGAR: string;
							public static DESCRIPTION: string;
							public static CALCIUM: string;
							public static CUSTOM: string;
							public static POTASSIUM: string;
							public static CREATE_TIME: string;
							public static MONOSATURATED_FAT: string;
							public static TOTAL_FAT: string;
							public static VITAMIN_A: string;
							public static UUID: string;
							public static VITAMIN_C: string;
							public static PROTEIN: string;
							public static POLYSATURATED_FAT: string;
							public static CHOLESTEROL: string;
							public static METRIC_SERVING_AMOUNT: string;
							public static METRIC_SERVING_UNIT: string;
						}
						export class FoodIntake extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.FoodIntake>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$FoodIntake interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static MEAL_TYPE_AFTERNOON_SNACK: number;
							public static UNIT_TYPE_NOT_DEFINED: string;
							public static TIME_OFFSET: string;
							public static MEAL_TYPE: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UNIT: string;
							public static MEAL_TYPE_BREAKFAST: number;
							public static MEAL_TYPE_EVENING_SNACK: number;
							public static FOOD_INFO_ID: string;
							public static DEVICE_UUID: string;
							public static UPDATE_TIME: string;
							public static CALORIE: string;
							public static NAME: string;
							public static MEAL_TYPE_LUNCH: number;
							public static AMOUNT: string;
							public static UNIT_TYPE_DEFAULT: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static MEAL_TYPE_MORNING_SNACK: number;
							public static UUID: string;
							public static UNIT_TYPE_OUNCE: string;
							public static START_TIME: string;
							public static UNIT_TYPE_KILOCALORIE: string;
							public static UNIT_TYPE_GRAM: string;
							public static MEAL_TYPE_DINNER: number;
							public static COMMENT: string;
						}
						export class Fvc extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Fvc>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Fvc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static FVC: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class Ggt extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Ggt>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Ggt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static GGT: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class Globulin extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Globulin>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Globulin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static GLOBULIN: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class HbA1c extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.HbA1c>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$HbA1c interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HBA1C: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static COMMENT: string;
						}
						export class Hdlc extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Hdlc>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Hdlc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static HDLC: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class HealthDocument extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.HealthDocument>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$HealthDocument interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static DOCUMENT: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static ID: string;
							public static CREATE_TIME: string;
							public static TITLE: string;
							public static PATIENT: string;
							public static PACKAGE_NAME: string;
							public static TYPE: string;
							public static TYPE_PDF: number;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static PATIENT_GENDER: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static AUTHOR: string;
							public static UPDATE_TIME: string;
							public static TYPE_CDA: number;
							public static PATIENT_BIRTHDATE: string;
							public static CUSTODIAN: string;
						}
						export class HeartRate extends com.samsung.android.sdk.healthdata.HealthConstants.SessionMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.HeartRate>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$HeartRate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static MIN: string;
							public static END_TIME: string;
							public static BINNING_DATA: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static HEART_BEAT_COUNT: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static START_TIME: string;
							public static MAX: string;
							public static HEART_RATE: string;
							public static DEVICE_UUID: string;
							public static UPDATE_TIME: string;
							public static COMMENT: string;
						}
						export class Height extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Height>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Height interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEIGHT: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class HipCircumference extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.HipCircumference>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$HipCircumference interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static HIP_CIRCUM: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class Homocysteine extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Homocysteine>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Homocysteine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static HOMOCYSTEINE: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class Ldh extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Ldh>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Ldh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static LDH: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class Ldlc extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Ldlc>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Ldlc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static LDLC: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class Nutrition extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Nutrition>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Nutrition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static MEAL_TYPE_AFTERNOON_SNACK: number;
							public static DIETARY_FIBER: string;
							public static TIME_OFFSET: string;
							public static MEAL_TYPE: string;
							public static TITLE: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static SATURATED_FAT: string;
							public static TRANS_FAT: string;
							public static MEAL_TYPE_BREAKFAST: number;
							public static MEAL_TYPE_EVENING_SNACK: number;
							public static SODIUM: string;
							public static DEVICE_UUID: string;
							public static CARBOHYDRATE: string;
							public static UPDATE_TIME: string;
							public static IRON: string;
							public static CALORIE: string;
							public static SUGAR: string;
							public static MEAL_TYPE_LUNCH: number;
							public static CALCIUM: string;
							public static CUSTOM: string;
							public static POTASSIUM: string;
							public static CREATE_TIME: string;
							public static MONOSATURATED_FAT: string;
							public static MEAL_TYPE_MORNING_SNACK: number;
							public static TOTAL_FAT: string;
							public static VITAMIN_A: string;
							public static UUID: string;
							public static VITAMIN_C: string;
							public static PROTEIN: string;
							public static START_TIME: string;
							public static POLYSATURATED_FAT: string;
							public static CHOLESTEROL: string;
							public static MEAL_TYPE_DINNER: number;
						}
						export class OxygenSaturation extends com.samsung.android.sdk.healthdata.HealthConstants.SessionMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.OxygenSaturation>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$OxygenSaturation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static END_TIME: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static START_TIME: string;
							public static HEART_RATE: string;
							public static DEVICE_UUID: string;
							public static SPO2: string;
							public static UPDATE_TIME: string;
							public static COMMENT: string;
						}
						export class SessionMeasurement extends com.samsung.android.sdk.healthdata.HealthConstants.Common {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.SessionMeasurement>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$SessionMeasurement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static END_TIME: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static UUID: string;
						}
						export class Sleep extends com.samsung.android.sdk.healthdata.HealthConstants.SessionMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Sleep>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Sleep interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static END_TIME: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static COMMENT: string;
						}
						export class SleepStage extends com.samsung.android.sdk.healthdata.HealthConstants.SessionMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.SleepStage>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$SleepStage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static END_TIME: string;
							public static STAGE_DEEP: number;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static STAGE_LIGHT: number;
							public static START_TIME: string;
							public static STAGE_AWAKE: number;
							public static DEVICE_UUID: string;
							public static STAGE: string;
							public static STAGE_REM: number;
							public static SLEEP_ID: string;
							public static UPDATE_TIME: string;
						}
						export class StepCount extends com.samsung.android.sdk.healthdata.HealthConstants.SessionMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.StepCount>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$StepCount interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static SAMPLE_POSITION_TYPE_WRIST: number;
							public static SPEED: string;
							public static END_TIME: string;
							public static SAMPLE_POSITION_TYPE_UNKNOWN: number;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static COUNT: string;
							public static PACKAGE_NAME: string;
							public static SAMPLE_POSITION_TYPE_ARM: number;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static SAMPLE_POSITION_TYPE_ANKLE: number;
							public static DISTANCE: string;
							public static START_TIME: string;
							public static SAMPLE_POSITION_TYPE: string;
							public static DEVICE_UUID: string;
							public static UPDATE_TIME: string;
							public static CALORIE: string;
						}
						export class StepDailyTrend extends com.samsung.android.sdk.healthdata.HealthConstants.Common {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.StepDailyTrend>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$StepDailyTrend interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static SOURCE_TYPE_PHONE_ONLY: number;
							public static SPEED: string;
							public static BINNING_DATA: string;
							public static SOURCE_TYPE: string;
							public static DAY_TIME: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static COUNT: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static DISTANCE: string;
							public static SOURCE_PKG_NAME: string;
							public static DEVICE_UUID: string;
							public static SOURCE_TYPE_ALL: number;
							public static UPDATE_TIME: string;
							public static CALORIE: string;
							public static SOURCE_TYPE_PARTNER_APP: number;
						}
						export class TotalBilirubin extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.TotalBilirubin>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$TotalBilirubin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static TOTAL_BILIRUBIN: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class TotalCholesterol extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.TotalCholesterol>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$TotalCholesterol interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static TOTAL_CHOLESTEROL: string;
						}
						export class TotalProtein extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.TotalProtein>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$TotalProtein interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TOTAL_PROTEIN: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class Triglyceride extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Triglyceride>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Triglyceride interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static TRIGLYCERIDE: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class Uph extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Uph>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Uph interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static UPH: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class Usg extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Usg>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Usg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static USG: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class UvExposure extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.UvExposure>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$UvExposure interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static UV_INDEX: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static LATITUDE: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static LONGITUDE: string;
							public static ALTITUDE: string;
							public static UPDATE_TIME: string;
							public static ACCURACY: string;
							public static COMMENT: string;
						}
						export class WaistCircumference extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.WaistCircumference>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$WaistCircumference interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static WAIST_CIRCUM: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
						}
						export class WaterIntake extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.WaterIntake>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$WaterIntake interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static UNIT_AMOUNT: string;
							public static START_TIME: string;
							public static AMOUNT: string;
							public static DEVICE_UUID: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static UPDATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static COMMENT: string;
						}
						export class Weight extends com.samsung.android.sdk.healthdata.HealthConstants.DiscreteMeasurement {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthConstants.Weight>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthConstants$Weight interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static TOTAL_BODY_WATER: string;
							public static BODY_FAT_MASS: string;
							public static TIME_OFFSET: string;
							public static CUSTOM: string;
							public static CREATE_TIME: string;
							public static PACKAGE_NAME: string;
							public static FAT_FREE_MASS: string;
							public static WEIGHT: string;
							public static SKELETAL_MUSCLE: string;
							public static HEALTH_DATA_TYPE: string;
							public static UUID: string;
							public static MUSCLE_MASS: string;
							public static BASAL_METABOLIC_RATE: string;
							public static START_TIME: string;
							public static DEVICE_UUID: string;
							public static BODY_FAT: string;
							public static FAT_FREE: string;
							public static UPDATE_TIME: string;
							public static SKELETAL_MUSCLE_MASS: string;
							public static HEIGHT: string;
							public static COMMENT: string;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class HealthData {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthData>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthData>;
						public getUuid(): string;
						public getFloat(param0: string): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getLong(param0: string): number;
						public getInputStream(param0: string): java.io.InputStream;
						public putBlob(param0: string, param1: androidNative.Array<number>): void;
						public getInputStreamKeySet(): java.util.Set<string>;
						public putFloat(param0: string, param1: number): void;
						public getDouble(param0: string): number;
						public putNull(param0: string): void;
						public get(param0: string): any;
						public constructor();
						public describeContents(): number;
						public getContentValues(): globalAndroid.content.ContentValues;
						public getBlobKeySet(): java.util.Set<string>;
						public remove(param0: string): void;
						public putInputStream(param0: string, param1: java.io.InputStream): void;
						public putLong(param0: string, param1: number): void;
						public getSourceDevice(): string;
						public getInt(param0: string): number;
						public getKeySet(): java.util.Set<string>;
						public getBlob(param0: string): androidNative.Array<number>;
						public putInt(param0: string, param1: number): void;
						public putString(param0: string, param1: string): void;
						public clear(): void;
						public putDouble(param0: string, param1: number): void;
						public setSourceDevice(param0: string): void;
						public getString(param0: string): string;
					}
					export namespace HealthData {
						export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthData> {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthData.a>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export abstract class HealthDataObserver {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataObserver>;
						public static removeObserver(param0: com.samsung.android.sdk.healthdata.HealthDataStore, param1: com.samsung.android.sdk.healthdata.HealthDataObserver): void;
						public onChange(param0: string): void;
						public static addObserver(param0: com.samsung.android.sdk.healthdata.HealthDataStore, param1: string, param2: com.samsung.android.sdk.healthdata.HealthDataObserver): void;
						public constructor(param0: globalAndroid.os.Handler);
					}
					export namespace HealthDataObserver {
						export class a extends com.samsung.android.sdk.healthdata.IHealthDataObserver.Stub {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataObserver.a>;
							public onChange(param0: string): void;
						}
						export class b {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataObserver.b>;
							public constructor(param0: com.samsung.android.sdk.healthdata.HealthDataObserver, param1: globalAndroid.os.Looper);
							public handleMessage(param0: globalAndroid.os.Message): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class HealthDataResolver {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver>;
						public insert(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.InsertRequest): com.samsung.android.sdk.healthdata.HealthResultHolder<com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult>;
						public readWithPermission(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest, param1: globalAndroid.app.Activity): com.samsung.android.sdk.healthdata.HealthResultHolder<com.samsung.android.sdk.healthdata.HealthDataResolver.ReadResult>;
						public read(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest): com.samsung.android.sdk.healthdata.HealthResultHolder<com.samsung.android.sdk.healthdata.HealthDataResolver.ReadResult>;
						public constructor(param0: com.samsung.android.sdk.healthdata.HealthDataStore, param1: globalAndroid.os.Handler);
						public update(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.UpdateRequest): com.samsung.android.sdk.healthdata.HealthResultHolder<com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult>;
						public aggregate(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest): com.samsung.android.sdk.healthdata.HealthResultHolder<com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateResult>;
						public deleteWithPermission(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.DeleteRequest, param1: globalAndroid.app.Activity): com.samsung.android.sdk.healthdata.HealthResultHolder<com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult>;
						public delete(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.DeleteRequest): com.samsung.android.sdk.healthdata.HealthResultHolder<com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult>;
						public insertWithPermission(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.InsertRequest, param1: globalAndroid.app.Activity): com.samsung.android.sdk.healthdata.HealthResultHolder<com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult>;
					}
					export namespace HealthDataResolver {
						export class AggregateRequest {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthDataResolver$AggregateRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export namespace AggregateRequest {
							export abstract class AggregateFunction {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.AggregateFunction>;
								public static SUM: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.AggregateFunction;
								public static MIN: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.AggregateFunction;
								public static MAX: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.AggregateFunction;
								public static AVG: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.AggregateFunction;
								public static COUNT: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.AggregateFunction;
								public static valueOf(param0: string): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.AggregateFunction;
								public static values(): androidNative.Array<com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.AggregateFunction>;
								public getValue(): number;
								public static from(param0: number): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.AggregateFunction;
								public toSqlLiteral(): string;
							}
							export class Builder {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.Builder>;
								public setSort(param0: string, param1: com.samsung.android.sdk.healthdata.HealthDataResolver.SortOrder): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.Builder;
								public setSourceDevices(param0: java.util.List<string>): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.Builder;
								public setDataType(param0: string): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.Builder;
								public setPackageName(param0: string): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.Builder;
								public setLocalTimeRange(param0: string, param1: string, param2: number, param3: number): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.Builder;
								public constructor();
								public setFilter(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.Builder;
								public setTimeGroup(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.TimeGroupUnit, param1: number, param2: string, param3: string): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.Builder;
								public addGroup(param0: string, param1: string): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.Builder;
								public addFunction(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.AggregateFunction, param1: string, param2: string): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.Builder;
								public build(): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest;
								public setTimeGroup(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.TimeGroupUnit, param1: number, param2: string, param3: string, param4: string): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.Builder;
							}
							export abstract class TimeGroupUnit {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.TimeGroupUnit>;
								public static MINUTELY: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.TimeGroupUnit;
								public static HOURLY: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.TimeGroupUnit;
								public static DAILY: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.TimeGroupUnit;
								public static WEEKLY: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.TimeGroupUnit;
								public static MONTHLY: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.TimeGroupUnit;
								public getValue(): number;
								public static from(param0: number): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.TimeGroupUnit;
								public toSqlLiteral(param0: string, param1: string, param2: number): string;
								public static values(): androidNative.Array<com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.TimeGroupUnit>;
								public static valueOf(param0: string): com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.TimeGroupUnit;
							}
						}
						export class AggregateResult extends com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateResult>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateResult>;
							public getResultCursor(): globalAndroid.database.Cursor;
							public close(): void;
							public constructor(param0: string, param1: number, param2: com.samsung.android.sdk.internal.database.BulkCursorDescriptor);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number);
							public constructor(param0: globalAndroid.os.Parcel);
							public constructor(param0: string, param1: number, param2: number);
							public constructor(param0: number, param1: number, param2: boolean);
							public iterator(): java.util.Iterator<com.samsung.android.sdk.healthdata.HealthData>;
							public constructor(param0: string, param1: com.samsung.android.sdk.internal.database.BulkCursorDescriptor);
							public getDataType(): string;
						}
						export namespace AggregateResult {
							export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateResult> {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateResult.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class DeleteRequest {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.DeleteRequest>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthDataResolver$DeleteRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export namespace DeleteRequest {
							export class Builder {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.DeleteRequest.Builder>;
								public build(): com.samsung.android.sdk.healthdata.HealthDataResolver.DeleteRequest;
								public setFilter(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter): com.samsung.android.sdk.healthdata.HealthDataResolver.DeleteRequest.Builder;
								public setDataType(param0: string): com.samsung.android.sdk.healthdata.HealthDataResolver.DeleteRequest.Builder;
								public setSourceDevices(param0: java.util.List<string>): com.samsung.android.sdk.healthdata.HealthDataResolver.DeleteRequest.Builder;
								public setLocalTimeRange(param0: string, param1: string, param2: number, param3: number): com.samsung.android.sdk.healthdata.HealthDataResolver.DeleteRequest.Builder;
								public constructor();
							}
						}
						export abstract class Filter {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter>;
							public mType: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.ParcelType;
							public mFilters: java.util.List<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter>;
							public constructor();
							public static greaterThanEquals(param0: string, param1: java.lang.Comparable<any>): com.samsung.android.sdk.healthdata.HealthDataResolver.Filter;
							public static lessThan(param0: string, param1: java.lang.Comparable<any>): com.samsung.android.sdk.healthdata.HealthDataResolver.Filter;
							public static checkFilter(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter): void;
							public static not(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter): com.samsung.android.sdk.healthdata.HealthDataResolver.Filter;
							public static or(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter, param1: androidNative.Array<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter>): com.samsung.android.sdk.healthdata.HealthDataResolver.Filter;
							public static lessThanEquals(param0: string, param1: java.lang.Comparable<any>): com.samsung.android.sdk.healthdata.HealthDataResolver.Filter;
							public static eq(param0: string, param1: any): com.samsung.android.sdk.healthdata.HealthDataResolver.Filter;
							public readFromParcel(param0: globalAndroid.os.Parcel): void;
							public static and(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter, param1: androidNative.Array<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter>): com.samsung.android.sdk.healthdata.HealthDataResolver.Filter;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public static greaterThan(param0: string, param1: java.lang.Comparable<any>): com.samsung.android.sdk.healthdata.HealthDataResolver.Filter;
							public getFilters(): java.util.List<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter>;
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.Parcel);
							public static in(param0: string, param1: androidNative.Array<any>): com.samsung.android.sdk.healthdata.HealthDataResolver.Filter;
						}
						export namespace Filter {
							export abstract class ParcelType extends globalAndroid.os.Parcelable {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.ParcelType>;
								public static COMPARABLE: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.ParcelType;
								public static STRING: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.ParcelType;
								public static STRING_ARRAY: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.ParcelType;
								public static NUMBER_ARRAY: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.ParcelType;
								public static AND: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.ParcelType;
								public static OR: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.ParcelType;
								public static NOT: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.ParcelType;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.ParcelType>;
								public describeContents(): number;
								public static values(): androidNative.Array<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.ParcelType>;
								public static valueOf(param0: string): com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.ParcelType;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
							export namespace ParcelType {
								export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.ParcelType> {
									public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.ParcelType.a>;
									public newArray(param0: number): androidNative.Array<any>;
									public createFromParcel(param0: globalAndroid.os.Parcel): any;
								}
							}
							export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter> {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class InsertRequest {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.InsertRequest>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthDataResolver$InsertRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								addHealthData(param0: com.samsung.android.sdk.healthdata.HealthData): void;
								addHealthData(param0: java.util.List<com.samsung.android.sdk.healthdata.HealthData>): void;
							});
							public constructor();
							public addHealthData(param0: com.samsung.android.sdk.healthdata.HealthData): void;
							public addHealthData(param0: java.util.List<com.samsung.android.sdk.healthdata.HealthData>): void;
						}
						export namespace InsertRequest {
							export class Builder {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.InsertRequest.Builder>;
								public setDataType(param0: string): com.samsung.android.sdk.healthdata.HealthDataResolver.InsertRequest.Builder;
								public constructor();
								public build(): com.samsung.android.sdk.healthdata.HealthDataResolver.InsertRequest;
							}
						}
						export class ReadRequest {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthDataResolver$ReadRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export namespace ReadRequest {
							export class Builder {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest.Builder>;
								public setFilter(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter): com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest.Builder;
								public setResultCount(param0: number, param1: number): com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest.Builder;
								public setSort(param0: string, param1: com.samsung.android.sdk.healthdata.HealthDataResolver.SortOrder): com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest.Builder;
								public setLocalTimeRange(param0: string, param1: string, param2: number, param3: number): com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest.Builder;
								public constructor();
								public setDataType(param0: string): com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest.Builder;
								public setSourceDevices(param0: java.util.List<string>): com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest.Builder;
								public setProperties(param0: androidNative.Array<string>): com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest.Builder;
								public setTimeBefore(param0: number): com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest.Builder;
								public build(): com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest;
								public setPackageName(param0: string): com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest.Builder;
								public setTimeAfter(param0: number): com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest.Builder;
								public setPropertyAlias(param0: string, param1: string): com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest.Builder;
							}
						}
						export class ReadResult extends com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.ReadResult>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthDataResolver.ReadResult>;
							public close(): void;
							public constructor(param0: string, param1: number, param2: com.samsung.android.sdk.internal.database.BulkCursorDescriptor);
							public constructor(param0: number, param1: number);
							public constructor(param0: number, param1: number, param2: boolean);
							public setResultId(param0: string): void;
							public iterator(): java.util.Iterator<com.samsung.android.sdk.healthdata.HealthData>;
							public getResultCursor(): globalAndroid.database.Cursor;
							public setResolver(param0: com.samsung.android.sdk.healthdata.IDataResolver): com.samsung.android.sdk.healthdata.HealthDataResolver.ReadResult;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.os.Parcel);
							public constructor(param0: string, param1: number, param2: number);
							public constructor(param0: string, param1: com.samsung.android.sdk.internal.database.BulkCursorDescriptor);
							public getDataType(): string;
						}
						export namespace ReadResult {
							export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthDataResolver.ReadResult> {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.ReadResult.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export abstract class SortOrder {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.SortOrder>;
							public static ASC: com.samsung.android.sdk.healthdata.HealthDataResolver.SortOrder;
							public static DESC: com.samsung.android.sdk.healthdata.HealthDataResolver.SortOrder;
							public static values(): androidNative.Array<com.samsung.android.sdk.healthdata.HealthDataResolver.SortOrder>;
							public static valueOf(param0: string): com.samsung.android.sdk.healthdata.HealthDataResolver.SortOrder;
							public toSqlLiteral(): string;
						}
						export class UpdateRequest {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.UpdateRequest>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthDataResolver$UpdateRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export namespace UpdateRequest {
							export class Builder {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.UpdateRequest.Builder>;
								public setFilter(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter): com.samsung.android.sdk.healthdata.HealthDataResolver.UpdateRequest.Builder;
								public setLocalTimeRange(param0: string, param1: string, param2: number, param3: number): com.samsung.android.sdk.healthdata.HealthDataResolver.UpdateRequest.Builder;
								public constructor();
								public setDataType(param0: string): com.samsung.android.sdk.healthdata.HealthDataResolver.UpdateRequest.Builder;
								public setHealthData(param0: com.samsung.android.sdk.healthdata.HealthData): com.samsung.android.sdk.healthdata.HealthDataResolver.UpdateRequest.Builder;
								public build(): com.samsung.android.sdk.healthdata.HealthDataResolver.UpdateRequest;
								public setSourceDevices(param0: java.util.List<string>): com.samsung.android.sdk.healthdata.HealthDataResolver.UpdateRequest.Builder;
							}
						}
						export class a extends com.samsung.android.sdk.internal.interfaces.ParcelFdSupplier {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.a>;
							public get(param0: string, param1: string): globalAndroid.os.ParcelFileDescriptor;
						}
						export class b extends com.samsung.android.sdk.internal.interfaces.ParcelFdSupplier {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.b>;
							public get(param0: string, param1: string): globalAndroid.os.ParcelFileDescriptor;
						}
						export class c extends com.samsung.android.sdk.internal.interfaces.ParcelFdSupplier {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.c>;
							public get(param0: string, param1: string): globalAndroid.os.ParcelFileDescriptor;
						}
						export class d extends java.util.Iterator<com.samsung.android.sdk.healthdata.HealthData> {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataResolver.d>;
							public hasNext(): boolean;
							public remove(): void;
							public next(): any;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class HealthDataStore {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataStore>;
						public connectService(param0: number): void;
						public static getInterface(param0: com.samsung.android.sdk.healthdata.HealthDataStore): com.samsung.android.sdk.healthdata.IHealth;
						public connectService(): void;
						public disconnectService(): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.samsung.android.sdk.healthdata.HealthDataStore.ConnectionListener);
						public static getClientPackageName(): string;
					}
					export namespace HealthDataStore {
						export class ConnectionListener {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataStore.ConnectionListener>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthDataStore$ConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConnected(): void;
								onConnectionFailed(param0: com.samsung.android.sdk.healthdata.HealthConnectionErrorResult): void;
								onDisconnected(): void;
							});
							public constructor();
							public onConnected(): void;
							public onConnectionFailed(param0: com.samsung.android.sdk.healthdata.HealthConnectionErrorResult): void;
							public onDisconnected(): void;
						}
						export class a {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataStore.a>;
							public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
							public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
						}
						export namespace a {
							export class a {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataStore.a.a>;
								public run(): void;
							}
						}
						export class b extends globalAndroid.os.AsyncTask<java.lang.Void, java.lang.Void, java.lang.Boolean> {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataStore.b>;
							public doInBackground(param0: androidNative.Array<any>): any;
							public onPostExecute(param0: any): void;
						}
						export class c {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataStore.c>;
							public handleMessage(param0: globalAndroid.os.Message): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export abstract class HealthDataUnit {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit>;
						public static CELSIUS: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static CENTIMETER: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static GRAM: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static KELVIN: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static KILOGRAM: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static KILOMETER: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static METER: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static MILLIMETER: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static FAHRENHEIT: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static FOOT: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static INCH: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static MILE: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static POUND: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static RANKINE: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static YARD: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static GRAMS_PER_DECILITER: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static MILLIGRAMS_PER_DECILITER: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static MILLIMOLES_PER_LITER: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static MICROMOLES_PER_LITER: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static MILLIMOLES_PER_MOLE: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static HBA1C_PERCENT: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static MILLIMETER_OF_MERCURY: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static KILOPASCAL: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static LITER: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static MILLILITER: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public static FLUID_OUNCE: com.samsung.android.sdk.healthdata.HealthDataUnit;
						public mUnit: string;
						public mUnitType: number;
						public constructor();
						public matchUnitName(param0: string): boolean;
						public static registerDataUnit(param0: com.samsung.android.sdk.healthdata.HealthDataUnit): void;
						public isCompatible(param0: com.samsung.android.sdk.healthdata.HealthDataUnit): boolean;
						public static valueOf(param0: string): com.samsung.android.sdk.healthdata.HealthDataUnit;
						public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
						public static isCompatible(param0: string, param1: string): boolean;
						public convertTo(param0: number, param1: string): number;
						public getUnitName(): string;
						public static convert(param0: number, param1: string, param2: string): number;
					}
					export namespace HealthDataUnit {
						export class a {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.a>;
						}
						export class a0 extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.a0>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class b extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.b>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class c extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.c>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class d extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.d>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class e extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.e>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class f extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.f>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class g extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.g>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class h extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.h>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class i extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.i>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class j extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.j>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class k extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.k>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class l extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.l>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class m extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.m>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class n extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.n>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class o extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.o>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class p extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.p>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class q extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.q>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class r extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.r>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class s extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.s>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class t extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.t>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class u extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.u>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class v extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.v>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class w extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.w>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class x extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.x>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class y extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.y>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
						export class z extends com.samsung.android.sdk.healthdata.HealthDataUnit {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUnit.z>;
							public convertTo(param0: number, param1: com.samsung.android.sdk.healthdata.HealthDataUnit): number;
							public convertTo(param0: number, param1: string): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class HealthDataUtil {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUtil>;
						public static getJsonBlob(param0: any): androidNative.Array<number>;
						public static getStructuredData(param0: androidNative.Array<number>, param1: java.lang.Class<any>): any;
						public static getJsonBlob(param0: java.util.List<any>): androidNative.Array<number>;
						public static getStructuredDataList(param0: androidNative.Array<number>, param1: java.lang.Class<any>): java.util.List<any>;
					}
					export namespace HealthDataUtil {
						export class a {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDataUtil.a>;
							public hashCode(): number;
							public getOwnerType(): java.lang.reflect.Type;
							public getRawType(): java.lang.reflect.Type;
							public toString(): string;
							public equals(param0: any): boolean;
							public getActualTypeArguments(): androidNative.Array<java.lang.reflect.Type>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class HealthDevice {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDevice>;
						public static GROUP_UNKNOWN: number;
						public static GROUP_MOBILE: number;
						public static GROUP_EXTERNAL: number;
						public static GROUP_COMPANION: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthDevice>;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: number);
						public describeContents(): number;
						public getManufacturer(): string;
						public getUuid(): string;
						public getGroup(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getCustomName(): string;
						public getSeed(): string;
						public getModel(): string;
					}
					export namespace HealthDevice {
						export class Builder {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDevice.Builder>;
							public constructor();
							public build(): com.samsung.android.sdk.healthdata.HealthDevice;
							public setManufacturer(param0: string): com.samsung.android.sdk.healthdata.HealthDevice.Builder;
							public setDeviceSeed(param0: string): com.samsung.android.sdk.healthdata.HealthDevice.Builder;
							public setCustomName(param0: string): com.samsung.android.sdk.healthdata.HealthDevice.Builder;
							public setModel(param0: string): com.samsung.android.sdk.healthdata.HealthDevice.Builder;
							public setGroup(param0: number): com.samsung.android.sdk.healthdata.HealthDevice.Builder;
						}
						export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthDevice> {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDevice.a>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class HealthDeviceManager {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthDeviceManager>;
						public getDeviceUuidsByGroup(param0: number): java.util.List<string>;
						public getDeviceUuidsByManufacturer(param0: string): java.util.List<string>;
						public changeCustomName(param0: string, param1: string): boolean;
						public getLocalDevice(): com.samsung.android.sdk.healthdata.HealthDevice;
						public getAllDevices(): java.util.List<com.samsung.android.sdk.healthdata.HealthDevice>;
						public registerDevice(param0: com.samsung.android.sdk.healthdata.HealthDevice): string;
						public getDeviceUuidsByCustomName(param0: string): java.util.List<string>;
						public constructor(param0: com.samsung.android.sdk.healthdata.HealthDataStore);
						public getDeviceBySeed(param0: string): com.samsung.android.sdk.healthdata.HealthDevice;
						public getDeviceByUuid(param0: string): com.samsung.android.sdk.healthdata.HealthDevice;
						public getDeviceUuidsByModel(param0: string): java.util.List<string>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class HealthPermissionManager {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthPermissionManager>;
						public requestPermissions(param0: java.util.Set<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionKey>, param1: globalAndroid.app.Activity): com.samsung.android.sdk.healthdata.HealthResultHolder<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionResult>;
						public isPermissionAcquired(param0: java.util.Set<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionKey>): java.util.Map<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionKey, java.lang.Boolean>;
						public constructor(param0: com.samsung.android.sdk.healthdata.HealthDataStore);
						public requestPermissions(param0: java.util.Set<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionKey>): com.samsung.android.sdk.healthdata.HealthResultHolder<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionResult>;
					}
					export namespace HealthPermissionManager {
						export class PermissionKey {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionKey>;
							public hashCode(): number;
							public getPermissionType(): com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionType;
							public constructor(param0: string, param1: com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionType);
							public equals(param0: any): boolean;
							public getDataType(): string;
						}
						export class PermissionResult extends com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionResult>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionResult>;
							public constructor(param0: globalAndroid.os.Bundle, param1: number);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number);
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.Parcel);
							public constructor(param0: number, param1: number, param2: boolean);
							public getResultMap(): java.util.Map<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionKey, java.lang.Boolean>;
						}
						export namespace PermissionResult {
							export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionResult> {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionResult.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class PermissionType {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionType>;
							public static READ: com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionType;
							public static WRITE: com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionType;
							public static getType(param0: number): com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionType;
							public static values(): androidNative.Array<com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionType>;
							public getValue(): number;
							public static valueOf(param0: string): com.samsung.android.sdk.healthdata.HealthPermissionManager.PermissionType;
						}
						export class a {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthPermissionManager.a>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class HealthResultHolder<T> extends java.lang.Object {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthResultHolder<any>>;
						/**
						 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthResultHolder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							await(): T;
							cancel(): void;
							setResultListener(param0: com.samsung.android.sdk.healthdata.HealthResultHolder.ResultListener<T>): void;
						});
						public constructor();
						public setResultListener(param0: com.samsung.android.sdk.healthdata.HealthResultHolder.ResultListener<T>): void;
						public await(): T;
						public cancel(): void;
					}
					export namespace HealthResultHolder {
						export class BaseResult {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult>;
							public static STATUS_SUCCESSFUL: number;
							public static STATUS_CANCELED: number;
							public static STATUS_FAILED: number;
							public static STATUS_INVALID_INPUT_DATA: number;
							public static STATUS_OUT_OF_SPACE: number;
							public static STATUS_UNKNOWN: number;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getStatus(): number;
							public constructor(param0: number, param1: number);
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.Parcel);
							public constructor(param0: number, param1: number, param2: boolean);
							public getCount(): number;
						}
						export namespace BaseResult {
							export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult> {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class ResultListener<T> extends java.lang.Object {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthResultHolder.ResultListener<any>>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.healthdata.HealthResultHolder$ResultListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResult(param0: T): void;
							});
							public constructor();
							public onResult(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class HealthUserProfile {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.HealthUserProfile>;
						public static GENDER_UNKNOWN: number;
						public static GENDER_MALE: number;
						public static GENDER_FEMALE: number;
						public static USER_PROFILE_KEY_BIRTH_DATE: string;
						public static USER_PROFILE_KEY_HEIGHT: string;
						public static USER_PROFILE_KEY_WEIGHT: string;
						public static USER_PROFILE_KEY_USER_ID: string;
						public static USER_PROFILE_KEY_GENDER: string;
						public static USER_PROFILE_KEY_USER_NAME: string;
						public static USER_PROFILE_KEY_IMAGE: string;
						public getUserId(): string;
						public getGender(): number;
						public getWeight(): number;
						public getImage(): globalAndroid.graphics.Bitmap;
						public static getProfile(param0: com.samsung.android.sdk.healthdata.HealthDataStore): com.samsung.android.sdk.healthdata.HealthUserProfile;
						public getBirthDate(): string;
						public getUserName(): string;
						public getHeight(): number;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class IDataResolver {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IDataResolver>;
						/**
						 * Constructs a new instance of the com.samsung.android.sdk.healthdata.IDataResolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							readData(param0: com.samsung.android.sdk.internal.healthdata.ReadRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
							insertData(param0: com.samsung.android.sdk.internal.healthdata.InsertRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
							deleteData(param0: com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
							aggregateData(param0: com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
							updateData(param0: com.samsung.android.sdk.internal.healthdata.UpdateRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
							readData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.ReadRequestImpl): void;
							insertData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.InsertRequestImpl): void;
							deleteData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl): void;
							aggregateData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl): void;
							updateData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.UpdateRequestImpl): void;
							readDataWithPermission(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.ReadRequestImpl): globalAndroid.content.Intent;
							insertDataWithPermission(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.InsertRequestImpl): globalAndroid.content.Intent;
							deleteDataWithPermission(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl): globalAndroid.content.Intent;
							requestBlobTransferChannel(param0: string, param1: string, param2: string, param3: string, param4: string): globalAndroid.os.ParcelFileDescriptor;
							requestFileDescriptor(param0: string, param1: string, param2: string): globalAndroid.os.ParcelFileDescriptor;
						});
						public constructor();
						public deleteDataWithPermission(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl): globalAndroid.content.Intent;
						public updateData(param0: com.samsung.android.sdk.internal.healthdata.UpdateRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
						public readData(param0: com.samsung.android.sdk.internal.healthdata.ReadRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
						public aggregateData(param0: com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
						public readData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.ReadRequestImpl): void;
						public insertData(param0: com.samsung.android.sdk.internal.healthdata.InsertRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
						public deleteData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl): void;
						public insertData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.InsertRequestImpl): void;
						public updateData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.UpdateRequestImpl): void;
						public insertDataWithPermission(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.InsertRequestImpl): globalAndroid.content.Intent;
						public requestBlobTransferChannel(param0: string, param1: string, param2: string, param3: string, param4: string): globalAndroid.os.ParcelFileDescriptor;
						public requestFileDescriptor(param0: string, param1: string, param2: string): globalAndroid.os.ParcelFileDescriptor;
						public readDataWithPermission(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.ReadRequestImpl): globalAndroid.content.Intent;
						public deleteData(param0: com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
						public aggregateData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl): void;
					}
					export namespace IDataResolver {
						export abstract class Stub implements com.samsung.android.sdk.healthdata.IDataResolver {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IDataResolver.Stub>;
							public constructor();
							public updateData(param0: com.samsung.android.sdk.internal.healthdata.UpdateRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
							public readData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.ReadRequestImpl): void;
							public insertData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.InsertRequestImpl): void;
							public readDataWithPermission(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.ReadRequestImpl): globalAndroid.content.Intent;
							public aggregateData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl): void;
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public updateData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.UpdateRequestImpl): void;
							public deleteDataWithPermission(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl): globalAndroid.content.Intent;
							public static asInterface(param0: globalAndroid.os.IBinder): com.samsung.android.sdk.healthdata.IDataResolver;
							public deleteData(param0: com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
							public requestBlobTransferChannel(param0: string, param1: string, param2: string, param3: string, param4: string): globalAndroid.os.ParcelFileDescriptor;
							public asBinder(): globalAndroid.os.IBinder;
							public requestFileDescriptor(param0: string, param1: string, param2: string): globalAndroid.os.ParcelFileDescriptor;
							public deleteData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl): void;
							public insertDataWithPermission(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.InsertRequestImpl): globalAndroid.content.Intent;
							public insertData(param0: com.samsung.android.sdk.internal.healthdata.InsertRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
							public readData(param0: com.samsung.android.sdk.internal.healthdata.ReadRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
							public aggregateData(param0: com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
						}
						export namespace Stub {
							export class a extends com.samsung.android.sdk.healthdata.IDataResolver {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IDataResolver.Stub.a>;
								public readDataWithPermission(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.ReadRequestImpl): globalAndroid.content.Intent;
								public deleteData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl): void;
								public readData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.ReadRequestImpl): void;
								public insertDataWithPermission(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.InsertRequestImpl): globalAndroid.content.Intent;
								public deleteData(param0: com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
								public aggregateData(param0: com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
								public updateData(param0: com.samsung.android.sdk.internal.healthdata.UpdateRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
								public aggregateData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl): void;
								public readData(param0: com.samsung.android.sdk.internal.healthdata.ReadRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
								public requestBlobTransferChannel(param0: string, param1: string, param2: string, param3: string, param4: string): globalAndroid.os.ParcelFileDescriptor;
								public asBinder(): globalAndroid.os.IBinder;
								public deleteDataWithPermission(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl): globalAndroid.content.Intent;
								public insertData(param0: com.samsung.android.sdk.internal.healthdata.InsertRequestImpl): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
								public insertData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.InsertRequestImpl): void;
								public updateData2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: com.samsung.android.sdk.internal.healthdata.UpdateRequestImpl): void;
								public requestFileDescriptor(param0: string, param1: string, param2: string): globalAndroid.os.ParcelFileDescriptor;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class IDataWatcher {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IDataWatcher>;
						/**
						 * Constructs a new instance of the com.samsung.android.sdk.healthdata.IDataWatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							registerDataObserver(param0: string, param1: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
							unregisterDataObserver(param0: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
							registerDataObserver2(param0: string, param1: string, param2: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
							unregisterDataObserver2(param0: string, param1: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
						});
						public constructor();
						public unregisterDataObserver(param0: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
						public unregisterDataObserver2(param0: string, param1: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
						public registerDataObserver(param0: string, param1: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
						public registerDataObserver2(param0: string, param1: string, param2: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
					}
					export namespace IDataWatcher {
						export abstract class Stub implements com.samsung.android.sdk.healthdata.IDataWatcher {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IDataWatcher.Stub>;
							public constructor();
							public registerDataObserver(param0: string, param1: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
							public asBinder(): globalAndroid.os.IBinder;
							public registerDataObserver2(param0: string, param1: string, param2: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
							public unregisterDataObserver(param0: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public unregisterDataObserver2(param0: string, param1: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
							public static asInterface(param0: globalAndroid.os.IBinder): com.samsung.android.sdk.healthdata.IDataWatcher;
						}
						export namespace Stub {
							export class a extends com.samsung.android.sdk.healthdata.IDataWatcher {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IDataWatcher.Stub.a>;
								public unregisterDataObserver(param0: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
								public unregisterDataObserver2(param0: string, param1: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
								public asBinder(): globalAndroid.os.IBinder;
								public registerDataObserver(param0: string, param1: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
								public registerDataObserver2(param0: string, param1: string, param2: com.samsung.android.sdk.healthdata.IHealthDataObserver): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class IDeviceManager {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IDeviceManager>;
						/**
						 * Constructs a new instance of the com.samsung.android.sdk.healthdata.IDeviceManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getLocalDevice(): com.samsung.android.sdk.healthdata.HealthDevice;
							getAllRegisteredDevices(): java.util.List<com.samsung.android.sdk.healthdata.HealthDevice>;
							getRegisteredDevice(param0: string): com.samsung.android.sdk.healthdata.HealthDevice;
							getRegisteredDeviceByUuid(param0: string): com.samsung.android.sdk.healthdata.HealthDevice;
							registerDevice(param0: com.samsung.android.sdk.healthdata.HealthDevice): string;
							changeDeviceName(param0: string, param1: string): boolean;
							getDeviceByUuid(param0: string): com.samsung.android.sdk.healthdata.HealthDevice;
							getDeviceUuidsBy(param0: string, param1: number): java.util.List<string>;
						});
						public constructor();
						public getLocalDevice(): com.samsung.android.sdk.healthdata.HealthDevice;
						public getDeviceUuidsBy(param0: string, param1: number): java.util.List<string>;
						public getRegisteredDeviceByUuid(param0: string): com.samsung.android.sdk.healthdata.HealthDevice;
						public changeDeviceName(param0: string, param1: string): boolean;
						public registerDevice(param0: com.samsung.android.sdk.healthdata.HealthDevice): string;
						public getAllRegisteredDevices(): java.util.List<com.samsung.android.sdk.healthdata.HealthDevice>;
						public getDeviceByUuid(param0: string): com.samsung.android.sdk.healthdata.HealthDevice;
						public getRegisteredDevice(param0: string): com.samsung.android.sdk.healthdata.HealthDevice;
					}
					export namespace IDeviceManager {
						export abstract class Stub implements com.samsung.android.sdk.healthdata.IDeviceManager {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IDeviceManager.Stub>;
							public constructor();
							public getRegisteredDevice(param0: string): com.samsung.android.sdk.healthdata.HealthDevice;
							public asBinder(): globalAndroid.os.IBinder;
							public static asInterface(param0: globalAndroid.os.IBinder): com.samsung.android.sdk.healthdata.IDeviceManager;
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getDeviceUuidsBy(param0: string, param1: number): java.util.List<string>;
							public getRegisteredDeviceByUuid(param0: string): com.samsung.android.sdk.healthdata.HealthDevice;
							public getLocalDevice(): com.samsung.android.sdk.healthdata.HealthDevice;
							public getAllRegisteredDevices(): java.util.List<com.samsung.android.sdk.healthdata.HealthDevice>;
							public changeDeviceName(param0: string, param1: string): boolean;
							public registerDevice(param0: com.samsung.android.sdk.healthdata.HealthDevice): string;
							public getDeviceByUuid(param0: string): com.samsung.android.sdk.healthdata.HealthDevice;
						}
						export namespace Stub {
							export class a extends com.samsung.android.sdk.healthdata.IDeviceManager {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IDeviceManager.Stub.a>;
								public registerDevice(param0: com.samsung.android.sdk.healthdata.HealthDevice): string;
								public changeDeviceName(param0: string, param1: string): boolean;
								public getAllRegisteredDevices(): java.util.List<com.samsung.android.sdk.healthdata.HealthDevice>;
								public getDeviceByUuid(param0: string): com.samsung.android.sdk.healthdata.HealthDevice;
								public getRegisteredDeviceByUuid(param0: string): com.samsung.android.sdk.healthdata.HealthDevice;
								public getLocalDevice(): com.samsung.android.sdk.healthdata.HealthDevice;
								public getRegisteredDevice(param0: string): com.samsung.android.sdk.healthdata.HealthDevice;
								public asBinder(): globalAndroid.os.IBinder;
								public getDeviceUuidsBy(param0: string, param1: number): java.util.List<string>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class IHealth {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IHealth>;
						/**
						 * Constructs a new instance of the com.samsung.android.sdk.healthdata.IHealth interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getUserProfile(): globalAndroid.os.Bundle;
							getConnectionResult(param0: string, param1: number): globalAndroid.os.Bundle;
							waitForInit(param0: number): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
							getIDeviceManager(): com.samsung.android.sdk.healthdata.IDeviceManager;
							getIDataResolver(): com.samsung.android.sdk.healthdata.IDataResolver;
							getIDataWatcher(): com.samsung.android.sdk.healthdata.IDataWatcher;
							requestHealthDataPermissions(param0: globalAndroid.os.Bundle): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
							isHealthDataPermissionAcquired(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
							isKeyAccessible(): boolean;
							getConnectionResult2(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
							getUserProfile2(param0: string): globalAndroid.os.Bundle;
							waitForInit2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: number): void;
							requestHealthDataPermissions2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: globalAndroid.os.Bundle): globalAndroid.content.Intent;
							isHealthDataPermissionAcquired2(param0: string, param1: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
						});
						public constructor();
						public getConnectionResult(param0: string, param1: number): globalAndroid.os.Bundle;
						public isHealthDataPermissionAcquired2(param0: string, param1: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
						public isHealthDataPermissionAcquired(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
						public getUserProfile2(param0: string): globalAndroid.os.Bundle;
						public getIDeviceManager(): com.samsung.android.sdk.healthdata.IDeviceManager;
						public getIDataResolver(): com.samsung.android.sdk.healthdata.IDataResolver;
						public requestHealthDataPermissions2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: globalAndroid.os.Bundle): globalAndroid.content.Intent;
						public getUserProfile(): globalAndroid.os.Bundle;
						public getIDataWatcher(): com.samsung.android.sdk.healthdata.IDataWatcher;
						public getConnectionResult2(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
						public requestHealthDataPermissions(param0: globalAndroid.os.Bundle): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
						public isKeyAccessible(): boolean;
						public waitForInit2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: number): void;
						public waitForInit(param0: number): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
					}
					export namespace IHealth {
						export abstract class Stub implements com.samsung.android.sdk.healthdata.IHealth {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IHealth.Stub>;
							public constructor();
							public getIDataResolver(): com.samsung.android.sdk.healthdata.IDataResolver;
							public requestHealthDataPermissions(param0: globalAndroid.os.Bundle): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
							public getUserProfile(): globalAndroid.os.Bundle;
							public getIDeviceManager(): com.samsung.android.sdk.healthdata.IDeviceManager;
							public isKeyAccessible(): boolean;
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public waitForInit(param0: number): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
							public isHealthDataPermissionAcquired2(param0: string, param1: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
							public getConnectionResult(param0: string, param1: number): globalAndroid.os.Bundle;
							public getIDataWatcher(): com.samsung.android.sdk.healthdata.IDataWatcher;
							public isHealthDataPermissionAcquired(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
							public requestHealthDataPermissions2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: globalAndroid.os.Bundle): globalAndroid.content.Intent;
							public waitForInit2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: number): void;
							public asBinder(): globalAndroid.os.IBinder;
							public getConnectionResult2(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
							public static asInterface(param0: globalAndroid.os.IBinder): com.samsung.android.sdk.healthdata.IHealth;
							public getUserProfile2(param0: string): globalAndroid.os.Bundle;
						}
						export namespace Stub {
							export class a extends com.samsung.android.sdk.healthdata.IHealth {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IHealth.Stub.a>;
								public requestHealthDataPermissions(param0: globalAndroid.os.Bundle): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
								public requestHealthDataPermissions2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: globalAndroid.os.Bundle): globalAndroid.content.Intent;
								public isHealthDataPermissionAcquired(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
								public waitForInit2(param0: string, param1: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver, param2: number): void;
								public isHealthDataPermissionAcquired2(param0: string, param1: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
								public getIDataResolver(): com.samsung.android.sdk.healthdata.IDataResolver;
								public isKeyAccessible(): boolean;
								public getConnectionResult2(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
								public waitForInit(param0: number): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
								public getIDeviceManager(): com.samsung.android.sdk.healthdata.IDeviceManager;
								public getUserProfile2(param0: string): globalAndroid.os.Bundle;
								public getUserProfile(): globalAndroid.os.Bundle;
								public getIDataWatcher(): com.samsung.android.sdk.healthdata.IDataWatcher;
								public getConnectionResult(param0: string, param1: number): globalAndroid.os.Bundle;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class IHealthDataObserver {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IHealthDataObserver>;
						/**
						 * Constructs a new instance of the com.samsung.android.sdk.healthdata.IHealthDataObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onChange(param0: string): void;
						});
						public constructor();
						public onChange(param0: string): void;
					}
					export namespace IHealthDataObserver {
						export abstract class Stub implements com.samsung.android.sdk.healthdata.IHealthDataObserver {
							public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IHealthDataObserver.Stub>;
							public constructor();
							public onChange(param0: string): void;
							public static asInterface(param0: globalAndroid.os.IBinder): com.samsung.android.sdk.healthdata.IHealthDataObserver;
							public asBinder(): globalAndroid.os.IBinder;
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
						export namespace Stub {
							export class a extends com.samsung.android.sdk.healthdata.IHealthDataObserver {
								public static class: java.lang.Class<com.samsung.android.sdk.healthdata.IHealthDataObserver.Stub.a>;
								public onChange(param0: string): void;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace healthdata {
					export class a extends com.samsung.android.sdk.healthdata.HealthResultHolder.ResultListener<com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult> {
						public static class: java.lang.Class<com.samsung.android.sdk.healthdata.a>;
						public onResult(param0: any): void;
						public onResult(param0: com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace database {
						export class BulkCursorDescriptor {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.database.BulkCursorDescriptor>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.database.BulkCursorDescriptor>;
							public cursor: com.samsung.android.sdk.internal.database.IBulkCursor;
							public columnNames: androidNative.Array<string>;
							public wantsAllOnMoveCalls: boolean;
							public count: number;
							public window: globalAndroid.database.CursorWindow;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public readFromParcel(param0: globalAndroid.os.Parcel): void;
						}
						export namespace BulkCursorDescriptor {
							export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.database.BulkCursorDescriptor> {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.database.BulkCursorDescriptor.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace database {
						export abstract class BulkCursorNative implements com.samsung.android.sdk.internal.database.IBulkCursor {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.database.BulkCursorNative>;
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public close(): void;
							public requery(): number;
							public respond(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
							public getWindow(param0: number): globalAndroid.database.CursorWindow;
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public static asInterface(param0: globalAndroid.os.IBinder): com.samsung.android.sdk.internal.database.IBulkCursor;
							public getExtras(): globalAndroid.os.Bundle;
							public onMove(param0: number): void;
							public deactivate(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace database {
						export class BulkCursorToCursorAdaptor {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.database.BulkCursorToCursorAdaptor>;
							public constructor();
							public close(): void;
							public getColumnIndex(param0: string): number;
							public closeWindow(): void;
							public getExtras(): globalAndroid.os.Bundle;
							public getCount(): number;
							public getColumnNames(): androidNative.Array<string>;
							public requery(): boolean;
							public initialize(param0: com.samsung.android.sdk.internal.database.BulkCursorDescriptor): void;
							public respond(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
							public setFileTransferChannel(param0: com.samsung.android.sdk.healthdata.IDataResolver, param1: string): void;
							public onMove(param0: number, param1: number): boolean;
							public getBlob(param0: number): androidNative.Array<number>;
							public deactivate(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace database {
						export class IBulkCursor {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.database.IBulkCursor>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.internal.database.IBulkCursor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getWindow(param0: number): globalAndroid.database.CursorWindow;
								onMove(param0: number): void;
								deactivate(): void;
								close(): void;
								requery(): number;
								getExtras(): globalAndroid.os.Bundle;
								respond(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
							});
							public constructor();
							public static ON_MOVE_TRANSACTION: number;
							public static DEACTIVATE_TRANSACTION: number;
							public static REQUERY_TRANSACTION: number;
							public static GET_CURSOR_WINDOW_TRANSACTION: number;
							public static RESPOND_TRANSACTION: number;
							public static descriptor: string;
							public static CLOSE_TRANSACTION: number;
							public static GET_EXTRAS_TRANSACTION: number;
							public close(): void;
							public requery(): number;
							public respond(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
							public getWindow(param0: number): globalAndroid.database.CursorWindow;
							public getExtras(): globalAndroid.os.Bundle;
							public onMove(param0: number): void;
							public deactivate(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace database {
						export class a extends com.samsung.android.sdk.internal.database.IBulkCursor {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.database.a>;
							public asBinder(): globalAndroid.os.IBinder;
							public close(): void;
							public requery(): number;
							public respond(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
							public getWindow(param0: number): globalAndroid.database.CursorWindow;
							public getExtras(): globalAndroid.os.Bundle;
							public onMove(param0: number): void;
							public constructor(param0: globalAndroid.os.IBinder);
							public deactivate(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class AggregateRequestImpl extends com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl>;
							public getLocalTimeOffsetProperty(): string;
							public getAggregatePair(): java.util.List<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.AggregatePair>;
							public getGroups(): java.util.List<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.Group>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getSortOrder(): string;
							public getTimeGroup(): com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.TimeGroup;
							public getDeviceUuids(): java.util.List<string>;
							public describeContents(): number;
							public getPackageName(): string;
							public getStartTime(): number;
							public getLocalTimeEnd(): number;
							public getFilter(): com.samsung.android.sdk.healthdata.HealthDataResolver.Filter;
							public getLocalTimeBegin(): number;
							public constructor(param0: string, param1: string, param2: java.util.List<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.AggregatePair>, param3: java.util.List<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.Group>, param4: com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.TimeGroup, param5: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter, param6: java.util.List<string>, param7: string, param8: number, param9: number, param10: string, param11: string, param12: java.lang.Long, param13: java.lang.Long);
							public getEndTime(): number;
							public isEmpty(): boolean;
							public getDataType(): string;
							public getLocalTimeProperty(): string;
						}
						export namespace AggregateRequestImpl {
							export class AggregatePair {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.AggregatePair>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.AggregatePair>;
								public constructor(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.AggregateFunction, param1: string, param2: string);
								public getAggNum(): number;
								public toString(): string;
								public describeContents(): number;
								public getAlias(): string;
								public getField(): string;
								public constructor(param0: globalAndroid.os.Parcel);
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
							export namespace AggregatePair {
								export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.AggregatePair> {
									public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.AggregatePair.a>;
									public newArray(param0: number): androidNative.Array<any>;
									public createFromParcel(param0: globalAndroid.os.Parcel): any;
								}
							}
							export class Group {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.Group>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.Group>;
								public toString(): string;
								public describeContents(): number;
								public getAlias(): string;
								public constructor(param0: string, param1: string);
								public constructor(param0: globalAndroid.os.Parcel);
								public getProperty(): string;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
							export namespace Group {
								export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.Group> {
									public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.Group.a>;
									public newArray(param0: number): androidNative.Array<any>;
									public createFromParcel(param0: globalAndroid.os.Parcel): any;
								}
							}
							export class TimeGroup {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.TimeGroup>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.TimeGroup>;
								public getTimeUnit(): number;
								public toString(): string;
								public describeContents(): number;
								public getOffsetProperty(): string;
								public getAlias(): string;
								public constructor(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.TimeGroupUnit, param1: number, param2: string, param3: string, param4: string);
								public constructor(param0: globalAndroid.os.Parcel);
								public getAmount(): number;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getTimeProperty(): string;
							}
							export namespace TimeGroup {
								export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.TimeGroup> {
									public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.TimeGroup.a>;
									public newArray(param0: number): androidNative.Array<any>;
									public createFromParcel(param0: globalAndroid.os.Parcel): any;
								}
							}
							export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl> {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.AggregateRequestImpl.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class DeleteRequestImpl extends com.samsung.android.sdk.healthdata.HealthDataResolver.DeleteRequest {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getLocalTimeOffsetProperty(): string;
							public getDeviceUuids(): java.util.List<string>;
							public describeContents(): number;
							public getLocalTimeEnd(): number;
							public getFilter(): com.samsung.android.sdk.healthdata.HealthDataResolver.Filter;
							public getLocalTimeBegin(): number;
							public constructor(param0: string, param1: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter, param2: java.util.List<string>, param3: string, param4: string, param5: java.lang.Long, param6: java.lang.Long);
							public getDataType(): string;
							public getLocalTimeProperty(): string;
						}
						export namespace DeleteRequestImpl {
							export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl> {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.DeleteRequestImpl.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class DeviceUtil {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.DeviceUtil>;
							public constructor();
							public static isSamsungHealthDownloadable(param0: globalAndroid.content.Context): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class ErrorUtil {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.ErrorUtil>;
							public constructor();
							public static getRemoteExceptionMessage(param0: java.lang.Exception): string;
							public static requireNonNull(param0: any, param1: string): any;
							public static getNullArgumentMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class HealthResultHolderImpl<T> extends java.lang.Object {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.HealthResultHolderImpl<any>>;
							public cancel(): void;
							public cancelResult(): void;
							public onReceiveHealthResult(param0: number, param1: T): void;
							public setResultListener(param0: com.samsung.android.sdk.healthdata.HealthResultHolder.ResultListener<T>): void;
							public awaitAllowingMainThread(): T;
							public await(): T;
							public setResult(param0: T): void;
							public acquireResult(): T;
						}
						export namespace HealthResultHolderImpl {
							export class a<T> extends globalAndroid.os.Handler {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.HealthResultHolderImpl.a<any>>;
								public handleMessage(param0: globalAndroid.os.Message): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export abstract class HealthResultReceiver {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.HealthResultReceiver>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.HealthResultReceiver>;
							public mVersion: number;
							public static createSyncResult(param0: number, param1: number, param2: globalAndroid.os.Bundle): com.samsung.android.sdk.internal.healthdata.HealthResultReceiver;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public isSync(): boolean;
						}
						export namespace HealthResultReceiver {
							export class Async extends com.samsung.android.sdk.internal.healthdata.HealthResultReceiver {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.HealthResultReceiver.Async>;
								public onCancelResult(param0: number): void;
								public registerListener(param0: com.samsung.android.sdk.internal.healthdata.RemoteResultListener<any>): void;
								public setIntent(param0: globalAndroid.content.Intent): void;
								public isSync(): boolean;
								public getIntent(): globalAndroid.content.Intent;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public cancel(param0: number): void;
								public send(param0: number, param1: globalAndroid.os.Bundle): void;
							}
							export namespace Async {
								export class a extends com.samsung.android.sdk.internal.healthdata.ICallbackRegister.Stub {
									public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.HealthResultReceiver.Async.a>;
									public cancel(param0: number): void;
									public setCallback(param0: number, param1: com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver): void;
								}
								export class b extends com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver.Stub {
									public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.HealthResultReceiver.Async.b>;
									public send(param0: number, param1: globalAndroid.os.Bundle): void;
								}
							}
							export class ForwardAsync extends com.samsung.android.sdk.internal.healthdata.HealthResultReceiver {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.HealthResultReceiver.ForwardAsync>;
								public getReceiverId(): string;
								public cancel(): void;
								public registerListener(param0: com.samsung.android.sdk.internal.healthdata.RemoteResultListener<any>): void;
								public isSync(): boolean;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public constructor(param0: string);
								public send(param0: number, param1: globalAndroid.os.Bundle): void;
							}
							export namespace ForwardAsync {
								export class a extends com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver.Stub {
									public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.HealthResultReceiver.ForwardAsync.a>;
									public send(param0: number, param1: globalAndroid.os.Bundle): void;
								}
								export class b extends com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver {
									public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.HealthResultReceiver.ForwardAsync.b>;
									public asBinder(): globalAndroid.os.IBinder;
									public send(param0: number, param1: globalAndroid.os.Bundle): void;
								}
							}
							export class Sync extends com.samsung.android.sdk.internal.healthdata.HealthResultReceiver {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.HealthResultReceiver.Sync>;
								public isSync(): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getBundle(): globalAndroid.os.Bundle;
							}
							export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.HealthResultReceiver> {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.HealthResultReceiver.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class ICallbackRegister {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.ICallbackRegister>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.internal.healthdata.ICallbackRegister interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setCallback(param0: number, param1: com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver): void;
								cancel(param0: number): void;
							});
							public constructor();
							public cancel(param0: number): void;
							public setCallback(param0: number, param1: com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver): void;
						}
						export namespace ICallbackRegister {
							export abstract class Stub implements com.samsung.android.sdk.internal.healthdata.ICallbackRegister {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.ICallbackRegister.Stub>;
								public static asInterface(param0: globalAndroid.os.IBinder): com.samsung.android.sdk.internal.healthdata.ICallbackRegister;
								public constructor();
								public cancel(param0: number): void;
								public asBinder(): globalAndroid.os.IBinder;
								public setCallback(param0: number, param1: com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver): void;
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							}
							export namespace Stub {
								export class a extends com.samsung.android.sdk.internal.healthdata.ICallbackRegister {
									public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.ICallbackRegister.Stub.a>;
									public asBinder(): globalAndroid.os.IBinder;
									public cancel(param0: number): void;
									public setCallback(param0: number, param1: com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class IHealthResultReceiver {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								send(param0: number, param1: globalAndroid.os.Bundle): void;
							});
							public constructor();
							public send(param0: number, param1: globalAndroid.os.Bundle): void;
						}
						export namespace IHealthResultReceiver {
							export abstract class Stub implements com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver.Stub>;
								public constructor();
								public static asInterface(param0: globalAndroid.os.IBinder): com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver;
								public send(param0: number, param1: globalAndroid.os.Bundle): void;
								public asBinder(): globalAndroid.os.IBinder;
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							}
							export namespace Stub {
								export class a extends com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver {
									public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.IHealthResultReceiver.Stub.a>;
									public asBinder(): globalAndroid.os.IBinder;
									public send(param0: number, param1: globalAndroid.os.Bundle): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class InsertRequestImpl extends com.samsung.android.sdk.healthdata.HealthDataResolver.InsertRequest {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.InsertRequestImpl>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.InsertRequestImpl>;
							public addHealthData(param0: com.samsung.android.sdk.healthdata.HealthData): void;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public addHealthData(param0: java.util.List<com.samsung.android.sdk.healthdata.HealthData>): void;
							public constructor(param0: string);
							public describeContents(): number;
							public getItems(): java.util.List<com.samsung.android.sdk.healthdata.HealthData>;
							public isEmpty(): boolean;
							public getDataType(): string;
						}
						export namespace InsertRequestImpl {
							export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.InsertRequestImpl> {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.InsertRequestImpl.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class IpcUtil {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.IpcUtil>;
							public static KEY_CODE: string;
							public static KEY_COUNT: string;
							public static KEY_PARCEL: string;
							public static KEY_TYPE: string;
							public static KEY_RESULT_IDENTIFIER: string;
							public static TYPE_NONE: number;
							public static TYPE_READ: number;
							public static TYPE_AGGREGATE: number;
							public static TYPE_PERMISSION: number;
							public constructor();
							public static createAndSetResult(param0: com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult, param1: globalAndroid.os.Looper): com.samsung.android.sdk.healthdata.HealthResultHolder<com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult>;
							public static makeResultHolder(param0: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver.ForwardAsync, param1: globalAndroid.os.Looper): com.samsung.android.sdk.healthdata.HealthResultHolder<any>;
							public static makeReadResultHolder(param0: com.samsung.android.sdk.internal.healthdata.HealthResultReceiver.ForwardAsync, param1: globalAndroid.os.Looper, param2: com.samsung.android.sdk.healthdata.IDataResolver): com.samsung.android.sdk.healthdata.HealthResultHolder<com.samsung.android.sdk.healthdata.HealthDataResolver.ReadResult>;
						}
						export namespace IpcUtil {
							export class a extends com.samsung.android.sdk.internal.healthdata.HealthResultHolderImpl<any> {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.IpcUtil.a>;
								public cancelResult(): void;
								public onReceiveHealthResult(param0: number, param1: any): void;
								public cancel(): void;
								public await(): any;
								public setResultListener(param0: com.samsung.android.sdk.healthdata.HealthResultHolder.ResultListener<any>): void;
							}
							export class b extends com.samsung.android.sdk.internal.healthdata.HealthResultHolderImpl<com.samsung.android.sdk.healthdata.HealthDataResolver.ReadResult> {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.IpcUtil.b>;
								public cancelResult(): void;
								public onReceiveHealthResult(param0: number, param1: any): void;
								public cancel(): void;
								public acquireResult(): com.samsung.android.sdk.healthdata.HealthResultHolder.BaseResult;
								public acquireResult(): any;
								public await(): any;
								public setResultListener(param0: com.samsung.android.sdk.healthdata.HealthResultHolder.ResultListener<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class ReadRequestImpl extends com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.ReadRequestImpl>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.ReadRequestImpl>;
							public getLocalTimeOffsetProperty(): string;
							public getProjections(): java.util.List<com.samsung.android.sdk.internal.healthdata.ReadRequestImpl.Projection>;
							public getCount(): number;
							public constructor(param0: string, param1: string, param2: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter, param3: java.util.List<com.samsung.android.sdk.internal.healthdata.ReadRequestImpl.Projection>, param4: java.util.List<string>, param5: number, param6: string, param7: number, param8: number, param9: number, param10: number, param11: number, param12: string, param13: string, param14: java.lang.Long, param15: java.lang.Long);
							public getTimeAfter(): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getSortOrder(): string;
							public constructor(param0: string);
							public getDeviceUuids(): java.util.List<string>;
							public describeContents(): number;
							public getPackageName(): string;
							public getStartTime(): number;
							public getLocalTimeEnd(): number;
							public constructor(param0: globalAndroid.os.Parcel);
							public getFilter(): com.samsung.android.sdk.healthdata.HealthDataResolver.Filter;
							public getLocalTimeBegin(): number;
							public getEndTime(): number;
							public isEmpty(): boolean;
							public getDataType(): string;
							public getOffset(): number;
							public isAliasOnly(): number;
							public getLocalTimeProperty(): string;
						}
						export namespace ReadRequestImpl {
							export class Projection {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.ReadRequestImpl.Projection>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.ReadRequestImpl.Projection>;
								public toString(): string;
								public describeContents(): number;
								public setAlias(param0: string): void;
								public getAlias(): string;
								public constructor(param0: string, param1: string);
								public constructor(param0: globalAndroid.os.Parcel);
								public getProperty(): string;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
							export namespace Projection {
								export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.ReadRequestImpl.Projection> {
									public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.ReadRequestImpl.Projection.a>;
									public newArray(param0: number): androidNative.Array<any>;
									public createFromParcel(param0: globalAndroid.os.Parcel): any;
								}
							}
							export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.ReadRequestImpl> {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.ReadRequestImpl.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class RemoteConnectionException {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.RemoteConnectionException>;
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class RemoteResultListener<T> extends java.lang.Object {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.RemoteResultListener<any>>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.internal.healthdata.RemoteResultListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onReceiveHealthResult(param0: number, param1: T): void;
							});
							public constructor();
							public onReceiveHealthResult(param0: number, param1: T): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class StreamUtil {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.StreamUtil>;
							public constructor();
							public static getInputStream(param0: com.samsung.android.sdk.healthdata.IDataResolver, param1: string, param2: string): java.io.InputStream;
							public static sendStreamIfPresent(param0: com.samsung.android.sdk.internal.interfaces.ParcelFdSupplier, param1: java.util.List<com.samsung.android.sdk.healthdata.HealthData>, param2: globalAndroid.os.Handler): void;
							public static getByteArray(param0: com.samsung.android.sdk.healthdata.IDataResolver, param1: string, param2: string): androidNative.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class UpdateRequestImpl extends com.samsung.android.sdk.healthdata.HealthDataResolver.UpdateRequest {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.UpdateRequestImpl>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.UpdateRequestImpl>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getLocalTimeOffsetProperty(): string;
							public getDeviceUuids(): java.util.List<string>;
							public describeContents(): number;
							public getDataObject(): com.samsung.android.sdk.healthdata.HealthData;
							public getLocalTimeEnd(): number;
							public constructor(param0: globalAndroid.os.Parcel);
							public getFilter(): com.samsung.android.sdk.healthdata.HealthDataResolver.Filter;
							public getLocalTimeBegin(): number;
							public getDataType(): string;
							public getLocalTimeProperty(): string;
							public constructor(param0: string, param1: com.samsung.android.sdk.healthdata.HealthData, param2: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter, param3: java.util.List<string>, param4: string, param5: string, param6: java.lang.Long, param7: java.lang.Long);
						}
						export namespace UpdateRequestImpl {
							export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.UpdateRequestImpl> {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.UpdateRequestImpl.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export class a {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.a>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export namespace query {
							export class AndFilter extends com.samsung.android.sdk.healthdata.HealthDataResolver.Filter {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.query.AndFilter>;
								public constructor(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter, param1: androidNative.Array<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter>);
								public readFromParcel(param0: globalAndroid.os.Parcel): void;
								public constructor(param0: globalAndroid.os.Parcel);
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export namespace query {
							export class ComparisonFilter extends com.samsung.android.sdk.healthdata.HealthDataResolver.Filter {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter>;
								public getValue(): java.lang.Number;
								public getOperator(): com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter.Operator;
								public constructor(param0: com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter.Operator, param1: string, param2: java.lang.Number);
								public readFromParcel(param0: globalAndroid.os.Parcel): void;
								public getField(): string;
								public constructor(param0: globalAndroid.os.Parcel);
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
							export namespace ComparisonFilter {
								export abstract class Operator extends globalAndroid.os.Parcelable {
									public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter.Operator>;
									public static GREATER_THAN_EQUALS: com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter.Operator;
									public static GREATER_THAN: com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter.Operator;
									public static LESS_THAN_EQUALS: com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter.Operator;
									public static LESS_THAN: com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter.Operator;
									public static EQ: com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter.Operator;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter.Operator>;
									public toQueryString(): string;
									public static valueOf(param0: string): com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter.Operator;
									public describeContents(): number;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public static values(): androidNative.Array<com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter.Operator>;
								}
								export namespace Operator {
									export class a extends globalAndroid.os.Parcelable.Creator<com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter.Operator> {
										public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter.Operator.a>;
										public newArray(param0: number): androidNative.Array<any>;
										public createFromParcel(param0: globalAndroid.os.Parcel): any;
									}
								}
								export class a {
									public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.query.ComparisonFilter.a>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export namespace query {
							export class NotFilter extends com.samsung.android.sdk.healthdata.HealthDataResolver.Filter {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.query.NotFilter>;
								public readFromParcel(param0: globalAndroid.os.Parcel): void;
								public constructor(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter);
								public constructor(param0: globalAndroid.os.Parcel);
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export namespace query {
							export class NumberArrayFilter extends com.samsung.android.sdk.healthdata.HealthDataResolver.Filter {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.query.NumberArrayFilter>;
								public readFromParcel(param0: globalAndroid.os.Parcel): void;
								public getField(): string;
								public getList(): androidNative.Array<java.lang.Number>;
								public constructor(param0: globalAndroid.os.Parcel);
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public constructor(param0: string, param1: androidNative.Array<java.lang.Number>);
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export namespace query {
							export class OrFilter extends com.samsung.android.sdk.healthdata.HealthDataResolver.Filter {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.query.OrFilter>;
								public constructor(param0: com.samsung.android.sdk.healthdata.HealthDataResolver.Filter, param1: androidNative.Array<com.samsung.android.sdk.healthdata.HealthDataResolver.Filter>);
								public readFromParcel(param0: globalAndroid.os.Parcel): void;
								public constructor(param0: globalAndroid.os.Parcel);
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export namespace query {
							export class StringArrayFilter extends com.samsung.android.sdk.healthdata.HealthDataResolver.Filter {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.query.StringArrayFilter>;
								public constructor(param0: string, param1: androidNative.Array<string>);
								public readFromParcel(param0: globalAndroid.os.Parcel): void;
								public getField(): string;
								public constructor(param0: globalAndroid.os.Parcel);
								public getList(): androidNative.Array<string>;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace healthdata {
						export namespace query {
							export class StringFilter extends com.samsung.android.sdk.healthdata.HealthDataResolver.Filter {
								public static class: java.lang.Class<com.samsung.android.sdk.internal.healthdata.query.StringFilter>;
								public constructor(param0: string, param1: string);
								public readFromParcel(param0: globalAndroid.os.Parcel): void;
								public getField(): string;
								public constructor(param0: globalAndroid.os.Parcel);
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getValue(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace samsung {
		export namespace android {
			export namespace sdk {
				export namespace internal {
					export namespace interfaces {
						export class ParcelFdSupplier {
							public static class: java.lang.Class<com.samsung.android.sdk.internal.interfaces.ParcelFdSupplier>;
							/**
							 * Constructs a new instance of the com.samsung.android.sdk.internal.interfaces.ParcelFdSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								get(param0: string, param1: string): globalAndroid.os.ParcelFileDescriptor;
							});
							public constructor();
							public get(param0: string, param1: string): globalAndroid.os.ParcelFileDescriptor;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.samsung.android.sdk.healthdata.HealthResultHolder:1
//com.samsung.android.sdk.healthdata.HealthResultHolder.ResultListener:1
//com.samsung.android.sdk.internal.healthdata.HealthResultHolderImpl:1
//com.samsung.android.sdk.internal.healthdata.HealthResultHolderImpl.a:1
//com.samsung.android.sdk.internal.healthdata.RemoteResultListener:1

