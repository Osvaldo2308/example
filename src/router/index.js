import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/Sinntec',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home"*/ '../views/HomeView.vue'),
  },
  {
    path: '/desarrollo-de-software',
    name: 'desarrollo-de-software',
    component: () => import(/* webpackChunkName: "desarrollo-de-software" */  '../views/pages/desarrollo-de-software.vue')
  },
  {
    path: '/desarrollo-de-apps',
    name: 'desarrollo-de-apps',
    component: () => import(/* webpackChunkName: "desarrollo-de-aplicaciones" */  '../views/pages/desarrollo-de-apps.vue')
  },
  {
    path: '/blog-sinntec',
    name: 'blog-sinntec',
    component: () => import(/* webpackChunkName: "blog-sinntec" */  '../views/pages/blog-sinntec.vue')
  },
  {
    path: '/servidores-virtuales',
    name: 'servidores-virtuales',
    component: () => import(/* webpackChunkName: "servidores-virtuales" */  '../views/pages/servidores-virtuales.vue')
  },
  {
    path: '/no-page-found',
    name: 'no-page-found',
    component: ()=> import(/* webpackChunkName; "No-page-Found"*/ '../views/pages/no-page-found.vue')
  },
  {
    path:'/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "Home"*/ '../views/HomeView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // Metodo para posicionarse en el inicio al cambiar de pagina
  scrollBehavior(to, from, savedPosition){
    return savedPosition || new Promise((resolve)=>{
      setTimeout(()=>resolve({top: 0}), 300)
    })
  }
  
})

export default router
