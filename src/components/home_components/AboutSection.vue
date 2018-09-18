<template lang="pug">
  section.section
    .container
      h1.title About Me
      .columns
        .column.is-one-third
          figure.image.is-1by1
            img.is-rounded(src="@/assets/bass.jpg")
        .column
          p
            | I am a 3rd year Computer Engineering student at the University of Waterloo interested in Computer Graphics and Computer Vision.
            | Most of my work experience has been in backend development with either Java, C#, or Javascript 😏, but I'm also adept in mobile iOS development.
            | My recent focus has been on Augmented Reality using ARKit as a result of my extensive work with it during my internship with IBM iX.
            | Some of my other interests include fishing, cycling, and rhythm games. 

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
h1
  opacity 1
  transition all 0.3s ease-in-out

p
  list-style none
  border-bottom 0
  float left
  opacity 1
  transition all 0.3s ease-in-out
</style>
