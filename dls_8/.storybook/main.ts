import type { StorybookConfig } from '@storybook/react-native-web-vite';
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-native-web-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      css: {
        postcss: "./postcss.config.js", // 👈 make sure this exists
      },
      resolve: {
        alias: {
          "react-native": "react-native-web", // 👈 required for NativeWind
        },
      },
    });
  },
};
export default config;
