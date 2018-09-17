<template lang="pug">
  div
    section.hero
      .hero-body
        .container
          ul.title(v-bind:class = "{ shrunk: initialScroll }", v-bind:style = "{ top: titleScrollHeight + 'px' }")
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
          ul.subtitle(v-bind:class = "{ shrunk: initialScroll }", v-bind:style = "{ top: titleScrollHeight + 120 + 'px' }")
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
          about-section.about(v-bind:class = "{ showAbout: showAbout }", v-bind:style = "{ top: bodyScrollHeight + 'px' }")
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

export default {
  name: 'Home',
  data() {
    return {
      initialScroll: false,
      titleScrollHeight: 100,
      bodyScrollHeight: 250,
      showAbout: false,
    };
  },
  methods: {
    handleScroll() {
      let slowScroll = 20;
      let fastScroll = 10;
      let initialTitlePosition = 100;
      let firstThreshold = 200;
      let initialBodyPosition = 250;
      let maxTopPosition = 60;
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

// About Before scrolling
.about
  opacity 0
  position fixed
  transition all 0.3s ease-in-out

// About After Scrolling
.showAbout
  opacity 1
</style>
