import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'selcet',
      component: resolve => require(['@/components/home/selcet'], resolve)  //选择区域
    }
  ]
})
