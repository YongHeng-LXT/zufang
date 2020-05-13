import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'selcet',
      component: resolve => require(['@/components/home/selcet'], resolve)  //选择区域
    },
    {
      path: '/matching',
      name: 'matching',
      component: resolve => require(['@/components/home/matching'], resolve)  //为您匹配
    },
    {
      path: '/my',
      name: 'my',
      component: resolve => require(['@/components/my/my'], resolve)  //我的
    },
    {
      path: '/zixun',
      name: 'zixun',
      component: resolve => require(['@/components/my/zixun'], resolve)  //咨询记录
    },
    {
      path: '/jubao',
      name: 'jubao',
      component: resolve => require(['@/components/my/jubao'], resolve)  //举报
    },
    {
      path: '/Accountsettings',
      name: 'Accountsettings',
      component: resolve => require(['@/components/my/Accountsettings'], resolve)  //举报
    }
  ]
})
