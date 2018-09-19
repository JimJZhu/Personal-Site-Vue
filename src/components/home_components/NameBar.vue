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
    ul.countdown(v-bind:style = "{ top: subtitleScrollHeight + 100 + 'px'}")
      li.disappear D
      li.disappear a
      li.disappear y
      li.disappear s
      li.disappearSpaced U
      li.disappear n
      li.disappear t
      li.disappear i
      li.disappear l
      li.disappearSpaced G
      li.disappear r
      li.disappear a
      li.disappear d
      li.disappear u
      li.disappear a
      li.disappear t
      li.disappear i
      li.disappear o
      li.disappear n:
      li.disappearSpaced {{daysUntilGraduation}}
    ul.countdown(v-bind:style = "{ top: subtitleScrollHeight + 140 + 'px'}")
      li.disappear D
      li.disappear a
      li.disappear y
      li.disappear s
      li.disappearSpaced U
      li.disappear n
      li.disappear t
      li.disappear i
      li.disappear l
      li.disappearSpaced T
      li.disappear i
      li.disappear p
      li.disappear -
      li.disappear O
      li.disappear f
      li.disappear f:
      li.disappearSpaced {{daysUntilTipOff}}
</template>

<script>
export default {
  name: 'NameBar',
  props: ['scrolled'],
  data() {
    return {
      subtitleScrollHeight: 180 + window.innerWidth / 10,
    };
  },
  methods: {
    handelResize() {
      console.log(this.scrolled);
      if (this.scrolled) {
        this.subtitleScrollHeight = 40 + window.innerWidth / 20;
      } else {
        this.subtitleScrollHeight = 180 + window.innerWidth / 10;
      }
    },
  },
  watch: {
    scrolled(newVal, oldVal) {
      console.log(oldVal + newVal);
      if (this.scrolled) {
        this.subtitleScrollHeight = 40 + window.innerWidth / 20;
      } else {
        this.subtitleScrollHeight = 180 + window.innerWidth / 10;
      }
    },
  },
  computed: {
    daysUntilGraduation() {
      let graduationDate = new Date('April 30, 2020');
      let millisInDay = 1000 * 60 * 60 * 24;
      return Math.ceil(Math.abs(graduationDate - new Date()) / millisInDay);
    },
    daysUntilTipOff() {
      let graduationDate = new Date('October 16, 2018');
      let millisInDay = 1000 * 60 * 60 * 24;
      return Math.ceil(Math.abs(graduationDate - new Date()) / millisInDay);
    },
    daysUntilTipOff() {
      let graduationDate = new Date('October 16, 2018');
      let millisInDay = 1000 * 60 * 60 * 24;
      return Math.ceil(Math.abs(graduationDate - new Date()) / millisInDay);
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
// Title Before Scrolling
ul.title
  position fixed
  list-style none
  border-bottom 0
  transition all 0.2s ease-in-out
  top 150px
  left 30px
  z-index 999

ul.title li
  float left
  font-weight 700
  font-size 10vw
  color #fff
  opacity 1
  transition all 0.2s ease-in-out
  max-width 2em

li.appear
  visibility hidden
  opacity 0

li.spaced, li.shrinkSpaced, li.disappearSpaced
  padding-left 0.5em

// Subtitle Before Scrolling
ul.subtitle
  position fixed
  list-style none
  border-bottom 0
  transition all 0.2s ease-in-out
  left 30px
  z-index 999

ul.subtitle li
  float left
  font-weight 700
  font-size 3vw
  color #fff
  opacity 1
  transition all 0.2s ease-in-out
  max-width 2em

// Countdown Before Scrolling
ul.countdown
  position fixed
  list-style none
  border-bottom 0
  transition all 0.2s ease-in-out
  left 30px
  z-index 999

ul.countdown li
  float left
  font-weight 700
  font-size 3vw
  color #fff
  opacity 1
  transition all 0.2s ease-in-out
  max-width 2em

// Title and Subtitle After scrolling
.shrunk ul.title
  top 15px

.shrunk ul.title li
  font-size 5vw

.shrunk ul.subtitle li
  font-size 2vw

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
