<template lang="pug">
  nav.navbar.is-dark.is-fixed-top(role='navigation' aria-label="dropdown navigation")
    .container
      .navbar-brand
        router-link.navbar-item(to='/' v-on:click.native="scrollToTop")
          | Jim J Zhu
        //- span.navbar-burger.burger(v-on:click="toggleBurger" v-bind:class="{'is-active' : visible}")
        //-   span
        //-   span
        //-   span

      //- #navMenu.navbar-menu(v-bind:class="{'is-active' : visible}")
      //-   .navbar-end
      //-     router-link.navbar-item(to='/about') About
      //-     router-link.navbar-item(to='/dev') Live Projects
  //- nav.navbar.is-dark.is-fixed-top(role='navigation' aria-label="dropdown navigation")
  //-   .navbar-brand
  //-     .navbar-burger.burger(v-on:click="toggleBurger" v-bind:class="{'is-active' : visible}")
  //-       span
  //-       span
  //-       span
  //-   .navbar-menu(v-bind:class="{'is-active' : visible}" v-on:click="toggleBurger")
  //-     .navbar-end
  //-       router-link.navbar-item(to='/') Home
  //-       router-link.navbar-item(to='/dev') Live Projects
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    toggleBurger() {
      this.visible = !this.visible;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
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

.is-dead
  color #aaa !important

.is-dark
  background-color #2c3e50
</style>
