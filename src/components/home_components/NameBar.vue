<template lang="pug">
  div
    ul.title
      li J
      li i
      li m
      li.shrinkSpaced J
      li.disappear i
      li.disappear a
      li.disappear m
      li.disappear i
      li.disappear n
      li.disappear g
      li.shrinkSpaced Z
      li h
      li u
    ul.subtitle(v-bind:style = "{ top: subtitleScrollHeight + 'px'}")
      li U
      li.disappear n
      li.disappear i
      li.disappear v
      li.disappear e
      li.disappear r
      li.disappear s
      li.disappear i
      li.disappear t
      li.disappear y
      li.disappearSpaced O
      li.disappear f
      li.shrinkSpaced W
      li.disappear a
      li.disappear t
      li.disappear e
      li.disappear r
      li.disappear l
      li.disappear o
      li.disappear o
      li.spaced 3
      li B
      li.spaced C
      li.disappear o
      li.disappear m
      li.disappear p
      li.disappear u
      li.disappear t
      li.disappear e
      li.disappear r
      li.shrinkSpaced E
      li.disappear n
      li.disappear g
      li.disappear i
      li.disappear n
      li.disappear e
      li.disappear e
      li.disappear r
      li.disappear i
      li.disappear n
      li.disappear g
    .titleBackground
</template>

<script>
export default {
  name: 'NameBar',
  data() {
    return {
      initialScroll: false,
      subtitleScrollHeight: 90 + window.innerWidth / 10,
    };
  },
  methods: {
    handelResize() {
      this.subtitleScrollHeight = 90 + window.innerWidth / 10;
    },
  },
  created() {
    window.addEventListener('resize', this.handelResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handelResize);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.titleBackground
  height 30vw
  top 0
  background linear-gradient( to bottom, #888888 75%, rgba( 251, 251, 251, 0 ) 100% )
  width 100vw
  position fixed
  transition all 0.5s ease-in-out
  z-index 2

// Title Before Scrolling
.title
  position fixed
  list-style none
  border-bottom 0
  transition all 0.5s ease-in-out
  z-index 3
  top 60px

.title li
  float left
  font-weight 700
  font-size 10vw
  color #fff
  opacity 1
  transition all 0.5s ease-in-out
  max-width 2em

li.appear
  visibility hidden
  opacity 0

li.spaced, li.shrinkSpaced, li.disappearSpaced
  padding-left 0.5em

// Subtitle Before Scrolling
.subtitle
  position fixed
  list-style none
  border-bottom 0
  transition all 0.5s ease-in-out
  z-index 3

.subtitle li
  float left
  font-weight 700
  font-size 3vw
  color #fff
  opacity 1
  transition all 0.5s ease-in-out
  max-width 2em

// Title and Subtitle After scrolling
.shrunk li.disappear
  opacity 0
  max-width 0

.shrunk li.appear
  visibility visible
  opacity 1

.shrunk li.shrinkSpaced
  padding-left 0

.shrunk li.disappearSpaced
  padding-left 0
  opacity 0
  max-width 0
</style>
