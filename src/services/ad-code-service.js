/**
 * 行政区域编码服务类
 * Created by ysh on 2017/10/13.
 */
import app from '../app'
import UrlConfigurationService from '../services/url-configuration-service'
AdCodeService.$inject = ['$resource', UrlConfigurationService]
function AdCodeService ($resource, UrlConfigurationService) {
  const cdCounty = $resource(UrlConfigurationService.adCode.cdCounty)
  return {
    getCdCounty () {
      return cdCounty.get({
        token: UrlConfigurationService.token,
        page: '1',
        rows: '25'
      }).$promise.then(response => {
        if (response.success) {
          return response.data
        }
      })
    }
  }
}
app.factory('AdCodeService', AdCodeService)
export default 'AdCodeService'
