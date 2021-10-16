import path from 'path';
import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config';

const devConfig: Configuration = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    host: 'localhost',
    compress: true,
    port: 9000,
  },
};

export default merge(baseConfig, devConfig);
