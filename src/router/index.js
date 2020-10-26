import Vue from 'vue'
import VueRouter from 'vue-router'
import TasksList from '../components/TasksList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'My Tasks',
    component: TasksList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
