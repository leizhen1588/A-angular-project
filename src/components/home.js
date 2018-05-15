/**
 * es6的典型特点就是要用到什么，一定要有来路。
 * import 就是导入我们用到的东西，类似于java的import
 * 导入的是什么东西，在代码里面就当什么用。
 * 比如app是一个对象，我们这里就是一个对象
 * template是导入的一个html 我们当字符串用
 * HelloWorldService是一个字符串，我们当一个字符串用
 */
import app from '../app'
import template from './home.html'

// 这里导入，直接指向的是一个文件夹，编译的时候，会自动扫描文件夹下面的index.js
// 这里用画括号括起来，表示只导入里面的一部分，可以参考模块系统的文档
import { HelloWordService } from '../services'
// 如果我们在一个component里面用到了另外的component，需要先导入进来，导入进来的是js,不是html
// 如果我们不用里面的export的东西，就不用 xx from的语法,import会执行里面的代码
import './index/p1'

/**
 * 首页，我们要定义一个组件，
 * 一个组件由controller控制器和相应的template模板
 * 我们在js文件中定义的是控制器，
 * 控制器用class声明，class和function的区别可以去百度。
 */
class HomeController {
  /**
   *static是类变量，这里是指明我们在构造一个controller实例的时候，需要注入的外部依赖，
   * 注意，这个HelloWordService是一个字符串
   * @type {[string,string,null]}
   */
  static $inject = ['$q', '$resource', HelloWordService]

  // 这个就是es6中class声明实例变量的方法，和上面的差别就是static.和java一样一样的，js默认是private的
  HelloWordService = ''

  /**
   * 这个是类的构造器，写过java代码的都明白构造器是个什么东西
   * @param $q
   * 注入进来的外部服务之一
   * @param $resource
   * @param HelloWordService
   * 这里的不是字符串了，有区别
   */
  constructor ($q, $resource, HelloWordService) {
    // this指的是这个类的实例，但在js中要注意this的指代
    this.$q = $q
    // 这个是不是和java的有参构造器一模一样?唯一的区别就是js是动态语言，实例变量不需要事先声明
    this.HellowordService = HelloWordService
  }

  /**
   * 这个是定义一个类的方法
   * $onInit是一个特殊的方法，叫生命周期函数，具体的 可以参考相关文档
   *
   * $onInit知道是在组件初始化的时候执行相关动作
   * https://docs.angularjs.org/guide/component
   */
  $onInit () {
    /**
     * 第四步，我们需要在合适的地方加载数据，通常在$onInit里面
     * @type {HomeController}
     */
    let $ctrl = this // 这里把this取出来的原因是，下面的回调方法可也能导致this指代混乱
    /**
     * 我们获取数据通常走service。和spring 里面的service一个概念。
     * helloWordService是注入进来的，但它只会注入到constructor里面，所以我们在constructor里面做了处理
     */
    this.HellowordService.getInfo().then(rsp => {
      // 如果service里面做了response判断，这里就直接用数据就行了
      $ctrl.msg = rsp
    }).catch(e => {
      // 这里进行失败或者出错的处理
    })
  }

  /**
   * 这是另外一个生命周期函数
   *
   * $postLink,是在dom元素加载完成之后执行相关的 操作，通常情况下，我们在需要对dom元素进行操作的代码都写在这个方法里面
   */
  $postLink () {

  }
}

/**
 * 第二步，向angular app注册这个组件，包括两个参数，组件的名称和组件的定义
 * 组件的名称可以在html页面里面通过html标签的形式使用
 * 比如我在页面里面可以直接写 <home></home>
 */
app.component('home', { // 这个对象可以理解为组件的元对象，就是组件的相关定义
  // 指定控制器是什么
  controller: HomeController,
  // 这里是es6的简单写法，指明这个组件的模板是什么，事实上就是一堆html
  template,
  // 当组件需要接受外部绑定的东西进来的时候需要 这个属性，你们短时间用不上
  bindings: {
    Binding: '='
  }
})

export default app
