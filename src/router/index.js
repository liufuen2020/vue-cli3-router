import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import ('@/pages/index'),
      meta:{
        isLogin:true    // 添加该字段，表示进入这个路由是需要登录的
      }//路由
    },
    {
      path: '/login',
      name: 'login',
      component: () => import ('@/pages/login')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import ('@/pages/list'),
      meta:{
        isLogin:true    // 添加该字段，表示进入这个路由是需要登录的
      }//路由
    }
  ]
})
