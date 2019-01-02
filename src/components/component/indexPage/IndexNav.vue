<template>
    <div class="index-nav">
        <ul class="navbar">
            <li :class="item.routeName === nowRouteName? 'navbar-item navbar-item-active': 'navbar-item'" v-for="(item) in navList" :key="item.id" @click="goRouterFn(item.path, item.routeName)">
                <img :src="item.routeName === nowRouteName? item.iconActive: item.icon" alt="">
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        name: 'IndexNav',
        data () {
            return {
                nowRouteName: 'IndexPage', // 当前路由的名字
                navList: [
                    {
                        name: '首页',
                        icon: '../../../static/images/indexNav/home.png',
                        iconActive: '../../../static/images/indexNav/home-active.png',
                        id: 0,
                        path: '/',
                        routeName: 'IndexPage',

                    },
                    {
                        name: '我要卖',
                        icon: '../../../static/images/indexNav/sale.png',
                        iconActive: '../../../static/images/indexNav/sale-active.png',
                        id: 1,
                        path: '/wantsale',
                        routeName: 'WantSale',
                    },
                    {
                        name: '聊一聊',
                        icon: '../../../static/images/indexNav/talk.png',
                        iconActive: '../../../static/images/indexNav/talk-active.png',
                        id: 2,
                        path: '/chat',
                        routeName: 'Chat',
                    },
                    {
                        name: '我的',
                        icon: '../../../static/images/indexNav/user.png',
                        iconActive: '../../../static/images/indexNav/user-active.png',
                        id: 3,
                        path: '/mine',
                        routeName: 'Mine',
                    }
                ]
            }
        },
        methods: {
            goRouterFn (path, name) {
                this.nowRouteName = name;
                this.$router.push({path});
            }
        },
        mounted () {
            this.nowRouteName = this.$route.name;
        },
    }
</script>

<style scoped lang="scss">
    .navbar{
        width: 100%;
        height: 0.5rem;
        display: flex;
        border-top: 0.01rem solid #dddddd;
        background: #ffffff;
        .navbar-item{
            width: 25%;
            height: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            img{
                width: 0.22rem;
                height: 0.22rem;
                display: block;
            }
            span{
                font-size: 0.14rem;
            }
        }
        .navbar-item-active{
            span{
                color: #ff4545;
            }
        }
    }
</style>