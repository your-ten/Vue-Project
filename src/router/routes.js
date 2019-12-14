import MSite from '@/pages/MSite/MSite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Login from '@/pages/Login/Login'
export default [
  {
    path:'/login',
    component:Login
  },
  {
    path:'/msite',
    component:MSite,
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
    path:'/',
    redirect:'/msite'
  }
]