import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import 'mdi/css/materialdesignicons.min.css';
// import VueFire from 'vuefire';
import Firebase from 'firebase';
import router from './router';
import store from './store';

Vue.use(Buefy);
// Vue.use(VueFire);
Vue.config.productionTip = false;
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};
Firebase.initializeApp(config);
Firebase.auth().onAuthStateChanged((user) => {
  let app;
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
  router.beforeEach((to, from, next) => {
    if (!to.meta.protected) {
      //route is public, don't check for authentication
      if (to.meta.login) {
        if (localStorage.getItem('authenticated')) {
          router.replace('/alreadyLoggedIn');
        }
      }
      next();
    } else {
      //route is protected, if authenticated, proceed. Else, login
      if (user) {
        // User is signed in.
        next();
      } else {
        router.push('/notLoggedIn');
      }
    }
  });
});
