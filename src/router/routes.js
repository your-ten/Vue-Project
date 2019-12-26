// import MSite from '@/pages/MSite/MSite'
// import Search from '@/pages/Search/Search'
// import Order from '@/pages/Order/Order'
// import Profile from '@/pages/Profile/Profile'

const MSite = () => import('@/pages/MSite/MSite') 
const Search = () => import('@/pages/Search/Search') 
const Order = () => import('@/pages/Order/Order') 
const Profile = () => import('@/pages/Profile/Profile') 

import Login from '@/pages/Login/Login'
import Shop from '@/pages/Shop/Shop'
import Goods from '@/pages/Shop/Goods'
import Ratings from '@/pages/Shop/Ratings'
import Info from '@/pages/Shop/Info'
export default [
  {
    path:'/login',
    component:Login
  },
  {
    path:'/msite',
    component:() => import('@/pages/MSite/MSite'),
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/Search',
    component:Search,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/Order',
    component:Order,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/Profile',
    component:Profile,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/shop/:id',
    props:true,
    component:Shop,
    children:[
      {
        path:'goods',
        component:Goods
      },
      {
        path:'ratings',
        component:Ratings
      },
      {
        path:'info',
        component:Info
      },
      {
        path:'',
        redirect:'goods'
      }
    ]
  },
  {
    path:'/',
    redirect:'/msite'
  }
]