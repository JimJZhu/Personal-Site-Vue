<template lang="pug">
  #app.has-navbar-fixed-top
    nav.navbar.is-dark.is-fixed-top(role='navigation' aria-label="dropdown navigation")
      .navbar-menu
        .navbar-end
          router-link.navbar-item(to='/') Home
          router-link.navbar-item(to='/#about') About
          router-link.navbar-item(to='/#contact') Contact
          .navbar-item.has-dropdown.is-hoverable
            router-link.navbar-link(to='/dev') Ongoing Projects
            .navbar-dropdown.is-right
              router-link.navbar-item(to='/hrm') HRM
      .navbar-burger
        router-link.navbar-item(to='/') Home
        router-link.navbar-item(to='/#about') About
        router-link.navbar-item(to='/#contact') Contact
        .navbar-item.has-dropdown.is-hoverable
          router-link.navbar-link(to='/dev') Ongoing Projects
          .navbar-dropdown.is-right
            router-link.navbar-item(to='/hrm') HRM
    router-view
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
