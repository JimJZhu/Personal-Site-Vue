import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Development from '@/components/Development';
import HRM from '@/components/hrm_components/HRM';
import Investorbate from '@/components/Investorbate';
import Login from '@/components/mph_components/Login';
import Table from '@/components/mph_components/Table';
import NotFound from '@/components/global_components/404';

import Firebase from 'firebase';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/404',
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
  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  console.log(to.path);
  console.log(from.path);
  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (!requiresAuth && currentUser) {
    next('/dev');
  } else {
    next();
  }
});

export default router;
