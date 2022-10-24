# @manojdcoder/nativescript-pedometer

```javascript
ns plugin add @manojdcoder/nativescript-pedometer
```

## Usage

### iOS Settings

Add following key to Info.plist often found in `App_Resources/iOS/Info.plist`

```
<key>NSMotionUsageDescription</key>
<string>We are using motion usage in order to track your step count.</string>
```

### Android Settings

Add following permission to AndroidManifest.xml often found in `App_Resources/Android/AndroidManifest.xml`

```
<uses-permission android:name="android.permission.ACTIVITY_RECOGNITION"/>
```

## License

Apache License Version 2.0
