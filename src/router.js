import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import About from '@/views/About';
import Development from '@/views/Development';
import HRM from '@/views/HRM';
import Investorbate from '@/views/Investorbate';
import Login from '@/components/global/Login';
import Logout from '@/components/global/Logout';
import NotLoggedIn from '@/components/global/NotLoggedIn';
import AlreadyLoggedIn from '@/components/global/AlreadyLoggedIn';

import Table from '@/components/mph/Table';
import Reaction from '@/views/Reaction';
import NotFound from '@/components/global/404';

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
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
      path: '/reaction',
      name: 'Reaction Test',
      component: Reaction,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        login: true,
      },
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
    },
    {
      path: '/notLoggedIn',
      name: 'Not Logged In',
      component: NotLoggedIn,
    },
    {
      path: '/alreadyLoggedIn',
      name: 'Already Logged In',
      component: AlreadyLoggedIn,
    },
    {
      path: '/table',
      name: 'Table',
      component: Table,
      meta: {
        protected: true,
      },
    },
  ],
});

export default router;
