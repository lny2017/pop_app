import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import IndexPage from '@/components/page/indexpage/IndexPage';
import FindGoods from '@/components/page/indexpage/FindGoods';

import WantSale from '@/components/page/wantSale/wantSale';
import Chat from '@/components/page/chat/Chat';
import Mine from '@/components/page/mine/Mine';
import NotFound from '@/components/component/notFound/NotFound';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage,
      // children: [
      //   {
      //     path: 'findgoods',
      //     name: 'FindGoods',
      //     component: FindGoods
      //   },
      // ]
    },
    {
      path: '/wantsale',
      name: 'WantSale',
      component: WantSale,
      children: [
        {
          path: '',
          name: 'FindGoods',
          component: FindGoods
        },
        {
          path: 'findgoods',
          name: 'FindGoods',
          component: FindGoods
        },
      ]
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
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }, //全不匹配的情况下，返回404，路由按顺序从上到下，依次匹配。最后一个*能匹配全部，
  ]
})
