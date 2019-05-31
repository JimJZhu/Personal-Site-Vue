<template lang="pug">
  section
    section.section.hero.is-dark.is-fullheight
      .hero-body
        .container
          h1.title
            | Jim Jiaming Zhu
          h1.subtitle
            | UW ECE 2020
          command-input
    footer-section

</template>

<script>
import Footer from '@/components/global/Footer';
import CommandInput from '@/components/global/CommandInput';

export default {
  name: 'Home',
  components: {
    'footer-section': Footer,
    'command-input': CommandInput,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
// General Styling
.is-dark
  background-color #2c3e50

.clear
  opacity 0

a p
  text-align left
  color black
</style>
