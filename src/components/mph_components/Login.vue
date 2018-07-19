<template lang="pug">
    section.section
      br
      h1.title Sign In
      .field
        .control
          input.input(type='text', placeholder='Email', v-model='email')
      .field
        .control
          input.input(type='password', placeholder='Password', v-model='password')
      button.button(v-on:click='login') Connection
      p No account? Make one.
</template>

<script>
import Firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.replace('/table');
          },
          (err) => {
            alert(`nope ${err.message}`);
          },
        );
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
</style>
