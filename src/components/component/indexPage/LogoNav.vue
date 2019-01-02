<template>
    <div class="logo-nav">
        <div class="logo-con">
            <dl class="logo-nav-item" v-for="(item, index) in logoNavOptions" :key="index" @click="logoNavFn(item.url)">
                <dt class="logo-nav-item-img">
                    <img :src="item.src" alt="">
                </dt>
                <dd class="logo-nav-item-text">
                    <p>{{item.text}}</p>
                </dd>
            </dl>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'LogoNav',
        props: {
            logoNavOptions: {
                type: Array,
                default: []
            }
        },
        data () {
            return {
                
            }
        },
        methods: {
            logoNavFn: function (path) {
                this.$router.push({path});
            }
        },
        mounted () {
            console.log(this);
        },
    }
</script>

<style scoped lang="scss">
    .logo-nav{
        padding: 0 0.1rem;
        position: relative;
        top: -0.1rem;
        left: 0;
        z-index: 9;
        .logo-con{
            width: 100%;
            height: 1.2rem;
            display: flex;
            border: 0.01rem solid #dddddd;
            border-radius: 0.08rem;
            background: #ffffff;
            .logo-nav-item{
                width: 25%;
                height: 1.2rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .logo-nav-item-img{
                    border-radius: 50%;
                    overflow: hidden;
                    img{
                        display: block;
                    }
                }
                .logo-nav-item-text{
                    width: 100%;
                    padding-top: 0.1rem;
                    p{
                        line-height: 2;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>