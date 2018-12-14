import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import IndexPage from '@/components/indexpage/IndexPage';
import Wantsale from '@/components/wantSale/wantSale';
import Chat from '@/components/chat/Chat';
import Mine from '@/components/mine/Mine';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/wantsale',
      name: 'Wantsale',
      component: Wantsale
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
