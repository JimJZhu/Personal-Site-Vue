import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
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
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
};
console.log(config);
let app;
Firebase.initializeApp(config);
Firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});
