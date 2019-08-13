# 这是一个Vue的项目

## 需要用心去感受，每一行代码中的诗情雅逸

### 我们是有灵魂的程序员，所以，我们的代码富有诗意   

## 这是我新增的代码


## 制作首页App组件
1、完成Header区域，使用的是Mint-UI中的Header组件
2、制作底部的Tabbar区域，使用的是MUI的Tabbar.html
    + 在制作 购物车 小图标的时候，操作会多一些
    + 先把 扩展图标的css样式，拷贝到项目中
    + 拷贝 扩展字体库 ttf文件 到项目中
    + 为购物车小图标添加样式如下 mui-icon mui-icon-extra mui-icon-extra-cart
3、要在中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据(未完成)
1、获取数据，如何获取呢，使用vue-resource，需要npm i vue-resource -D
2、使用 vue-resource的this.$http.get获取数据
3、获取到的数据，保存到data身上
4、使用v-for循环渲染每个item项

## 改造 六宫格 区域的样式

## 改造 新闻资讯 路由链接

## 新闻资讯 页面制作(未完成)
1、绘制界面，使用MUI中的media-list.html
2、使用 vue-resource 获取数据
3、渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
1、把列表中的每一项改造为 router-link，同时，在跳转的时候应该提供唯一的id标识符
2、创建新闻详情的组件页面 NewsInfo.vue
3、在 路由模块中，将新闻详情的 路由地址 和 组件页面对应起来


## 实现 新闻详情 的页面布局 和 数据渲染(没有数据)

## 单独封装一个 comment.vue 评论子组件
1、先创建一个单独的comment.vue组件模板
2、需要使用comment组件的页面中，手动导入 import comment from './comment.vue'
3、在父组件中，使用components属性，将刚才导入comment组件注册为自己的子组件
4、将注册子组件时候的注册名称，以标签形式引用即可

## 获取所有的评论数据显示到页面中(无数据)

## 实现点击加载更多评论的功能
1、为加载更多按钮绑定点击事件，请求下一页数据
2、点击按钮，让pageIndex++，然后重新调用getcomments方法
3、为了防止新数据覆盖老数据的情况，用拼接的方式添加comments