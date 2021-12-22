const webpack = require('webpack');
import Dotenv from 'dotenv-webpack'

module.exports = {
  plugins: [
    new Dotenv()
  ]
};
