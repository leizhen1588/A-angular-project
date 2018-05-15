/**
 * 将所有的第三方依赖加到这里
 */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'es6-promise/auto'
import angular from 'angular'
import ngSanitize from 'angular-sanitize'
import uiRouter from '@uirouter/angularjs'
import oclazyload from 'oclazyload'
import ui from 'angular-ui-bootstrap'
import ngResource from 'angular-resource'
import { ngBaiduMap } from 'angular-baidu-map'
import echarts from 'echarts'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'angular-i18n/zh-cn'

export {
  angular,
  ngSanitize,
  uiRouter,
  oclazyload,
  ngResource,
  ui,
  ngBaiduMap,
  echarts,
  moment
}
