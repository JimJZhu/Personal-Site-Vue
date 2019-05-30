<template lang="pug">
  section.section
    .container.card
      h1.title About Me
      .card-image
        figure.image
        img(src="@/assets/bass.jpg")
      .card-content
        p
          | I am a 3rd year Computer Engineering student at the University of Waterloo with an
          | interest in Computer Graphics and Computer Vision.
          | Most of my work experience has been in backend development with either Java, C#,
          | or Javascript, but I'm also adept in mobile iOS development.
          | <br><br>
          | As a result of my internship with IBM iX, my recent focus has been Augmented Reality
          | development using ARKit. Currently trying to apply those skills at Splunk.
          | Some of my other interests include fishing, cycling, ping pong, and rhythm games.

</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      msg: 'About Me',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1
  opacity 1
  transition all 0.3s ease-in-out
  padding-top 10px

p
  list-style none
  border-bottom 0
  opacity 1
  transition all 0.3s ease-in-out
  text-align left

img
  width 300px
  border-radius 50%
</style>
