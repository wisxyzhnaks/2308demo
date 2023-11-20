
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vant from 'vant';
import { Col, Row, Tab, Tabs} from 'vant';
//import '../permission.js'
import 'vant/lib/index.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Vant);
app.use(Col);
app.use(Row);
app.use(Tab);
app.use(Tabs);
app.use(createPinia());
app.use(router);

app.mount('#app')
router.beforeEach((to, from, next)=>{
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const type = to.meta.type
  // 判断该路由是否需要登录权限
  if (type === 'login') {
    if (JSON.parse(window.localStorage.getItem('token'))) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()  // 确保一定要有next()被调用
  }
})