# @manojdcoder/nativescript-pedometer

```javascript
ns plugin add @manojdcoder/nativescript-pedometer
```

## Usage

### Example

Refer the [demo app](../../apps/demo/src/plugin-demos/nativescript-pedometer.ts)

### Android Settings

Foreground service is used to continuously monitor step counts even app is in background or not running or killed. The webpack configuration must be adjusted to include the foreground service,

```
const webpack = require('@nativescript/webpack');
const { resolve } = require('path');

module.exports = (env) => {
  // Copy the line below to your webpack.config.js
  env.appComponents = (env.appComponents || []).concat([resolve(__dirname, 'node_modules/@manojdcoder/nativescript-pedometer/step-counter-service.android'), resolve(__dirname, 'node_modules/@manojdcoder/nativescript-pedometer/step-counter-broadcast-receiver.android')]);

  webpack.init(env);
  webpack.useConfig('typescript');

  webpack.chainWebpack((config) => {
    // shared demo code
    config.resolve.alias.set('@demo/shared', resolve(__dirname, '..', '..', 'tools', 'demo'));
  });

  // Example if you need to share images across demo apps:
  // webpack.Utils.addCopyRule({
  //   from: '../../../tools/images',
  // 	to: 'images',
  //   context: webpack.Utils.project.getProjectFilePath('node_modules')
  // });

  return webpack.resolveConfig();
};
```

## License

Apache License Version 2.0
