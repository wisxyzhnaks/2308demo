import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        index: '1',
        names: '',
        others: ''
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue'),
      meta: {
        index: '1-1',
        names: '用户信息管理',
        others: ''
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue'),
      meta: {
        index: '1-2',
        names: '店铺信息管理',
        others: ''
      }
    },
    {
      path: '/useraudit',
      name: 'useraudit',
      component: () => import('../views/UserAuditView.vue'),
      meta: {
        index: '2-1',
        names: '用户信息审核',
        others: ''
      }
    },
    {
      path: '/storeaudit',
      name: 'storeaudit',
      component: () => import('../views/StoreAuditView.vue'),
      meta: {
        index: '2-2-1',
        names: '店铺信息',
        others: '店铺信息审核'
      }
    },
    {
      path: '/goodaudit',
      name: 'goodaudit',
      component: () => import('../views/GoodAuditView.vue'),
      meta: {
        index: '2-2-2',
        names: '店铺信息',
        others: '商品信息审核'
      }
    },
    {
      path: '/good',
      name: 'good',
      component: () => import('../views/store/GoodView.vue'),
      meta: {
        index: '3-1',
        names: '商品管理',
        others: ''
      }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/store/OrderView.vue'),
      meta: {
        index: '3-2',
        names: '订单管理',
        others: ''
      }
    },
    {
      path: '/set',
      name: 'set',
      component: () => import('../views/store/SetView.vue'),
      meta: {
        index: '3-3',
        names: '商铺设置',
        others: ''
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next();
  } else {
    let token = window.localStorage.getItem('token');

    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
})

export default router