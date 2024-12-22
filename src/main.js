import { createApp } from 'vue'
// import './style.css'
// import App from './11-动态组件/App.vue'
// import App from './vca-watch案例/App.vue'
// import App from './vca-watch案例/App.vue'
// import App from './vue-router/App.vue'
import App from './5-vant/App.vue'
import router from './5-vant/router'
import { createPinia } from 'pinia'
//  引入组件样式
import 'vant/lib/index.css';

//导入配置文件
import './5-vant/util/config'

var app = createApp(App)
app.use(router) //注册路由插件
app.use(createPinia()) //注册pinia插件
app.mount('#app')
