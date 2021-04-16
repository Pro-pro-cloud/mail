import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home'
import Cart from '../views/cart/Cart'
import Cartgery from '../views/categery/categery'
import Profile from '../views/profile/Profile'

Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/cart', component: Cart },
  { path: '/categery', component: Cartgery },
  { path: '/profile', component: Profile }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
