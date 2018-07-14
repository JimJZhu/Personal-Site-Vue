import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Development from '@/components/Development';
import HRM from '@/components/HRM';
import Investorbate from '@/components/Investorbate';
import MPH from '@/components/MPH';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
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
    {
      path: '/investorbate',
      name: 'Investorbate',
      component: Investorbate,
    },
    {
      path: '/mph',
      name: 'MPH',
      component: MPH,
    },
  ],
});
