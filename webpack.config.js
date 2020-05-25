/*
 * @Author: zouzheng
 * @Date: 2020-05-25 11:19:28
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-05-25 11:24:44
 * @Description: 这是XXX组件（页面）
 */
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'pika-webworker.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd'
  }
};