<template lang="pug">
  div
    section.section
      h1 About Me
      .columns
        .column
          img(src="@/assets/bass.jpg")
        .column
          p
            | I am a 3rd year Computer Engineering student at the University of Waterloo.
            | I love playing fishing, cycling, and playing rhythm games.
          p {{daysUntilGraduation}} days until Graduation.
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      msg: 'About Me',
    };
  },
  computed: {
    daysUntilGraduation() {
      let graduationDate = new Date('April 30, 2020');
      let millisInDay = 1000 * 60 * 60 * 24;
      return Math.ceil(Math.abs(graduationDate - new Date()) / millisInDay);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.section
  display flex
  flex-direction column
  justify-content flex-start

h1
  font-weight 700
  font-size 3vw
  color #fff
  opacity 1
  transition all 0.5s ease-in-out
  float left

img
  height 30vw
  width 30vw
  border-radius 50%
  // margin auto

p
  list-style none
  border-bottom 0
  float left
  font-weight 700
  font-size 2vw
  color #fff
  opacity 1
  transition all 0.5s ease-in-out
</style>
