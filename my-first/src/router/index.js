import Vue from 'vue'
import Router from 'vue-router'
import total from '@/components/total'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path:'/',
      name:'total',
      component:total
    }
  ]
})
