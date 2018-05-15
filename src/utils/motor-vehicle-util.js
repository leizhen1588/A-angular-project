/**
 *缓存查询汽车类型与油耗类型
 * Created by ysh on 2017/10/13.
 */
import app from '../app'
import UrlConfigurationService from '../services/url-configuration-service'
MotorVehicleUtil.$inject = ['$resource', UrlConfigurationService]
let motorVehicleTypeCache
let motorVehiclefuelTypeCache
function MotorVehicleUtil ($resource, UrlConfigurationService) {
  const motorVehicleType = $resource(UrlConfigurationService.motorVehicleAnalysis.motorVehicleType)
  const motorVehiclefuelType = $resource(UrlConfigurationService.motorVehicleAnalysis.motorVehiclefuelType)
  return {
    getMotorVehicleType () {
      if (motorVehicleTypeCache) {
        return new Promise((resolve, reject) => {
          resolve(motorVehicleTypeCache)
        })
      } else {
        return motorVehicleType.get({
          token: UrlConfigurationService.token,
          page: '1',
          rows: '100'
        }).$promise.then(response => {
          if (response.success) {
            motorVehicleTypeCache = response.data
            motorVehicleTypeCache.result.unshift({name: '机动车类型', code: ''})
            return motorVehicleTypeCache
          }
        })
      }
    },
    getMotorVehiclefuelType () {
      if (motorVehiclefuelTypeCache) {
        return new Promise((resolve, reject) => {
          resolve(motorVehiclefuelTypeCache)
        })
      } else {
        return motorVehiclefuelType.get({
          token: UrlConfigurationService.token,
          page: '1',
          rows: '100'
        }).$promise.then(response => {
          if (response.success) {
            motorVehiclefuelTypeCache = response.data
            motorVehiclefuelTypeCache.result.unshift({name: '燃油类型', code: ''})
            return motorVehiclefuelTypeCache
          }
        })
      }
    }
  }
}
app.factory('MotorVehicleUtil', MotorVehicleUtil)
export default 'MotorVehicleUtil'
