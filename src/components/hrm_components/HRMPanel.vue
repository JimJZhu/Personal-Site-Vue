<template lang="pug">
  nav.panel
    p.panel-heading HRM Chapters
    .panel-block
      p.control.has-icons-left
        input.input.is-small(type="text" placeholder="search")
        span.icon.is-small.is-left
          b-icon(icon="magnify" size="is-small")
    a.panel-block(v-for='chapter in chapters' v-on:click='onClickButton(chapter)')
      b-icon(icon="book")
      p Chapter {{chapter}}

</template>

<script>
export default {
  name: 'HRMPanel',
  props: ['chapters'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    onClickButton(chapter) {
      this.$emit('clicked', chapter);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
