webpackJsonp([11],{720:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(125),a=n.n(r),i=n(126),o=n.n(i),s=n(62),c=n(993),u=n.n(c),d=n(937),f=(n.n(d),n(90)),l=n.n(f),p=n(782),v=(n(802),n(738)),g=function(){function e(t,n,r){a()(this,e),m.call(this),this.$state=t,this.stateParams=n,this.CompanyDetailListService=r}return o()(e,[{key:"$onInit",value:function(){var e=this;e.id=this.stateParams.id;var t=this.stateParams.id;this.CompanyDetailListService.getInfo(t).then(function(t){e.msg=t.result}).catch(function(e){}),this.CompanyDetailListService.echarts1().then(function(e){var t=e.result,n=[],r=[];for(var a in t)n.push(t[a].division),r.push({name:t[a].division,value:t[a].num});l.a.init(document.getElementById("echartsPie1")).setOption({title:{text:"行政区划占比",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},series:[{name:"",type:"pie",radius:["25%","50%"],labelLine:{normal:{show:!0}},data:r}]})}),this.CompanyDetailListService.echarts2().then(function(e){var t=e.result,n=[],r=[];for(var a in t)n.push(t[a].F_PolluteType),r.push({name:t[a].F_PolluteType,value:t[a].num});l.a.init(document.getElementById("echartsPie2")).setOption({title:{text:"污染类别占比",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},series:[{name:"",type:"pie",radius:["25%","50%"],labelLine:{normal:{show:!0}},data:r}]})})}},{key:"$postLink",value:function(){var e=this;e.$state.go("fullTemplate.companyDetailList.basicMessage",{id:e.id})}},{key:"loaded",value:function(e){var t=this;t.map=e,p.a.dojoRequire(["esri/geometry/Point","esri/SpatialReference","esri/layers/GraphicsLayer","esri/symbols/PictureMarkerSymbol","esri/renderers/SimpleRenderer","esri/graphic"],function(e,n,r,a,i,o){var s=new r({className:"oneBasicInfo",id:"oneBasicInfo"});t.map.addLayer(s),s.on("click",function(e){if(e){var n=e.graphic,r=n.attributes;console.log(r);var a='<div class="marker">\n            <ul>\n            <li>企业名称：'+r.F_enterpriseName+"</li>\n            <li>单位地址："+r.F_PostalAddress+"</li>\n          <li>企业状态："+r.F_State+"</li>\n          </ul>\n          </div>";t.map.infoWindow.setTitle("信息"),t.map.infoWindow.show(n.geometry),t.map.infoWindow.setContent(a),t.map.centerAt(n.geometry)}});var c=new a("/static/img/污染源点位 拷贝 12.png",20,30);s.setRenderer(new i(c)),t.CompanyDetailListService.getInfo(t.id).then(function(n){var r=n.result,a=t.map.getLayer("oneBasicInfo"),i={latitude:0,longitude:0},s=r[0];if(s.F_LatitudeDegree&&s.F_LongitudeDegree){i.latitude=Number(s.F_LatitudeDegree.substring(0,s.F_LatitudeDegree.length-2)),i.longitude=Number(s.F_LongitudeDegree.substring(0,s.F_LongitudeDegree.length-2));var c=new e(i.longitude,i.latitude);a.add(new o(c,null,s,null)),t.map.centerAt(c)}})})}}]),e}();g.$inject=["$state","$stateParams",v.y];var m=function(){this.CompanyDetailListService="",this.stateParams=""};s.default.component("companyDetailList",{controller:g,template:u.a}),t.default="companyDetailList"},736:function(e,t,n){"use strict";function r(){return{helloWorld:"/data/service/hello",token:"ECDAB1A41BFEEF0FE6795D75F13E1CD6",header:{weather:"/data/service/天气情况"},airEnv:{siteDust:{tableData:"/data/service/工地扬尘地图点位信息",addressStatistics:"/data/service/工地扬尘地图区划统计",levelStatistics:"/data/service/工地扬尘污染级别占比"},lampBlack:{tableData:"/data/service/餐饮油烟地图点位信息",addressStatistics:"/data/service/餐饮油烟地图区划统计",offLineStatistics:"/data/service/餐饮油烟在线离线占比"},aqi24hour:"/data/service/空气质量监测站小时数据",zhandianaqi:"/data/service/检测站点AQI小时数据",yearTarget:{regions:"/data/service/年度目标区县编码",datas:"/data/service/成都市年度对比"},cityCompare:{hourData:"/data/service/四川省各城市AQI小时数据",dayData:"/data/service/四川省各城市AQI日时数据",allCity:"/data/service/四川省各城市"},yearCompare:{pollUrl:"/data/service/年度对比",daySumUrl:"/data/service/年度对比CODE天数",centerSum:"/data/service/年度对比中心城区天数"},o3Sliding:"/data/service/成都各区县空气质量日数据",yearDatas:"/data/service/年度占比",monthDatas:"/data/service/成都各区县空气质量月数据"},factoryFile:{basicList:"/data/service/一厂一档企业基本信息",echartsPie1:"/data/service/一厂一档行政区划",echartsPie2:"/data/service/一厂一档污染类别"},basicLists:{basicMessage:"/data/service/一厂一档企业基本信息",pollutionMessage:"/data/service/一厂一档污染物信息",inputWater:"/data/service/一厂一档进水口信息",outputWater:"/data/service/一厂一档废水排口信息",outputAir:"/data/service/一厂一档废气排口信息",onLineList:"/data/service/一厂一档在线监测仪",dataCollect:"/data/service/一厂一档数据采集仪",proveList:"/data/service/一厂一档排污许可证",eiaMessage:"/data/service/一厂一档环评信息",testMessage:"/data/service/一厂一档监测信息",testPollution:"/data/service/一厂一档监测信息污染物",worryPlan:"/data/service/一厂一档应急预案",checkWork:"",politicsPunish:"/data/service/一厂一档行政处罚"},index:{yearAnalyze:"/data/service/成都市年度对比",airaqi:"/data/service/空气质量监测站最新小时数据",hourAQI:"/data/service/四川省各城市AQI小时数据",dayAQI:"/data/service/四川省各城市AQI日时数据",indexMap:"/data/service/检测站点AQI小时数据",indexRealTimeRank:"/data/service/成都区县AQI小时数据",threeDay:"/data/service/未来三天空气质量",countryAudit:"/data/service/国家考核",airCalendar:"/data/service/成都市日历AQI"},rank:{city74day:"/data/service/74城市日数据",city74hour:"/data/service/74城市小时数据",city74month:"/data/service/重点城市空气质量月综合指数",city74year:"/data/service/74城市年度综合指数",shenghui:"/data/service/31个省会城市AQI排名日数据",shenghuimonth:"/data/service/31城市月数据",fusheng:"/data/service/15个副省级城市AQI排名日数据",fushengMonth:"/data/service/15城市月数据",city21:"/data/service/四川省21城市日数据",city21Hour:"/data/service/四川省21城市小时数据",city21Month:"/data/service/四川省空气质量月综合指数",city21Year:"/data/service/四川省21地市年度综合指数",quxianHour:"/data/service/区县空气质量AQI实时数据排名",quxianDay:"/data/service/成都各区县空气质量日数据",quxianMonth:"/data/service/区县空气质量综合指数月数据",quxianJi:"/data/service/成都22区县季度",quxianYear:"/data/service/成都22区县年",allCityAirCity:"/data/service/全市空气质量监测站点AQI小时数据3"},stateCloud:{cpu:"/data/service/cpu",memory:"/data/service/memory",storage:"/data/service/storage",internet:"/data/service/出口网络流",servicedu:"/data/service/服务端口"},waterSpecial:{tableList:"/data/service/水环境专题地图点位信息",envStatistics:"/data/service/水环境级别占比"},motorVehicleAnalysis:{monitorBasicSituation:"/data/service/机动车检测站基本情况",motorVehicleMonitor:"/data/service/机动车检测情况",motorVehicleEnvironmentalProtection:"/data/service/机动车环保标志",motorVehicleBasicInfo:"/data/service/机动车检测情况",motorVehicleTransferOwnership:"/data/service/机动车过户车辆信息",environmentalProtectionQualifyDay:"/data/service/环保标志合格率统计_日",environmentalProtectionQualifyMonth:"/data/service/环保标志合格率统计_月",environmentalProtectionQualifyYear:"/data/service/环保标志合格率统计_年",motorVehicleNox:"",motorVehicleType:"/data/service/机动车车型",motorVehiclefuelType:"/data/service/机动车燃油类型"},adCode:{cdCounty:"/data/service/行政区划编码"},mapLayer:{meteor:"/data/service/气象监测站点",traffic:"/data/service/交通在建项目",countryland:"/data/service/国土储备用地",citySite:"/data/service/中心城区建设工地",diningfumes:"/data/service/餐饮油烟点位",housingtube:"/data/service/房管棚户改造",sitedust:"/data/service/工地扬尘点位",polution:"/data/service/污染源信息",foulwaterPolution:"/data/service/污水处理厂",countryPolution:"/data/service/国控污染源",provincePolution:"/data/service/省控污染源",cityPolution:"/data/service/市控污染源",waterStation:"/data/service/成都市水质监测站",lastHourAirData:"/data/service/监测站最新小时数据",lastRegionAQIData:"/data/service/成都区县最新AQI小时数据",pageWaterLastHourData:"/data/service/水环境专题地图点位信息"}}}n(62).default.factory("UrlConfigurationService",r),t.a="UrlConfigurationService"},738:function(e,t,n){"use strict";var r=(n(752),n(736)),a=n(742),i=n(763),o=n(743),s=n(754),c=n(748),u=n(768),d=n(740),f=n(769),l=n(751),p=n(762),v=n(744),g=n(759),m=n(753),h=n(761),y=n(760),k=n(756),$=n(749),w=n(757),S=n(750),D=n(765),b=n(764),P=n(767),L=n(745),C=n(758),M=n(766),x=n(747),A=(n(755),n(741)),j=n(746);n.d(t,"d",function(){return r.a}),n.d(t,"c",function(){return a.a}),n.d(t,"z",function(){return o.a}),n.d(t,"B",function(){return i.a}),n.d(t,"y",function(){return c.a}),n.d(t,"a",function(){return s.a}),n.d(t,"w",function(){return u.a}),n.d(t,"x",function(){return d.a}),n.d(t,"u",function(){return f.a}),n.d(t,"C",function(){return l.a}),n.d(t,"v",function(){return p.a}),n.d(t,"s",function(){return v.a}),n.d(t,"b",function(){return M.a}),n.d(t,"r",function(){return g.a}),n.d(t,"q",function(){return m.a}),n.d(t,"p",function(){return h.a}),n.d(t,"o",function(){return y.a}),n.d(t,"n",function(){return k.a}),n.d(t,"m",function(){return $.a}),n.d(t,"l",function(){return w.a}),n.d(t,"k",function(){return S.a}),n.d(t,"j",function(){return D.a}),n.d(t,"i",function(){return b.a}),n.d(t,"h",function(){return P.a}),n.d(t,"g",function(){return L.a}),n.d(t,"f",function(){return C.a}),n.d(t,"t",function(){return x.a}),n.d(t,"e",function(){return A.a}),n.d(t,"A",function(){return j.a})},740:function(e,t,n){"use strict";function r(e,t){var n=e(t.airEnv.cityCompare.allCity),r=e(t.airEnv.cityCompare.hourData),a=e(t.airEnv.cityCompare.dayData);return{getCitys:function(){return n.get({token:t.token,rows:100}).$promise.then(function(e){if(e.success)return e.data})},getHourDatas:function(e){var n=i()({},{token:t.token,page:1,rows:100},e);return r.get(n).$promise.then(function(e){if(e.success)return e.data})},getDayDatas:function(e){var n=i()({},{token:t.token,page:1,rows:100},e);return a.get(n).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(360),i=n.n(a),o=n(62),s=n(736);r.$inject=["$resource",s.a],o.default.factory("CityCompareService",r),t.a="CityCompareService"},741:function(e,t,n){"use strict";function r(e,t){var n=e(t.adCode.cdCounty);return{getCdCounty:function(){return n.get({token:t.token,page:"1",rows:"25"}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("AdCodeService",r),t.a="AdCodeService"},742:function(e,t,n){"use strict";function r(e,t){var n=e(t.airEnv.siteDust.tableData),r=e(t.airEnv.siteDust.addressStatistics),a=e(t.airEnv.siteDust.levelStatistics),i=e(t.airEnv.aqi24hour),o=e(t.airEnv.zhandianaqi),s=e(t.index.yearAnalyze),c=e(t.index.airaqi),u=e(t.index.hourAQI),d=e(t.index.dayAQI),f=e(t.index.indexMap),l=e(t.mapLayer.lastRegionAQIData),p=e(t.index.threeDay),v=e(t.index.countryAudit),g=e(t.index.airCalendar);return{getSiteDustList:function(){return n.get({token:t.token,page:"1",rows:"17"}).$promise.then(function(e){if(e.success)return e.data})},getAddressPicData:function(){return r.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){if(e.success)return e.data})},getLevelPicData:function(){return a.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){if(e.success)return e.data})},getaqi24hour:function(e,n,r){return i.get({token:t.token,page:"1",rows:"1000",mn:e,startDate:n,endDate:r}).$promise.then(function(e){if(e.success)return e.data})},getzhandianaqi:function(e){return o.get({token:t.token,page:"1",rows:"1000",date:e}).$promise.then(function(e){if(e.success)return e.data})},getYearAnalyze:function(e,n,r,a,i){return s.get({token:t.token,sourcce:e,code:n,year:r,startYear:a,endYear:i}).$promise.then(function(e){if(e.success)return e.data})},getAirAqi:function(e,n){return c.get({token:t.token,mn:e,level:n}).$promise.then(function(e){if(e.success)return e.data})},getYesterdayAQI:function(e,n,r,a,i){return u.get({token:t.token,code:e,date:n,start:r,end:a,rows:i}).$promise.then(function(e){if(e.success)return e.data})},getMonthAQI:function(e,n,r,a,i){return d.get({token:t.token,code:e,date:n,start:r,end:a,rows:i}).$promise.then(function(e){if(e.success)return e.data})},getIndexMap:function(e,n,r){return f.get({token:t.token,date:e,startDate:n,endDate:r,rows:"1000"}).$promise.then(function(e){if(e.success)return e.data})},getIndexRealTimeRank:function(e,n){return l.get({token:t.token,datetime:e,rows:n}).$promise.then(function(e){if(e.success)return e.data})},getThreeDay:function(){return p.get({token:t.token,rows:100}).$promise.then(function(e){if(e.success)return e.data})},getCountryAudit:function(){return v.get({token:t.token}).$promise.then(function(e){if(e.success)return e.data})},getAirCalendar:function(e,n,r,a,i){return g.get({token:t.token,code:e,date:n,startDate:r,endDate:a,rows:i}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("AirEnvService",r),t.a="AirEnvService"},743:function(e,t,n){"use strict";function r(e,t){var n=e(t.factoryFile.basicList),r=e(t.factoryFile.echartsPie1),a=e(t.factoryFile.echartsPie2);return{getBasicTable:function(e){return e.token=t.token,n.get(e).$promise.then(function(e){if(e.success)return e.data})},echarts1:function(){return r.get({token:t.token}).$promise.then(function(e){if(e.success)return e.data})},echarts2:function(){return a.get({token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("BasicListService",r),t.a="BasicListService"},744:function(e,t,n){"use strict";function r(e,t){var n=e(t.basicLists.basicMessage);return{getMessageTable:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("BasicMessageService",r),t.a="BasicMessageService"},745:function(e,t,n){"use strict";function r(e,t){var n=e(t.basicLists.checkWork);return{checkWorkTable:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("CheckWorkService",r),t.a="CheckWorkService"},746:function(e,t,n){"use strict";function r(e,t){var n=e(t.stateCloud.cpu),r=e(t.stateCloud.memory),a=e(t.stateCloud.storage),i=e(t.stateCloud.internet),o=e(t.stateCloud.servicedu);return{getcpu:function(){return n.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){return e.success,e.data})},getmemory:function(){return r.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){return e.success,e.data})},getstorage:function(){return a.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){return e.success,e.data})},getinternet:function(){return i.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){return e.success,e.data})},getservicedu:function(){return o.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){return e.success,e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("cloudService",r),t.a="cloudService"},747:function(e,t,n){"use strict";function r(e,t){var n=e(t.airEnv.o3Sliding),r=e(t.airEnv.yearDatas),a=e(t.airEnv.monthDatas);return{getDatas:function(e){var r=i()({},e,{token:t.token,page:1,rows:100});return n.get(r).$promise.then(function(e){if(e.success)return e.data})},getYearDatas:function(e){var n=i()({},e,{token:t.token,page:1,rows:100});return r.get(n).$promise.then(function(e){if(e.success)return e.data})},getMonthDatas:function(e){var n=i()({},e,{token:t.token,page:1,rows:1e3});return a.get(n).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(360),i=n.n(a),o=n(62),s=n(736);r.$inject=["$resource",s.a],o.default.factory("CommonAirService",r),t.a="CommonAirService"},748:function(e,t,n){"use strict";function r(e,t){var n=e(t.factoryFile.basicList),r=e(t.factoryFile.echartsPie1),a=e(t.factoryFile.echartsPie2);return{getInfo:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})},echarts1:function(){return r.get({token:t.token}).$promise.then(function(e){if(e.success)return e.data})},echarts2:function(){return a.get({token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("CompanyDetailListService",r),t.a="CompanyDetailListService"},749:function(e,t,n){"use strict";function r(e,t){var n=e(t.basicLists.dataCollect);return{dataCollectTable:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("DataCollectService",r),t.a="DataCollectService"},750:function(e,t,n){"use strict";function r(e,t){var n=e(t.basicLists.eiaMessage);return{eiaMessageTable:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("EiaMessageService",r),t.a="EiaMessageService"},751:function(e,t,n){"use strict";function r(e,t){var n=e(t.header.weather);return{getWeather:function(e){return n.get({token:t.token,startDate:e}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("HeaderService",r),t.a="HeaderService"},752:function(e,t,n){"use strict";function r(e,t){var n=e(t.helloWorld);return{getInfo:function(){return n.get().$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("HelloWorldService",r)},753:function(e,t,n){"use strict";function r(e,t){var n=e(t.basicLists.inputWater);return{getInputTable:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("InputWaterService",r),t.a="InputWaterService"},754:function(e,t,n){"use strict";function r(e,t){var n=e(t.airEnv.lampBlack.tableData),r=e(t.airEnv.lampBlack.addressStatistics),a=e(t.airEnv.lampBlack.offLineStatistics);return{getLampBlackList:function(e){return e.token=t.token,n.get(e).$promise.then(function(e){if(e.success)return e.data})},getAddressPicData:function(){return r.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){if(e.success)return e.data})},getOffLinePicData:function(){return a.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("lampBlackService",r),t.a="lampBlackService"},755:function(e,t,n){"use strict";function r(e,t){var n=e(t.motorVehicleAnalysis.motorVehicleType),r=e(t.motorVehicleAnalysis.motorVehiclefuelType);return{getMotorVehicleType:function(){return n.get({token:t.token,page:"1",rows:"100"}).$promise.then(function(e){if(e.success)return e.data})},getMotorVehiclefuelType:function(){return r.get({token:t.token,page:"1",rows:"100"}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("MotorVehicleService",r)},756:function(e,t,n){"use strict";function r(e,t){var n=e(t.basicLists.onLineList);return{onLineTable:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("OnLineService",r),t.a="OnLineService"},757:function(e,t,n){"use strict";function r(e,t){var n=e(t.basicLists.proveList);return{pollutionProveTable:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("OutPollutionProveService",r),t.a="OutPollutionProveService"},758:function(e,t,n){"use strict";function r(e,t){var n=e(t.basicLists.politicsPunish);return{listTable:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("PoliticsPunishService",r),t.a="PoliticsPunishService"},759:function(e,t,n){"use strict";function r(e,t){var n=e(t.basicLists.pollutionMessage);return{listTable:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("PollutionMessageService",r),t.a="PollutionMessageService"},760:function(e,t,n){"use strict";function r(e,t){var n=e(t.basicLists.outputAir);return{getOutputAir:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("PollutionOutputAirService",r),t.a="PollutionOutputAirService"},761:function(e,t,n){"use strict";function r(e,t){var n=e(t.basicLists.outputWater);return{outputWaterTable:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("PollutionOutputWaterService",r),t.a="PollutionOutputWaterService"},762:function(e,t,n){"use strict";function r(e,t){var n=e(t.rank.city74day),r=e(t.rank.city74hour),a=e(t.rank.city74month),i=e(t.rank.city74year),o=e(t.rank.shenghui),s=e(t.rank.shenghuimonth),c=e(t.rank.fusheng),u=e(t.rank.fushengMonth),d=e(t.rank.city21),f=e(t.rank.city21Hour),l=e(t.rank.city21Month),p=e(t.rank.city21Year),v=e(t.rank.quxianHour),g=e(t.rank.quxianDay),m=e(t.rank.quxianMonth),h=e(t.rank.quxianJi),y=e(t.rank.quxianYear);return{getrank74Data:function(e,r,a){return n.get({token:t.token,page:"1",rows:"1000",datetime:e,startDateTime:r,endDateTime:a}).$promise.then(function(e){return e.success,e.data})},gethour74:function(e,n,a){return r.get({token:t.token,page:"1",rows:"1000",datetime:e,startDateTime:n,endDateTime:a}).$promise.then(function(e){return e.success,e.data})},getmonth74:function(e,n,r){return a.get({token:t.token,page:"1",rows:"1000",year:e,month:n,cityName:r}).$promise.then(function(e){return e.success,e.data})},getyear74:function(e){return i.get({token:t.token,page:"1",rows:"1000",year:e}).$promise.then(function(e){return e.success,e.data})},getshenghuiData:function(e){return o.get({token:t.token,page:"1",rows:"1000",day:e}).$promise.then(function(e){return e.success,e.data})},getshenghuimonth:function(e,n,r){return s.get({token:t.token,page:"1",rows:"1000",year:e,month:n,cityName:r}).$promise.then(function(e){return e.success,e.data})},getFuShengData:function(e){return c.get({token:t.token,page:"1",rows:"1000",day:e}).$promise.then(function(e){return e.success,e.data})},getfushengMonth:function(e,n,r){return u.get({token:t.token,page:"1",rows:"1000",year:e,month:n,cityName:r}).$promise.then(function(e){return e.success,e.data})},getCity21Data:function(e,n,r){return d.get({token:t.token,page:"1",rows:"1000",datetime:e,startDateTime:n,endDateTime:r}).$promise.then(function(e){return e.success,e.data})},getCity21Hour:function(e,n,r){return f.get({token:t.token,page:"1",rows:"1000",datetime:e,startDateTime:n,endDateTime:r}).$promise.then(function(e){return e.success,e.data})},getCity21Month:function(e,n){return l.get({token:t.token,page:"1",rows:"1000",year:e,month:n}).$promise.then(function(e){return e.success,e.data})},getCity21Year:function(e){return p.get({token:t.token,page:"1",rows:"1000",year:e}).$promise.then(function(e){return e.success,e.data})},getquxianHour:function(){return v.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){return e.success,e.data})},getquxianDay:function(e,n,r){return g.get({token:t.token,page:"1",rows:"1000",adCode:e,startDate:n,endDate:r}).$promise.then(function(e){return e.success,e.data})},getquxianMonth:function(e,n,r){return m.get({token:t.token,page:"1",rows:"1000",adCode:e,year:n,month:r}).$promise.then(function(e){return e.success,e.data})},getquxianJi:function(){return h.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){return e.success,e.data})},getquxianYear:function(){return y.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){return e.success,e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("rankService",r),t.a="rankService"},763:function(e,t,n){"use strict";function r(e,t){var n=e(t.airEnv.siteDust.tableData),r=e(t.airEnv.siteDust.addressStatistics),a=e(t.airEnv.siteDust.levelStatistics);return{getSiteDustList:function(){return n.get({token:t.token,page:"1",rows:"17"}).$promise.then(function(e){if(e.success)return e.data})},getAddressPicData:function(){return r.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){if(e.success)return e.data})},getLevelPicData:function(){return a.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("siteDustService",r),t.a="siteDustService"},764:function(e,t,n){"use strict";function r(e,t){var n=e(t.basicLists.testPollution);return{testMessageTable:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("TestMessagePollutionService",r),t.a="TestMessagePollutionService"},765:function(e,t,n){"use strict";function r(e,t){var n=e(t.basicLists.testMessage);return{testMessageTable:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("TestMessageService",r),t.a="TestMessageService"},766:function(e,t,n){"use strict";function r(e,t){var n=e(t.waterSpecial.tableList),r=e(t.waterSpecial.envStatistics);return{getList:function(e){return e.token=t.token,n.get(e).$promise.then(function(e){if(e.success)return e.data})},getPicData:function(){return r.get({token:t.token,page:"1",rows:"1000"}).$promise.then(function(e){if(e.success)return e.data})},getwaterLastHourDate:function(n){return e(t.mapLayer.pageWaterLastHourData).get({token:t.token,page:"1",rows:"1000",code:n}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("WaterSpecialService",r),t.a="WaterSpecialService"},767:function(e,t,n){"use strict";function r(e,t){var n=e(t.basicLists.worryPlan);return{worryPlanTable:function(e){return n.get({id:e,token:t.token}).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(62),i=n(736);r.$inject=["$resource",i.a],a.default.factory("WorryPlanService",r),t.a="WorryPlanService"},768:function(e,t,n){"use strict";function r(e,t){var n=e(t.airEnv.yearCompare.pollUrl),r=e(t.airEnv.yearCompare.daySumUrl),a=e(t.airEnv.yearCompare.centerSum);return{getPollDatas:function(e){var r=i()({},e,{token:t.token,page:1,rows:100});return n.get(r).$promise.then(function(e){if(e.success)return e.data})},getDayDatas:function(e){var n=i()({},e,{token:t.token,page:1,rows:100});return r.get(n).$promise.then(function(e){if(e.success)return e.data})},getCenterSum:function(e){var n=i()({},e,{token:t.token,page:1,rows:100});return a.get(n).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(360),i=n.n(a),o=n(62),s=n(736);r.$inject=["$resource",s.a],o.default.factory("YearCompareService",r),t.a="YearCompareService"},769:function(e,t,n){"use strict";function r(e,t){var n=e(t.airEnv.yearTarget.regions),r=e(t.airEnv.yearTarget.datas);return{getRegions:function(){return n.get({token:t.token,rows:100}).$promise.then(function(e){if(e.success)return e.data})},getDatas:function(e){var n=i()({},e,{token:t.token,page:1,rows:100});return r.get(n).$promise.then(function(e){if(e.success)return e.data})}}}var a=n(360),i=n.n(a),o=n(62),s=n(736);r.$inject=["$resource",s.a],o.default.factory("YearTargetService",r),t.a="YearTargetService"},782:function(e,t,n){"use strict";function r(){return document.querySelector("script[data-esri-loader]")}function a(){return void 0!==window.require&&r()}function i(e,t){if(void 0===t&&(t={}),t.url||(t.url="https://js.arcgis.com/4.4/"),r())return void e(new Error("The ArcGIS API for JavaScript is already loaded."));var n=document.createElement("script");n.type="text/javascript",n.src=t.url,n.dataset.esriLoader="loading",n.onload=function(){n.dataset.esriLoader="loaded";var t=window.require;e&&e(null,t)},document.body.appendChild(n)}function o(e,t){if(a())window.require(e,t);else{var n=r();if(!n)throw new Error("The ArcGIS API for JavaScript has not been loaded. You must first call esriLoader.bootstrap()");var i=function(){window.require(e,t),n.removeEventListener("load",i,!1)};n.addEventListener("load",i)}}t.a={isLoaded:a,bootstrap:i,dojoRequire:o}},802:function(e,t,n){"use strict";var r=n(125),a=n.n(r),i=n(126),o=n.n(i),s=n(62),c=n(809),u=n.n(c),d=n(808),f=(n.n(d),n(782)),l=function(){function e(t,n){a()(this,e),this.$scope=t}return o()(e,[{key:"$onInit",value:function(){var e=this;f.a.isLoaded()?e.createMap():f.a.bootstrap(function(t){t?console.error(t):e.createMap()},{url:"/arcgisapi/3.20/init.js"})}},{key:"createMap",value:function(){var e=this;f.a.dojoRequire(["esri/map","esri/layers/ArcGISTiledMapServiceLayer","LeadingSoft/SCTianDiTuTileLayer","esri/layers/ArcGISDynamicMapServiceLayer","esri/geometry/Point","esri/SpatialReference"],function(t,n,r,a,i,o){e.map=new t("map",{center:[104.06,30.66],minZoom:3,zoom:3,logo:!1});e.map.addLayer(new r("http://www.scgis.net.cn/imap/imapserver/defaultrest/services/newtianditudom",{id:"baseImgLayer"}));e.map.addLayer(new r("http://www.scgis.net.cn/iMap/iMapServer/DefaultRest/services/newtiandituDOM_SCANN",{id:"baseImgNoteLayer"}));var s=new r("http://www.scgis.net.cn/iMap/iMapServer/DefaultRest/services/newtianditudlg",{id:"baseStreetLayer"});e.map.addLayer(s),s.setVisibility(!1);var c=new a("/arcgis/rest/services/CXN/XZQH_ANXI_1016/MapServer",{id:"regionLayer"});e.map.addLayer(c),e.map.on("load",e.loaded({map:e.map})),e.map.on("zoom-end",function(e){e&&(e.level>5?c.setVisibility(!1):c.setVisibility(!0))})})}}]),e}();l.$inject=["$scope"],s.default.component("mapTemplate",{controller:l,template:u.a,bindings:{loaded:"&"}})},807:function(e,t,n){t=e.exports=n(703)(void 0),t.push([e.i,"@import url(/arcgisapi/3.20/esri/css/esri.css);",""]),t.push([e.i,".map {\n  border: none !important;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n.map svg {\n  border: none !important;\n}\n.esriPopup .esriPopupWrapper {\n  background-color: rgba(5, 12, 37, 0.87);\n}\n.esriPopup .esriPopupWrapper .sizer .titlePane,\n.esriPopup .esriPopupWrapper .sizer .contentPane,\n.esriPopup .esriPopupWrapper .sizer .actionsPane {\n  background-color: transparent;\n}\n.esriPopup .esriPopupWrapper .sizer .titlePane {\n  padding: 5px 0 5px 10px;\n  font-weight: bold;\n  border-bottom: 1px solid #fff;\n}\n.esriPopup .esriPopupWrapper .sizer .titlePane .maximize {\n  display: none;\n}\n.esriPopup .esriPopupWrapper .sizer .contentPane {\n  color: #fff;\n}\n.esriPopup .outerPointer,\n.esriPopup .pointer {\n  background-color: rgba(5, 12, 37, 0.87) !important;\n  box-shadow: none;\n}\n",""])},808:function(e,t,n){var r=n(807);"string"==typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(704)(r,a);r.locals&&(e.exports=r.locals)},809:function(e,t){e.exports='<div id="map" style="width: 100%; height: 100%;"></div>\r\n'},907:function(e,t,n){t=e.exports=n(703)(void 0),t.push([e.i,".company {\n  padding: 30px 20px;\n}\n.company .company-left {\n  width: 58%;\n  background-color: rgba(0, 0, 0, 0.16);\n  float: left;\n}\n.company .company-right {\n  width: 40%;\n  float: right;\n}\n.nav li {\n  float: left;\n}\n.nav > li > a {\n  color: #fff;\n  background-color: #1c275a;\n}\n.nav > li > a:focus,\n.nav > li > a:hover {\n  background-color: #414BCC;\n  color: #fff;\n}\n.dropdownMenu {\n  margin-right: 5px;\n  background-color: #1c275a;\n}\n.dropdownMenu li a {\n  color: #fff;\n}\n.topMenu {\n  overflow: hidden;\n  vertical-align: middle;\n  line-height: 35px;\n  height: 35px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n.topMenu .aLeft {\n  color: #1ff1f6;\n  font-size: 18px;\n  padding-left: 15px;\n  display: inline-block;\n}\n.right {\n  float: right;\n  background-color: #255394;\n  border-color: #255394;\n}\n.dropdownColor {\n  background-color: #1c275a;\n}\n.dropdownColor li a {\n  color: #fff;\n}\n.nav .open > a,\n.nav .open > a:focus,\n.nav .open > a:hover {\n  background-color: #414BCC;\n}\n",""])},937:function(e,t,n){var r=n(907);"string"==typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(704)(r,a);r.locals&&(e.exports=r.locals)},993:function(e,t){e.exports='<div class="company company-detail-list">\r\n  <div class="company-left">\r\n    <div class="topMenu">\r\n      <a class="aLeft" href="javascript:;">{{$ctrl.msg[0].F_enterpriseName}}</a>\r\n      <a type="button" class="btn right btn-primary" ui-sref="fullTemplate.basicList" href="javascript:;">返回</a>\r\n    </div>\r\n    <div>\r\n      <ul class="nav">\r\n        <li><a class="dropdownMenu" href="javascript:;" ui-sref=".basicMessage({id:$ctrl.id})">企业基本信息</a></li>\r\n        <li><a class="dropdownMenu" href="javascript:;" ui-sref=".pollutionMessage({id:$ctrl.id})">污染物信息</a></li>\r\n        <li><a class="dropdownMenu" href="javascript:;" ui-sref=".inputWater({id:$ctrl.id})">进水口信息</a></li>\r\n        <li><a class="dropdownMenu" href="javascript:;" ui-sref=".pollutionOutputWater({id:$ctrl.id})">废水排口信息</a></li>\r\n        <li><a class="dropdownMenu" href="javascript:;" ui-sref=".pollutionOutputAir({id:$ctrl.id})">废气排口信息</a></li>\r\n        <li><a class="dropdownMenu" href="javascript:;" ui-sref=".onLineTest({id:$ctrl.id})">在线监测仪</a></li>\r\n        <li><a class="dropdownMenu" href="javascript:;" ui-sref=".outPollutionProve({id:$ctrl.id})">排污许可证</a></li>\r\n        <li><a class="dropdownMenu" href="javascript:;" ui-sref=".eiaMessage({id:$ctrl.id})">环评信息</a></li>\r\n        <li><a class="dropdownMenu" href="javascript:;" ui-sref=".testMessage({id:$ctrl.id})">监测信息</a></li>\r\n       \x3c!-- <li uib-dropdown class="pull-right">\r\n          <a href="javascript:;" uib-dropdown-toggle>更多</a>\r\n          <ul uib-dropdown-menu class="dropdown-menu-right dropdownColor">\r\n            <li><a href="javascript:;" ui-sref=".dataCollect({id:$ctrl.id})">数据采集仪</a></li>\r\n            <li><a href="javascript:;" ui-sref=".outPollutionProve({id:$ctrl.id})">排污许可证</a></li>\r\n            <li><a href="javascript:;" ui-sref=".eiaMessage({id:$ctrl.id})">环评信息</a></li>\r\n            <li><a href="javascript:;" ui-sref=".testMessage({id:$ctrl.id})">监测信息</a></li>\r\n            <li><a href="javascript:;" ui-sref=".testMessagePollution({id:$ctrl.id})">监测信息污染物</a></li>\r\n            <li><a href="javascript:;" ui-sref=".worryPlan({id:$ctrl.id})">应急预案</a></li>\r\n            <li><a href="javascript:;" ui-sref=".checkWork({id:$ctrl.id})">双随机抽查工作</a></li>\r\n            <li><a href="javascript:;" ui-sref=".politicsPunish({id:$ctrl.id})">行政处罚</a></li>\r\n          </ul>\r\n        </li>--\x3e\r\n      </ul>\r\n    </div>\r\n    <div>\r\n      <div ui-view/>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class="company-right">\r\n  <div style="height: 500px;width: 100%">\r\n    <map-template loaded="$ctrl.loaded(map)"></map-template>\r\n  </div>\r\n  <div style="">\r\n    <div style="float: left; height: 300px;width: 48%;margin-top: 15px;" id="echartsPie1">\r\n    </div>\r\n    <div style="float: right; height: 300px;width: 48%;margin-top: 15px;" id="echartsPie2">\r\n    </div>\r\n  </div>\r\n</div>\r\n'}});