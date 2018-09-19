<template lang="pug">
  div#home
    section.hero
      .parallax(v-bind:style = "{ opacity: opacity }")
      .hero-body
        .container
          name-bar(v-bind:scrolled = "initialScroll", v-bind:class = "{ shrunk: initialScroll }")
          a.arrow(href="#about", v-smooth-scroll="{ duration: 800, offset:-120 }", v-bind:class = "{ clear: initialScroll }")
            i.arrow.mdi.mdi-arrow-down-drop-circle.mdi-36px
    about-section#about.about
    work-section
    project-section
    contact-section
    footer.footer
      .container
        .content.columns.is-mobile
          .column
            a.subtitle(href='mailto:jim.jiaming.zhu@gmail.com')
              p Email: jim.jiaming.zhu@gmail.com
            a.subtitle(href='tel:+16478654188')
              p Phone: (647)-865-4188
          .column.socials
            a(target="_blank", href='https://github.com/JimJZhu')
              i.social.mdi.mdi-github-face.mdi-36px
            a(target="_blank", href='https://www.linkedin.com/in/jim-zhu-a881b6128')
              i.social.mdi.mdi-linkedin-box.mdi-36px
            a(target="_blank", href='http://steamcommunity.com/profiles/76561198044263537')
              i.social.mdi.mdi-steam.mdi-36px
            a(href='mailto:jim.jiaming.zhu@gmail.com')
              i.social.mdi.mdi-envelope.mdi-36px
        .content.has-text-centered
          p © #[strong JimJZhu]  2018

</template>

<script>
import ContentBlock from '@/components/home_components/ContentBlock';
import AboutSection from '@/components/home_components/AboutSection';
import WorkSection from '@/components/home_components/WorkSection';
import ProjectSection from '@/components/home_components/ProjectSection';
import ContactSection from '@/components/home_components/ContactSection';

import NameBar from '@/components/home_components/NameBar';

export default {
  name: 'Home',
  data() {
    return {
      initialScroll: false,
      lowerScroll: false,
      opacity: 1,
    };
  },
  methods: {
    handleScroll() {
      let initialScrollThreshold = 120;
      let secondScrollThreshold = 200;

      this.initialScroll = window.scrollY > initialScrollThreshold;
      this.lowerScroll = window.scrollY > secondScrollThreshold;

      this.opacity = 1 - window.scrollY / (window.innerHeight - 200);
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
    'work-section': WorkSection,
    'project-section': ProjectSection,
    'contact-section': ContactSection,
    'name-bar': NameBar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
// General Styling
a.arrow
  top 90vh
  transition all 0.3s ease-in-out

i.arrow
  color white

.socials
  text-align right

i.social
  color black
  margin 10px
  text-align right

.parallax
  background linear-gradient( 0, rgba( 44, 62, 80, 0.6 ), rgba( 44, 62, 80, 0.6 ) ), url( '../assets/hero.jpeg' )
  /* Create the parallax scrolling effect */
  background-attachment fixed
  background-position center
  background-repeat no-repeat
  background-size cover
  transition all 0.3s ease-in-out
  height 100vh

.hero
  height 100vh
  background-color #2c3e50

.hero-body
  padding 10px

.clear
  opacity 0

a p
  text-align left
</style>
