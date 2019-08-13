<template>
    <div class="newsinfo-container">
        <!-- 头部区域 -->
        <h3 class="title">新闻详情</h3>
        <p class="subtitle">
            <span>发表时间：2012-12-12 00:00:00</span>
            <span>点击：0次</span>
        </p>

        <hr>

        <!-- 内容区域 -->
        <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum id velit repellendus illum, accusamus quisquam assumenda expedita sint, eum eaque natus reiciendis molestias explicabo nesciunt porro dicta neque suscipit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias fuga delectus adipisci dolores quidem, dignissimos officiis. Numquam, in. Libero veritatis quibusdam odit voluptate labore eligendi minus accusantium quod ratione!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, vel dolorum exercitationem dolores officiis, assumenda corporis voluptate labore eos sed fugiat harum quod. A autem atque facere impedit blanditiis nostrum!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo alias doloremque blanditiis, voluptas quaerat veritatis eligendi ut. Earum sequi ipsum, nulla, aperiam doloremque sunt illum aut sint illo soluta odio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ea, dolores architecto necessitatibus provident porro, ipsam voluptatibus perferendis ducimus qui voluptatum illo doloremque aspernatur sit dolorem ad facere error veritatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in cumque laboriosam quae labore enim veniam ducimus iusto, reprehenderit perferendis deserunt dicta ut! Iste sit, magnam aliquam repellat ipsa porro?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit culpa cum a quis eum optio quos aliquam nesciunt ratione ea sunt, corporis delectus vitae tenetur rerum? Molestias animi iure non?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias perspiciatis dolore dolores eum laboriosam nesciunt corporis, id labore libero qui esse quas eius omnis consequatur magni debitis inventore laudantium?
        </div>
    
        <!-- 评论子组件区域 -->
        <comment-box></comment-box>
    </div>
</template>

<script>
// 导入评论子组件
import comment from '../subcomponents/comment.vue';

export default {
    data(){
        return {
            // id:this.$route.params.id
            newsinfo:{//新闻的对象

            }
        }
    },
    created(){
        // this.getNewsInfo()
    },
    methods: {
        // getNewsInfo(){
        //     this.$http.get('/api/getnew/'+this.id).then(result=>{
        //         if(result.body.status === 0){
        //             this.newsinfo = result.body.message[0]
        //         }else{
        //             Toast("获取新闻失败！")
        //         }
        //     })
        // }
    },
    components:{//用来注册子组件的
        'comment-box':comment
    }
}
</script>   

<style lang="scss">
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            color: red;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img {
                width: 100%;//文章中图片，其实无作用，去掉scoped即可
            }
            padding: 0 5px;
        }
    }
</style>