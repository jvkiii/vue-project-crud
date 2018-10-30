import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
const Add = () => import(/* webpackChunkName: "add" */ './views/Add');
const Edit = () => import(/* webpackChunkName: "edit" */ './views/Edit');

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/', name:'home', component: Home },
    { path:'/add', name:'add', component:Add },
    { path:'/edit', redirect:'/' },
    { path:'/edit/:slug', name:'edit', component:Edit, props:true },
  ]
})
