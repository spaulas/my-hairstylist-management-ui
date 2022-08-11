const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/management/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "management",
      filename: "remoteEntry.js",
      exposes: {
        "./ManagementApp": "./src/index",
        "./routes": './src/exposed/routes'
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
