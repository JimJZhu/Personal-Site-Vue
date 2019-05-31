<template lang="pug">
  section.section
    h1.title Log In
    #firebaseui-auth-container
</template>

<script>
import Firebase from 'firebase';
import Firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

export default {
  mounted() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.replace('/alreadyLoggedIn');
      } else {
        let uiConfig = {
          signInOptions: [
            {
              provider: Firebase.auth.EmailAuthProvider.PROVIDER_ID,
            },
          ],
          callbacks: {
            signInSuccessWithAuthResult() {
              localStorage.setItem('authenticated', true);
              window.location.href = '/';
            },
          },
        };
        var ui = Firebaseui.auth.AuthUI.getInstance() || new Firebaseui.auth.AuthUI(Firebase.auth());
        console.log('mounted');
        ui.start('#firebaseui-auth-container', uiConfig);
      }
    });
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1
  margin 1rem
</style>
