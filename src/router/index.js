import Vue from 'vue'
import VueRouter from 'vue-router'

const Bookrack=()=>import('../views/bookrack/BookRack')
const Choiceness = ()=>import('../views/choiceness/Choiceness')
const Profile = ()=>import('../views/profile/Profile')
const Stack = ()=>import('../views/stack/Stack')

Vue.use(VueRouter)

const routes=[
  {
    path:'',
    redirect: '/bookrack'
  },
  {
    path: '/bookrack',
    component:Bookrack
  }
  ,
  {
    path: '/choiceness',
    component:Choiceness
  }
  ,
  {
    path: '/profile',
    component:Profile
  }
  ,
  {
    path: '/stack',
    component:Stack
  }
]

const router=new VueRouter({
  routes,
  mode:'history'
})

export default router
