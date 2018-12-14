<template>
    <div class="indexPage">
        <h1>首页...</h1>
        <button @click="btnFn()">按钮</button>
        <tanceng v-if="tanFlag" title="vue很优秀" direction="请您选择" :btns="btns" />
    </div>
</template>


<script>
    import Tanceng from '@/components/tan/Tanceng';
    export default {
        name: 'IndexPage',
        components: {
            Tanceng
        },
        data () {
            return {
                btns: [
                    {name: 'ok!!!', type: 1},
                    {name: 'cancel', type: 0}
                ],
                tanFlag: false
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
        }
    }
</script>

<style scoped lang="scss">
    .indexPage{
        background: red;
        h1{
            color: blue;
        }
    }
</style>