<template lang="pug">
  section.section
    .tile.is-parent
      .tile.is-child.is-4.box
        router-link(to='/hrm').title HRM Quiz
    .tile.is-parent
      .tile.is-child.is-4.box
        router-link(to='/investorbate').title Investorbate (In Progress)

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
</style>
