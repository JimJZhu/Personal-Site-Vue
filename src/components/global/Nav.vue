<template lang="pug">
  nav.navbar.is-dark.is-fixed-top(role='navigation' aria-label="dropdown navigation")
    .container
      .navbar-brand
        router-link.navbar-item(to='/' v-on:click.native="scrollToTop")
          | Jim J Zhu
      #navMenu.navbar-menu.is-active
        .navbar-end
          router-link.navbar-item(to='/logout' v-show="authenticated") Log Out
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {};
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    authenticated() {
      return JSON.parse(localStorage.getItem('authenticated'));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983

.is-dark
  background-color #2c3e50 !important
</style>
