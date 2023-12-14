import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/category.vue'
 
 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
