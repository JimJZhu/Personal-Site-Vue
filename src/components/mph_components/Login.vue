<template lang="pug">
    section.section
      h1.title Sign In
      .field
        .control
          input.input(type='text', placeholder='Email', v-model='email')
      .field
        .control
          input.input(type='password', placeholder='Password', v-model='password')
      button.button(v-on:click='login') Login
      br
      p.subtitle {{status}}

</template>

<script>
import Firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      status: '',
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
          () => {
            // alert(`nope ${err.message}`);
            this.status = 'Nope...Try again';
          },
        );
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
h1
  margin 1rem
</style>
