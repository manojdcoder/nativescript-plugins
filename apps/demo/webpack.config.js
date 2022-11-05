const webpack = require('@nativescript/webpack');
const { resolve } = require('path');

module.exports = (env) => {
  // Add android service files from the plugin
  env.appComponents = (env.appComponents || []).concat([resolve(__dirname, 'node_modules/@manojdcoder/nativescript-pedometer/step-counter-broadcast-receiver.android')]);

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
