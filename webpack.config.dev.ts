import path from "path";
import { Configuration } from "webpack";
import merge from "webpack-merge";
import baseConfig from "./webpack.config";

const devConfig: Configuration = {
  mode: "development",
  devtool: "inline-source-map", // fast source-maps
  devServer: {
    static: {
      directory: path.join(__dirname, "public")
    },
    open: true,
    compress: true,
    port: 9000
  }
};

export default merge(baseConfig, devConfig);
