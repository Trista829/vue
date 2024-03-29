// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)


// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// // 2.2 安装 vue-resource 
Vue.use(VueResource)
Vue.http.options.root = 'http://vue.studyit.io'


// // 导入格式化时间的插件
// import moment from 'moment'
// // 定义全局的过滤器
// Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
//     moment(dataStr).format(pattern)
// })

// 按需导入Mint-ui中的组件
import { Header,Swipe, SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

// 导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 1.3 导入自己的router.js路由模块
import router from './router.js'

// 导入App根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router
})