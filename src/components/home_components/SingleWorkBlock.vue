<template lang="pug">
  .columns
    .column.is-one-quarter.line
      h2.date {{data.date}}
    .column
      h2.subtitle {{data.company}} - {{data.position}}
      h2.date.mobile {{data.date}}
      p(v-for="point in data.points" ) • {{point}}
</template>

<script>
export default {
  name: 'ContentBlock',
  props: ['data'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.subtitle
  font-weight 600
  text-align left
  margin-bottom 0

p
  margin-bottom 10px
  text-align left

.date
  font-weight 400
  text-align right

.line
  border none
  opacity 0

.mobile
  opacity 1

@media ( min-width: 769px )
  .line
    border-right 8px solid black
    opacity 1

  .mobile
    opacity 0
</style>
