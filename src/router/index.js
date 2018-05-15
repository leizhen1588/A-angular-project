export default [
  '$stateProvider', '$locationProvider', '$urlRouterProvider',
  function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('')
    $urlRouterProvider.otherwise('/index')
    /** 第三步，我们需要给组件指定前端路由，也就是我前端通过什么路径就可以方法这个组件
     * 然后我们就可以在浏览器里面看到相关的东西了
     */
    $stateProvider.state({
      name: 'fullTemplate',
      url: '/', // 记住我们的路由路径是啥
      component: 'fullTemplate', // 这里指定路由的组件，和uve的路由很像
      resolve: {
        // 这个是angular的组件延迟加载技术，angular做的比较复杂，没有vue简单，这个你们可以做个对比
        // component这个名字可以随意，无所谓
        component: ['$ocLazyLoad', function ($ocLazyLoad) {
          // 这个是编码时的路径。我们在写代码的时候，始终只关心编码路径，不关心运行路径
          return require(['../components/template/full-template/full-template'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({
      name: 'home.p1', // angularjs的嵌套是通过name来区分的,
      url: 'p1', // 刚刚这里就上了一个'/'的当
      component: 'p1',
      resolve: {
        // 路由的嵌套，要求在相应的父容器中必须有个ui-view
        // 比如我们这个嵌套在home中，就要求home里面有个ui-view
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          // 注意中括号和逗号的位置，我在这里吃过几次亏了
          return require(['../components/index/p1'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({
      name: 'fullTemplate.index',
      url: 'index',
      component: 'index',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/index/index'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({
      name: 'fullTemplate.airEnv',
      url: 'airEnv'
    }).state({
      name: 'fullTemplate.airEnv.siteDust', // 工地扬尘
      url: '/siteDust',
      component: 'siteDust',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/air-environment/site-dust'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({
      name: 'fullTemplate.airEnv.lampBlack', // 餐饮油烟
      url: '/lampBlack',
      component: 'lampBlack',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/air-environment/lamp-black'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({
      name: 'fullTemplate.waterSpecial', // 水环境专题
      url: 'waterSpecial',
      component: 'waterSpecial',
      resolve: {
        component: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/water-special/water-special'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({
      name: 'fullTemplate.cloudState',
      url: 'cloudState',
      component: 'cloudState',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/air-environment/cloudState/cloudState'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({ // 一厂一档  企业基本信息
      name: 'fullTemplate.basicList',
      url: 'basicList',
      component: 'basicList',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/basic-list'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({ // 一厂一档  企业详细信息
      name: 'fullTemplate.companyDetailList',
      url: 'companyDetailList/{id}',
      component: 'companyDetailList',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/company-detail-list'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({       // 空气质量页面
      name: 'fullTemplate.airEnv.quality',
      url: '/quality',
      component: 'quality',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/air-environment/air-quality'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {
        active: 0
      }
    }).state({       // 一厂一档   企业基本信息
      name: 'fullTemplate.companyDetailList.basicMessage',
      url: '/basicMessage',
      component: 'basicMessage',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/basic-message'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {id: {}}
    }).state({       // 一厂一档   污染物信息
      name: 'fullTemplate.companyDetailList.pollutionMessage',
      url: '/pollutionMessage',
      component: 'pollutionMessage',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/pollution-message'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {id: {}}
    }).state({       // 一厂一档   进水口信息
      name: 'fullTemplate.companyDetailList.inputWater',
      url: '/inputWater',
      component: 'inputWater',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/input-water'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {id: {}}
    }).state({       // 一厂一档   废水排口信息
      name: 'fullTemplate.companyDetailList.pollutionOutputWater',
      url: '/pollutionOutputWater',
      component: 'pollutionOutputWater',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/pollution-output-water'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {id: {}}
    }).state({       // 一厂一档   废气排口信息
      name: 'fullTemplate.companyDetailList.pollutionOutputAir',
      url: '/pollutionOutputAir',
      component: 'pollutionOutputAir',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/pollution-output-air'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {id: {}}
    }).state({       // 一厂一档   在线监测仪
      name: 'fullTemplate.companyDetailList.onLineTest',
      url: '/onLineTest',
      component: 'onLineTest',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/on-line-test'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {id: {}}
    }).state({       // 一厂一档   数据采集仪
      name: 'fullTemplate.companyDetailList.dataCollect',
      url: '/dataCollect',
      component: 'dataCollect',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/data-collect'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {id: {}}
    }).state({       // 一厂一档   排污许可证
      name: 'fullTemplate.companyDetailList.outPollutionProve',
      url: '/outPollutionProve',
      component: 'outPollutionProve',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/out-pollution-prove'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {id: {}}
    }).state({       // 一厂一档   环评信息
      name: 'fullTemplate.companyDetailList.eiaMessage',
      url: '/eiaMessage',
      component: 'eiaMessage',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/eia-message'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {id: {}}
    }).state({       // 一厂一档   监测信息
      name: 'fullTemplate.companyDetailList.testMessage',
      url: '/testMessage',
      component: 'testMessage',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/test-message'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {id: {}}
    }).state({       // 一厂一档   监测信息污染物
      name: 'fullTemplate.companyDetailList.testMessagePollution',
      url: '/testMessagePollution',
      component: 'testMessagePollution',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/test-message-pollution'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {id: {}}
    }).state({       // 一厂一档   应急预案
      name: 'fullTemplate.companyDetailList.worryPlan',
      url: '/worryPlan',
      component: 'worryPlan',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/worry-plan'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {id: {}}
    }).state({       // 一厂一档   双随机抽查工作
      name: 'fullTemplate.companyDetailList.checkWork',
      url: '/checkWork',
      component: 'checkWork',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/check-work'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {id: {}}
    }).state({       // 一厂一档   行政处罚
      name: 'fullTemplate.companyDetailList.politicsPunish',
      url: '/politicsPunish',
      component: 'politicsPunish',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/one-factory-one-file/politics-punish'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      },
      params: {id: {}}
    }).state({       // 专题地图
      name: 'fullTemplate.map',
      url: 'map',
      component: 'featureMap',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/map/index'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({       // 机动车专题分析页面
      name: 'fullTemplate.motoVehicleAnalysis',
      url: 'motoVehicleAnalysis',
      component: 'motoVehicleAnalysis',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/motor-vehicle/motor-vehicle-analysis'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({       // 机动车-检测站详情
      name: 'fullTemplate.situationDetial',
      url: 'situationDetial',
      component: 'monitorBasicSituationDetial',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/motor-vehicle/module/monitor-basic-situation-detial'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({       // 机动车环保标志-详情
      name: 'fullTemplate.eProtectionDetail',
      url: 'eProtectionDetail',
      component: 'motorVehicleEnvironmentalProtectionDetail',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/motor-vehicle/module/motor-vehicle-environmental-protection-detail'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({
      name: 'mapPageAirDate',
      url: '/mapPageAirDate/{id}/{field}.html',
      component: 'aqiPopupPage',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/map/page/aqi-popup-page'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({
      name: 'mapPageWaterDate',
      url: '/mapPageWaterDate/{id}',
      component: 'waterPopupPage',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/map/page/water-popup-page'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    }).state({ // 新的水环境专题
      name: 'fullTemplate.waterProject',
      url: 'waterProject',
      component: 'waterProject',
      resolve: {
        p1: ['$ocLazyLoad', $ocLazyLoad => {
          return require(['../components/water-special/water-project'], () => {
            $ocLazyLoad.inject('app')
          })
        }]
      }
    })
  }]
