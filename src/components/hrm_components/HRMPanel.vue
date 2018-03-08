<template lang="pug">
  nav.panel
    a.panel-heading(v-on:click='onClickButton(0)') HRM Chapters
    .panel-block
      p.control.has-icons-left
        input.input.is-small(type="text" placeholder="search" v-model="search")
        span.icon.is-small.is-left
          b-icon(icon="magnify" size="is-small")
    a.panel-block(
      v-for='chapter in chapters'
      v-on:click='onClickButton(chapter)'
      v-bind:class="isActive(chapter)"
    )
      b-icon(icon="book")
      p Chapter {{chapter}}

</template>

<script>
export default {
  name: 'HRMPanel',
  props: ['chapters'],
  data() {
    return {
      activeChapter: 0,
      search: '',
    };
  },
  methods: {
    onClickButton(chapter) {
      this.activeChapter = chapter;
      this.$emit('clicked', chapter);
    },
    isActive(chapter) {
      return this.activeChapter === chapter ? 'is-active' : '';
    },
  },
  watch: {
    search() {
      this.$emit('searched', this.search.toLowerCase());
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
h1,h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983

</style>
