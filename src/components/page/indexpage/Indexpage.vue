<template>
    <div class="indexPage">
        <!-- <h1>首页...</h1>
        <button @click="btnFn()">按钮</button> -->
        <tanceng v-if="tanFlag" title="vue很优秀" direction="请您选择" :btns="btns" />
        <swiper class="swiper-box" :options="swiperOption">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
                <img class="slide-img" :src="slide.src" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <logo-nav :logoNavOptions="logoNavOptions" />
    </div>
</template>


<script>
    // 引入swiper包
    import 'swiper/dist/css/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    // 弹层的组件
    import Tanceng from '@/components/component/tan/Tanceng';
    // banner图下的导航
    import LogoNav from '@/components/component/indexpage/LogoNav';

    export default {
        name: 'IndexPage',
        components: {
            Tanceng, // 弹层的组件
            swiper,
            swiperSlide, // 轮播图的组件
            LogoNav, // banner图下的导航
        },
        data () {
            return {
                btns: [
                    {name: 'ok!!!', type: 1},
                    {name: 'cancel', type: 0}
                ],
                tanFlag: false, // 弹层的参数
                swiperOption: {
                    loop: true,
                    autoplay:true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                swiperSlides: [
                    {
                        name: 'lbt1',
                        id: 0,
                        src: 'http://www.placehold.it/375x188/09f.png'
                    },
                    {
                        name: 'lbt2',
                        id: 1,
                        src: 'http://www.placehold.it/375x188/9f0.png'
                    },
                    {
                        name: 'lbt3',
                        id: 2,
                        src: 'http://www.placehold.it/375x188/f90.png'
                    }
                ], //轮播图的参数
                logoNavOptions: [
                    {
                        name: 'logo1',
                        id: 0,
                        src: 'http://www.placehold.it/60x60/09f.png',
                        url: '/wantsale/findgoods',
                        text: '找好货'
                    },
                    {
                        name: 'logo2',
                        id: 1,
                        src: 'http://www.placehold.it/60x60/09f.png',
                        url: '',
                        text: '找代办'
                    },
                    {
                        name: 'logo3',
                        id: 2,
                        src: 'http://www.placehold.it/60x60/09f.png',
                        url: '',
                        text: '找管家'
                    },
                    {
                        name: 'logo4',
                        id: 3,
                        src: 'http://www.placehold.it/60x60/09f.png',
                        url: '',
                        text: '签约产地'
                    }
                ], // banner图下的导航的参数
            }
        },
        methods: {
            btnFn () {
                this.tanFlag = true;
            },
            trueFn () {
                console.log('确认事件')
                this.tanFlag = false;
            },
            falseFn () {
                console.log('取消事件')
                this.tanFlag = false;
            }
        },
        mounted () {
            
        },
    }
</script>

<style scoped lang="scss">
    .indexPage{
        background: #f8f8f8;
        .swiper-box{
            position: relative;
            .swiper-pagination{
                bottom: 0.15rem;
            }
            .slide-img{
                display: block;
            }
        }
    }
</style>