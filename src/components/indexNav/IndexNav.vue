<template>
    <div class="index-nav">
        <ul class="navbar">
            <li :class="index == navIndex? 'navbar-item navbar-item-active': 'navbar-item'" v-for="(item, index) in navList" :key="item.id" @click="goRouterFn(item.path, index)">{{item.name}}</li>
        </ul>
    </div>
</template>


<script>
    export default {
        name: 'IndexNav',
        data () {
            return {
                navIndex: 0,
                navList: [
                    {
                        name: '首页',
                        icon: '',
                        id: 0,
                        path: '/'
                    },
                    {
                        name: '我要卖',
                        icon: '',
                        id: 1,
                        path: '/wantsale'
                    },
                    {
                        name: '聊一聊',
                        icon: '',
                        id: 2,
                        path: '/chat'
                    },
                    {
                        name: '我的',
                        icon: '',
                        id: 3,
                        path: '/mine'
                    }
                ]
            }
        },
        methods: {
            goRouterFn (path, index) {
                this.navIndex = index;
                this.$router.push({path});
            }
        }
    }
</script>

<style scoped lang="scss">
    .navbar{
        width: 100%;
        height: 0.5rem;
        display: flex;
        .navbar-item{
            width: 25%;
            height: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .navbar-item-active{
            color: #ff4545;
        }
    }
</style>