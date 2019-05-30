<template lang="pug">
  #app
    link(rel='apple-touch-icon', sizes='180x180', href='/apple-touch-icon.png')
    link(rel='icon', type='image/png', sizes='32x32', href='/favicon-32x32-icon.png')
    link(rel='icon', type='image/png', sizes='16x16', href='/favicon-16x16-icon.png')
    link(rel='manifest', href='/site.webmanifest')
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
