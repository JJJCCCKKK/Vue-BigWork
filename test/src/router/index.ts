import { createRouter, createWebHashHistory,RouteRecordRaw } from 'vue-router'
//使用RouteRecordRaw能更好地记录route的数据结构，而必须使用ts才能采用它

const Home=()=>import('../views/home/Home.vue')

const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home,
    meta:{
      //meta可以用来存储任何数据，这里用于存放标题
      title:"图书兄弟"
    }
  },
  {
    path: '/home',
    name: 'Home',
    component:Home,
    meta:{
      //meta可以用来存储任何数据，这里用于存放标题
      title:"图书兄弟"
    }
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
