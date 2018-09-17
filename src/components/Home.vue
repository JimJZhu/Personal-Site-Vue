<template lang="pug">
  div
    section.hero
      .hero-body
        .container
          name-bar(v-bind:class = "{ shrunk: initialScroll }", v-bind:style = "{ top: titleScrollHeight + 'vw' }")
          about-section.about(v-bind:class = "{ showAbout: showAbout }", v-bind:style = "{ top: bodyScrollHeight + 'vw' }")
          // h1 Experience
          // h1 Contact Me

    footer.footer
      .container
        .content.has-text-centered
          p Website by #[strong Jim J.Zhu]
</template>

<script>
import ContentBlock from '@/components/home_components/ContentBlock';
import AboutSection from '@/components/home_components/AboutSection';
import NameBar from '@/components/home_components/NameBar';

export default {
  name: 'Home',
  data() {
    return {
      initialScroll: false,
      titleScrollHeight: 10,
      subtitleScrollHeight: 12,
      bodyScrollHeight: 12,
      showAbout: false,
    };
  },
  methods: {
    handleScroll() {
      let slowScroll = 20;
      let fastScroll = 10;
      let navbarHeight = 90;
      let initialTitlePosition = 10;
      let firstThreshold = 15;
      let initialBodyPosition = 12;
      let maxTopPosition = navbarHeight * 100 / window.innerWidth;
      console.log(window.innerWidth);
      console.log(maxTopPosition);
      this.initialScroll = window.scrollY > initialTitlePosition;

      this.titleScrollHeight =
        window.scrollY > firstThreshold
          ? initialTitlePosition - window.scrollY / fastScroll
          : initialTitlePosition;
      if (this.titleScrollHeight <= maxTopPosition) {
        this.titleScrollHeight = maxTopPosition;
      }
      this.bodyScrollHeight =
        window.scrollY > initialTitlePosition
          ? initialBodyPosition - window.scrollY / fastScroll
          : initialBodyPosition;

      this.showAbout = window.scrollY > 100;
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  components: {
    'content-block': ContentBlock,
    'about-section': AboutSection,
    'name-bar': NameBar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
// General Styling
h1, h2
  font-weight normal

a
  color #42b983

.hero
  background-color #888888
  height 1000vh

// About Before scrolling
.about
  opacity 0
  position fixed
  transition all 0.3s ease-in-out

// About After Scrolling
.showAbout
  opacity 1
</style>
