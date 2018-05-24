import Vue from 'vue'
import Router from 'vue-router'
import singleSelect from '@/components/single-select'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'singleSelect',
      component: singleSelect
    }
  ]
})
