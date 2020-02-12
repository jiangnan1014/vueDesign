import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/music',
    name: 'music',
    component:()=>import('../views/Music/Music.vue')
  },
  {
    path:'/movie',
    name:'movie',
    component:()=>import('../views/Movie/Movie.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Movie/Movie.vue')
  },
  {
    path:'/read',
    name:'read',
    component:()=>import('../views/Read/Read.vue')
  },
  {
    path:'/my',
    name:'my',
    component:()=>import('../views/My/My.vue')
  },
  {
    path:'/musicmore',
    name:'musicmore',
    component:()=>import('../views/Music/MusicMore.vue')
  },
  {
    path:'/musicdetail/:id',
    name:'musicdetail',
    component:()=>import('../views/Music/MusicDetail.vue')
  },
  {
    path:'/musicplay',
    name:'musicplay',
    component:()=>import('../views/Music/MusicPlay.vue'),
    props:true
  },
  {
    path:'/moviedetail/:id',
    name:'moviedetail',
    component:()=>import('../views/Movie/MovieDetail.vue')
  },{
    path:'/moviemore',
    name:'moviemore',
    component:()=>import('../views/Movie/MovieMore.vue')
  },
  {
    path:'/',
    redirect:"/music"
  },
  {
    path:'/ReadDetail',
    name:'ReadDetail',
    component:()=>import('../views/Read/ReadDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
