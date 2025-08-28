const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { withStorybook } = require("@storybook/react-native/metro");

let config = getDefaultConfig(__dirname);

// Ensure NativeWind transformer comes first
config = withNativeWind(config, { input: "./global.css" });

// Wrap Storybook last
config = withStorybook(config);

module.exports = config;
