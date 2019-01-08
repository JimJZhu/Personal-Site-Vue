// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Buefy from 'buefy';
import VueFire from 'vuefire';
import Firebase from 'firebase';
import 'mdi/css/materialdesignicons.min.css';
import SmoothScroll from 'vue-smooth-scroll';
import 'buefy/dist/buefy.css';
import App from './App';
import router from './router';

Vue.use(Buefy);
Vue.use(VueFire);
Vue.use(SmoothScroll);
Vue.config.productionTip = false;
const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

let app;
Firebase.initializeApp(config);
Firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
    });
  }
});
