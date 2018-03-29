<template lang="pug">
  #app.has-navbar-fixed-top
    Nav
    router-view
</template>

<script>
import Nav from '@/components/global_components/Nav';

export default {
  name: 'App',
  components: {
    Nav,
  },
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
