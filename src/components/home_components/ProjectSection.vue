<template lang="pug">
  div
    section.section
      .container.is-fullhd
        h1.title Projects
        .tile.is-ancestor
          .tile.is-vertical.is-4
            a.tile.is-parent.is-vertical.project-card(target="_blank", href='https://github.com/JimJZhu/J-OSU')
              article.tile.is-child.box
                h2.subtitle J-OSU
                p A Java port of my favourite rhythm game. Reads standard .osk files.
            a.tile.is-parent.is-vertical.project-card(target="_blank", href='https://github.com/JimJZhu/AugRes')
              article.tile.is-child.box
                h2.subtitle AugRes
                p An AR desk reservation system for iOS.
          .tile.is-vertical.is-4
            a.tile.is-parent.is-vertical.project-card(target="_blank", href='https://github.com/JimJZhu/HackTheSix')
              article.tile.is-child.box
                h2.subtitle Investormate
                p A personal investment assistant.
            a.tile.is-parent.is-vertical.project-card(target="_blank", href='https://github.com/JimJZhu/OsuDataAggregator')
              article.tile.is-child.box
                h2.subtitle Osu Data Aggregator
                p A python web crawler that scrapes osu player data.tile.
          .tile.is-vertical.is-4
            a.tile.is-parent.is-vertical.project-card(target="_blank", href='https://github.com/JimJZhu/Personal-Site')
              article.tile.is-child.box
                h2.subtitle This Website :)
                p My personal website built using Vue.js, Pug, and Stylus.
            a.tile.is-parent.is-vertical.project-card(target="_blank", href='https://github.com/JimJZhu/QuickGrapherExtension')
              article.tile.is-child.box
                h2.subtitle Quick Grapher Extension
                p A simple graphing tool for chrome.

</template>

<script>
export default {
  name: 'ContentBlock',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
