import VueRouter from 'vue-router'
// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcart',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newslist',component:NewsList},
    {path:'/home/newslist/11',component:NewsInfo}
  ],
  linkActiveClass:' mui-active'//覆盖默认的高亮类 router-link-active
})

// 把路由对象暴露出去
export default router