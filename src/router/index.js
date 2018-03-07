import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Development from '@/components/Development';
import HRM from '@/components/HRM';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/dev',
      name: 'Development',
      component: Development,
    },
    {
      path: '/hrm',
      name: 'HRM',
      component: HRM,
    },
  ],
});
