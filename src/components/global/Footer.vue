<template lang="pug">
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
export default {
  name: 'Footer',
  components: {},
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
