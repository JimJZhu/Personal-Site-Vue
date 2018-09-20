<template lang="pug">
  section.section
    h1.title Live Projects
    .tile.is-parent
      .tile.is-child.is-4.box
        router-link(to='/hrm').title HRM Quiz
    .tile.is-parent
      .tile.is-child.is-4.box
        router-link(to='/investorbate').title Investorbate (In Progress)
    .tile.is-parent
      .tile.is-child.is-4.box
        router-link(to='/login').title MPH Portal Login
    .tile.is-parent
      .tile.is-child.is-4.box
        p.title Reaction Test

</template>

<script>
export default {
  name: 'Development',
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
h1
  margin-top 10vw
  color #42b983

a
  color #42b983
</style>
