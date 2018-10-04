import Vue from 'vue'
import Router from 'vue-router'
import TranslatePage from '@/components/TranslatePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TranslatePage',
      component: TranslatePage
    }
  ]
})
