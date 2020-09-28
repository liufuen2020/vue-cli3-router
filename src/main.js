import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs' //axios 自带工具，不需要安装；解决formdata格式传值；
import "./assets/style/common.less"
import { Button, Select, Input, Message} from 'element-ui'
Vue.config.productionTip = false
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Message.name, Message)
Vue.prototype.$message = Message;
Vue.prototype.$axios = axios

//axios.defaults.baseURL = '/api' //解决跨域问题
//路由钩子 判断是否登录
router.beforeEach((to, from, next) => {
	let isLogin = JSON.parse(localStorage.getItem("users")) && JSON.parse(localStorage.getItem("users")).['userName'];
	if(to.matched.some(res=>res.meta.isLogin)){//判断是否需要登录
        if (isLogin) {
            next();
        }else{
            next({
                path:"/login",
                query:{
                    redirect:to.fullPath
                }
            });
        }

     }else{
        next()
    }
})
new Vue({
  render: h => h(App),
  router, //挂载路由组件
  store,//挂载vuex
}).$mount('#app')


