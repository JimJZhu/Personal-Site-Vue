<template lang="pug">
  section.section
    .container
      h1.title About Me
      h2
        | Hi, my name is Jim, and I'm a 4th year ECE student from the University of Waterloo.
      br
      h2
        | In my short career, I've had the pleasure of working with a wide-range of unique technologies at various companies.
        | I worked on a backend assessment and scoring algorithm at MHS.
        | I designed stage demos using IOT microcontrollers with SAP.
        | I worked on various web-scrapping microservices for Hubdoc.
        | Finally, I'm currently working on an Enterprise AR app for Splunk.
      br
      h2
        | It's been a crazy 4 years at UWaterloo. Just {{daysUntilGraduation}} days left to go.

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
      const graduationDate = new Date('April 30, 2020');
      const millisInDay = 1000 * 60 * 60 * 24;
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
  padding-top 10px

p
  list-style none
  border-bottom 0
  opacity 1
  transition all 0.3s ease-in-out
  text-align left

.card
  max-width 500px
// img
//   width 300px
//   border-radius 50%
</style>
