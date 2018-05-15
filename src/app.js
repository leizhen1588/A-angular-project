/**
 * 应用依赖
 */
import './css/style.less'
import './css/test.less'
// 导入项目全局依赖
import * as vendor from './vendor'
// 导入路由配置
import extUi from './components/ui'
// 导入全局样式

import ngEcharts from 'angular-echarts3'

export default vendor.angular.module('app', [
  vendor.ngSanitize,
  vendor.uiRouter,
  vendor.oclazyload,
  vendor.ngResource,
  vendor.ui,
  extUi,
  vendor.ngBaiduMap,
  ngEcharts
])
