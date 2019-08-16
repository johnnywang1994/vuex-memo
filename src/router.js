import Vue from 'vue';
import VueRouter from 'vue-router';

// View
import Main from '@/views/Main.vue';
import User from '@/views/User.vue';
import Error404 from '@/views/404.vue';

// Component
import UserIndex from '@/components/User';
import UserInfo from '@/components/User/info.vue';


Vue.use(VueRouter);


const Router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/', component: Main
    },
    {
      path: '/user/:id', component: User, children: [
        {
          path: '', component: UserIndex
        },
        {
          path: 'info', component: UserInfo
        }
      ]
    },
    {
      path: '*', component: Error404
    }
  ]
})

export default Router;
