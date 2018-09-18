<template lang="pug">
  div
    section.hero
      .hero-body
        .container
          name-bar(v-bind:scrolled = 'initialScroll', v-bind:class = "{ shrunk: initialScroll }")
          // h1 Experience
          // h1 Contact Me
          button.button GO
    about-section.about(v-bind:class = "{ showAbout: showAbout }")
    about-section.about(v-bind:class = "{ showAbout: showAbout }")
    about-section.about(v-bind:class = "{ showAbout: showAbout }")
    about-section.about(v-bind:class = "{ showAbout: showAbout }")
    about-section.about(v-bind:class = "{ showAbout: showAbout }")
    about-section.about(v-bind:class = "{ showAbout: showAbout }")
    about-section.about(v-bind:class = "{ showAbout: showAbout }")

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
      bodyScrollHeight: 1000,
      showAbout: false,
    };
  },
  methods: {
    handleScroll() {
      let slowScroll = 20;
      let fastScroll = 10;
      let navbarHeight = 0;
      let initialTitlePosition = 100;
      let firstThreshold = 200;
      let initialBodyPosition = 50;
      const maxTopPosition = navbarHeight / window.innerWidth / 0.01;
      this.initialScroll = window.scrollY > initialTitlePosition;
      const diff = window.scrollY / fastScroll;

      this.titleScrollHeight =
        window.scrollY > firstThreshold ? initialTitlePosition - diff : initialTitlePosition;
      if (this.titleScrollHeight <= maxTopPosition) {
        this.titleScrollHeight = maxTopPosition;
      }
      this.bodyScrollHeight =
        window.scrollY > initialTitlePosition ? initialBodyPosition - diff : initialBodyPosition;

      this.showAbout = window.scrollY > firstThreshold;
      console.log(this.titleScrollHeight);
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
  background-color #2c3e50
  height 100vh

// About Before scrolling
.about
  transition all 0.3s ease-in-out

// About After Scrolling
.showAbout
  opacity 1
</style>
