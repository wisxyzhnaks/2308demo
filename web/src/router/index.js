import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
	  meta:{
	  	title:"home",
		type:''
	  }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
	  meta:{
	  	title:"cart",
		type:'login'
	  }
    },
    {
      path: '/collect',
      name: 'collect',
      component: () => import('../views/CollectView.vue'),
	  meta:{
	  	title:"collect",
		type:''
	  }
    },
    {
      path: '/sort',
      name: 'sort',
      component: () => import('../views/SortView.vue'),
	  meta:{
	  	title:"sort",
		type:''
	  }
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue'),
	  meta:{
	  	title:"shop",
		type:''
	  }
    },
	{
		path:'/produce',
		name:'produce',
		component:() => import('../views/ProductDetails.vue'),
		meta:{
			title:"produce",
			type:''
		}
	},
	{
		path:'/login',
		name:'login',
		component:() => import('../views/login.vue'),
		meta:{
			title:"login",
			type:''
		}
	}
  ]
})


export default router
