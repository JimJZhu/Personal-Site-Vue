import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import About from '@/views/About';
import Development from '@/views/Development';
import HRM from '@/views/HRM';
import Investorbate from '@/views/Investorbate';
import Login from '@/components/mph/Login';
import Table from '@/components/mph/Table';
import Reaction from '@/views/Reaction';
import NotFound from '@/components/global/404';

import Firebase from 'firebase';

Vue.use(Router);

const router = new Router({
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
    },
    {
      path: '/table',
      name: 'Table',
      component: Table,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { currentUser } = Firebase.auth();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
