<template>
    <div class="tanceng">
        <div class="tan-con">
            <h4 class="tan-title">{{title}}</h4>
            <p class="tan-direction">{{direction}}</p>
            <p class="tan-btns">
                <button v-for="(item, index) in btns" :key="index" @click="btnFn(item.type)">{{item.name}}</button>
            </p>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Tanceng',
        props: {
            title: {
                type: String,
                default: '我是标题',
            },
            direction: {
                type: String,
                default: '我是描述',
            },
            btns: {
                type: Array,
                default: [
                    {name: '确认', type: 1},
                    {name: '取消', type: 0}
                ]
            }
        },
        data () {
            return {
                
            }
        },
        methods: {
            btnFn (type) {
                if (type === 0) {
                    this.$parent.falseFn();
                } else if (type === 1) {
                    this.$parent.trueFn();
                } else {
                    return;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .tanceng{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        .tan-con{
            width: 3rem;
            background: #ffffff;
            border-radius: 0.08rem;
            .tan-title{
                width: 100%;
                height: 0.48rem;
                line-height: 0.48rem;
                border-bottom: 0.01rem solid #dddddd;
                padding: 0 0.1rem;
                font-size: 0.18rem;
            }
            .tan-direction{
                line-height: 1.5;
                min-height: 0.8rem;
                padding: 0.1rem 0.15rem;
            }
            .tan-btns{
                width: 100%;
                height: 0.5rem;
                padding: 0.1rem;
                display: flex;
                border-top: 0.01rem solid #dddddd;
                button{
                    padding: 0 0.2rem;
                    margin-right: 0.1rem;
                }
            }
        }
    }
</style>