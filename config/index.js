module.exports = {
  dev: {
    port: 81, // 监听端口
    localData: false, // 是否启用本地测试数据,
    publicPath: '/', // 项目发布路径，请给出一个绝对的并且以/结尾
    proxyTable: {// 反向代列表,实际的代理路径为publicPath+key值
      'data/service': {
        target: 'http://lx.cdepb.gov.cn:20001/ds/s/dcds/service',
        pathRewrite: {'^/data/service': ''}
      },
      'arcgis/rest': {
        target: 'http://lx.cdepb.gov.cn:20012/arcgis/rest',
        pathRewrite: {'^/arcgis/rest': ''}
      }
    },
    staticTable: {
      'arcgisapi': 'D:/map'
    }
  },
  prod: {
    publicPath: '/'
  }
}
