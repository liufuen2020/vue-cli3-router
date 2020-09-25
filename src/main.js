import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Select, Input} from 'element-ui';
Vue.config.productionTip = false
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
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


