/**
 * Created by rily on 2017/9/20.
 */
import app from '../../app'
import template from './air-quality.html'
import './air-quality.less'
import { AirEnvService } from '../../services/index'
import './year-target'
import './city-compare'
import './year-compare'
import './all-city-air-quality'
import moment from 'moment'
import './ranking/city74'
import './ranking/shenghui'
import './ranking/fusheng'
import './ranking/city21'
import './ranking/quxian'
import './o3-sliding'
import './aqi-day-compare'
import './first-pols'
import './all-level-day'
import './year-pollute-days'
import './year-good-days'
import './month-good-days'
import './month-pollute-days'
import './aqi-link-relative'
import AqiUtil from '../../utils/aqi-util'
class QualityController {
  static $inject = [AirEnvService, '$scope', '$stateParams', '$log']

  constructor (AirEnvService, $scope, $stateParams, $log) {
    this.AirEnvService = AirEnvService
    this.$scope = $scope
    this.$stateParams = $stateParams
    this.$log = $log
  }

  $onInit () {
    let $ctrl = this
    $ctrl.$log.info('active:' + $ctrl.$stateParams.active)
    $ctrl.active = Number.parseInt($ctrl.$stateParams.active)
    $ctrl.datas = ''
    $ctrl.xdata = []
    $ctrl.ydata = []
    $ctrl.see = 'AQI'
    $ctrl.option1 = ''
    $ctrl.$scope.$watch('$ctrl.see', v => {
      this.getChartDatas()
    }, true)
    let startDate = moment().subtract(24, 'hour').format('YYYY-MM-DD HH') + ':00:00'
    let endDate = moment().subtract(1, 'hour').format('YYYY-MM-DD HH') + ':00:00'
    this.AirEnvService.getaqi24hour('all', startDate, endDate).then(rsp => {
      $ctrl.datas = rsp.result
      for (let i = 0; i < $ctrl.datas.length; i++) {
        if (i === 0) {
          $ctrl.xdata.push(moment().subtract(1, 'day').format('DD') + '日' +
            moment($ctrl.datas[0].DATA_TIME_).format('HH') + '时')
        } else if (moment($ctrl.datas[i].DATA_TIME_).format('HH') === '00') {
          $ctrl.xdata.push(moment().format('DD') + '日' +
            moment($ctrl.datas[i].DATA_TIME_).format('HH') + '时')
        } else {
          $ctrl.xdata.push(moment($ctrl.datas[i].DATA_TIME_).format('HH') + '时')
        }
        $ctrl.ydata.push($ctrl.datas[i].AQI_)
      }
      $ctrl.option1 = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {},
        xAxis: [
          {
            axisPointer: {
              label: {}
            },
            axisLabel: {
              textStyle: {
                color: '#21abfa'
              }
            },
            data: $ctrl.xdata
          }
        ],
        yAxis: {
          axisLabel: {
            textStyle: {
              color: '#21abfa'
            }
          }
        },
        series: [
          {
            name: '过去24小时' + $ctrl.see + '曲线图',
            type: 'line',
            data: $ctrl.ydata
          }
        ]
      }
    })
    let date = moment().subtract(24, 'hour').format('YYYY-MM-DD HH') + ':00:00'
    $ctrl.xdata1 = []
    $ctrl.ydata1 = []
    this.AirEnvService.getzhandianaqi(date).then(rsp => {
      let datas = rsp.result
      $ctrl.dateTime = datas[0].DATA_TIME_
      for (let i = datas.length - 1; i >= 0; i--) {
        let x = datas[i]
        let duixiang = {}
        $ctrl.xdata1.push(x.NAME_)
        duixiang.value = x.AQI_
        duixiang.itemStyle = {
          normal: {
            color: AqiUtil.getAqiInfo(x.AQI_).color
          }
        }
        $ctrl.ydata1.push(duixiang)
      }
      $ctrl.option2 = {
        title: {
          right: '10%',
          text: $ctrl.dateTime,
          show: true,
          textStyle: {
            color: '#008b90'
          }
        },
        grid: {
          bottom: 120
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [],
          bottom: 270
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              interval: 0,
              rotate: 50,
              textStyle: {
                color: '#21abfa'
              }
            },
            interval: 0,
            data: $ctrl.xdata1,
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#21abfa'
              }
            },
            min: 0,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: 'AQI',
            type: 'bar',
            data: $ctrl.ydata1,
            itemStyle: {
              normal: {
                color: 'rgb(91,155,213)',
                barBorderRadius: [7, 7, 7, 7],
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: '#fff'
                  }
                }
              }
            }
          }
        ]
      }
    })
  }

  $postLink () {
    let $ctrl = this
    $ctrl.timeactive = true
    $ctrl.change = (type) => {
      $ctrl.timeactive = !$ctrl.timeactive
    }
  }

  getProperty () {
    let $ctrl = this
    let property = 'AQI_'
    switch ($ctrl.see) {
      case 'AQI':
        property = 'AQI_'
        break
      case 'PM2.5':
        property = 'C_PM25_1H'
        break
      case 'PM10':
        property = 'C_PM10_1H'
        break
      case 'SO2':
        property = 'C_SO2_1H'
        break
      case 'NO2':
        property = 'C_NO2_1H'
        break
      case 'CO':
        property = 'C_CO1_1H'
        break
      case 'O3':
        property = 'C_O3_1H'
        break
    }
    return property
  }

  getChartDatas () {
    let $ctrl = this
    $ctrl.ydata = []
    $ctrl.option1 = ''
    let property = this.getProperty()
    for (let i = 0; i < $ctrl.datas.length; i++) {
      $ctrl.ydata.push($ctrl.datas[i][property])
    }
    $ctrl.option1 = {
      tooltip: {},
      legend: {},
      xAxis: [
        {
          axisPointer: {
            label: {
              // formatter: function (params) {
              //   return '降水量  ' + params.value +
              //     (params.seriesData.length ? '：' + params.seriesData[0].data : '')
              // }
            }
          },
          axisLabel: {
            textStyle: {
              color: '#21abfa'
            }
          },
          data: $ctrl.xdata
        }
      ],
      yAxis: {
        axisLabel: {
          textStyle: {
            color: '#21abfa'
          }
        }
      },
      series: [
        {
          name: '过去24小时' + $ctrl.see + '曲线图',
          type: 'line',
          data: $ctrl.ydata
        }
      ]
    }
  }
}

app.component('quality', {
  controller: QualityController,
  template
})
export default 'quality'
