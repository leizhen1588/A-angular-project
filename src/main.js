/**
 * 应用入口，以及应用的配置都在这里完成
 */
import app from './app'
import route from './router'
import './components/app-component'

app.config(route)

// 百度地图配置
app.config(['mapScriptServiceProvider', function (provider) {
  provider.setKey('35095df28fb486f20e4302c531d0a146')
}])
