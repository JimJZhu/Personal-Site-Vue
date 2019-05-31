<template lang="pug">
  section
    br
    section.section.hero.is-dark
      .hero-body
        .container
          h1.title
            | Jim Jiaming Zhu
          h2.subtitle
            | Days until graduation: {{daysUntilGraduation}}

    about-section#about.about
    work-section
    project-section
    contact-section
    footer.footer
      .container
        .content.columns.is-mobile
          .column
            a(href='mailto:jim.jiaming.zhu@gmail.com')
              p Email: jim.jiaming.zhu@gmail.com
            a(href='tel:+16478654188')
              p Phone: (647)-865-4188
          .column.socials
            a(target="_blank", href='https://github.com/JimJZhu')
              i.social.mdi.mdi-github-face.mdi-36px
            a(target="_blank", href='https://www.linkedin.com/in/jim-zhu-a881b6128')
              i.social.mdi.mdi-linkedin-box.mdi-36px
            a(target="_blank", href='http://steamcommunity.com/profiles/76561198044263537')
              i.social.mdi.mdi-steam.mdi-36px
        .content.has-text-centered
          p © #[strong JimJZhu]  2019

</template>

<script>
import AboutSection from '@/components/about/AboutSection';
import WorkSection from '@/components/about/WorkSection';
import ProjectSection from '@/components/about/ProjectSection';
import ContactSection from '@/components/about/ContactSection';

export default {
  name: 'About',
  components: {
    'about-section': AboutSection,
    'work-section': WorkSection,
    'project-section': ProjectSection,
    'contact-section': ContactSection,
  },
  data() {
    return {
      initialScroll: false,
      opacity: 1,
    };
  },
  computed: {
    daysUntilGraduation() {
      const graduationDate = new Date('April 30, 2020');
      const millisInDay = 1000 * 60 * 60 * 24;
      return Math.ceil(Math.abs(graduationDate - new Date()) / millisInDay);
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const initialScrollThreshold = window.innerHeight - 410 - window.innerWidth / 10;

      this.initialScroll = window.scrollY > initialScrollThreshold;

      this.opacity = 1 - window.scrollY / (window.innerHeight - 200);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
// General Styling
.is-dark
  background-color #2c3e50

.socials
  text-align right

i.social
  color black
  margin 10px
  text-align right

.clear
  opacity 0

a p
  text-align left
  color black
</style>
