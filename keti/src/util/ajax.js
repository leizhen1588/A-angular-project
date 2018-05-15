import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';

// axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置请求头
axios.defaults.headers.post['dataType']= "json";
axios.defaults.baseURL = '/../../';   //配置接口地址
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
	//在发送请求之前做某件事
	if(config.method==='get'){
	     // config.params.operator='admin';
	}else if(!config.method||config.method=='post'){
		// config.data.operator='admin';
	}
    if(config.method  === 'post'){
      if (!config.data.needJson) {
        config.data = qs.stringify(config.data);
      }else{
        delete config.data.needJson;
      }
    }
    return config;
},(error) =>{
    Message({
        message: '错误的传参',
        type: 'warning'
    })
    return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
	//对响应数据做些事
  if(res.data.permission_code==444){/*跳转登录页面*/
    Message({
      message: '请重新登录',
      type: 'warning'
    })
    //setTimeout(function () {
    //  window.location.href = 'http://15.65.70.220:8081/sz/login.html'
    //},1000)
  }else if(res.data.permission_code==403){/*跳转无权限页面*/
    //Message({
    //  message: '没有操作权限，请联系管理员',
    //  type: 'warning'
    //})
    setTimeout(function () {
      window.location.href = 'email.html#/403'
    },1000)
  }else{
    if(res.data.code!=200){
      if(res.data.code==500){/*获取数据失败*/
        Message({
          message: res.data.messages,
          type: 'warning'
        })
      }else{
        Message({
          message: res.data.messages,
          type: 'warning'
        })
      }
      return Promise.reject(res);
    }
  }
  return res;
}, (error) => {
	Message({
			message: '网络异常',
      		type: 'warning'
		})
    return Promise.reject(error);
});
//返回一个Promise()
export default function ajax(ajaxObj) {
    return new Promise((resolve, reject) => {
      let data=[],params='';
      if(!ajaxObj.type||ajaxObj.type=='post'){
        data=ajaxObj.params;
      }else if(ajaxObj.type=='get'){
        params=ajaxObj.params;
      }
    	axios({
    		method:ajaxObj.type?ajaxObj.type:'post',
    		url:ajaxObj.url,
    		data:data,
    		params:params
    	})
    	.then(response => {
            ajaxObj.success(response.data);
        })
        .catch((error) => {
           reject(error)
        });
    })
}


// 该模块为了统一管理我们的ajax请求，我在util/ajax.js改模块对axios做了统一配置，包括请求失败操作，请求返回500提示，
// 登录超时操作等，也可统一配置每个接口都需要传的参数如用户名operator（已经配置好）该配置默认为post请求，
// 如需get请求请在参数type里面设置，使用方法使用为传入一个对象如
// this.$http({
//   url:'qbanalysis/email/getEmailEventList.do',/*请求接口*/
//   type:'get',/*请求方式*/
//   params:{/*请求参数*/
//     emailId:'AV4sog5RhbLXbfQPto2u',
//   },
//   success:function(data){

//   }
// })
