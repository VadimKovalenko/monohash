import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import VueQriously from 'vue-qriously'

Vue.use(Router)
Vue.use(VueQriously)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      mode: 'history',
      history: true
    }
  ]
})
