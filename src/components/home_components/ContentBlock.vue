<template lang="pug">
  div
    section.section
      .container.is-fullhd
        h1.title About Me
        //- img.image(src="@/assets/me.jpg")
        p
          | I am a 3rd year Computer Engineering student at the University of Waterloo.
          | I like sleeping and bamboozle.
    section.section
      .container.is-fullhd
        h1.title Projects
        .tile.is-ancestor
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
                p My personal website built on top of Pure.css using pug and stylus.
            a.tile.is-parent.is-vertical.project-card(target="_blank", href='https://github.com/JimJZhu/QuickGrapherExtension')
              article.tile.is-child.box
                h2.subtitle Quick Grapher Extension
                p A simple graphing tool for chrome.
          .tile.is-vertical.is-4
            a.tile.is-parent.is-vertical.project-card(target="_blank", href='https://github.com/JimJZhu/J-OSU')
              article.tile.is-child.box
                h2.subtitle J-OSU
                p A Java port of my favourite rhythm game. Reads standard .osk files.
    section.section
      .container.is-fullhd
        h1.title Contact Me
        .tile.is-ancestor
          .tile.is-3
          form.tile.is-vertical.is-6(method='POST', action='http://formspree.io/jim.jiaming.zhu@gmail.com')
            .field
              label.label Your Email
              .control
                input.input(type='email', name='email', placeholder='Your email')
            .field
              label.label Your Name
              .control
                input.input(type='text', name='name', placeholder='Your name')
            .field
              label.label Your Message
              .control
                textarea.textarea(name='message', placeholder='Your message')
            button.button.is-danger(type='submit') Send
        .tile.is-3
        .pure-g
          .pure-u-lg-1-3.pure-u-1-12
          .pure-u-lg-1-12.pure-u-5-24
            a.social(target="_blank", href='https://github.com/JimJZhu')
              i.fa.fa-github.fa-2x
          .pure-u-lg-1-12.pure-u-5-24
            a.social(target="_blank", href='https://www.linkedin.com/in/jim-zhu-a881b6128')
              i.fa.fa-linkedin.fa-2x
          .pure-u-lg-1-12.pure-u-5-24
            a.social(target="_blank", href='http://steamcommunity.com/profiles/76561198044263537')
              i.fa.fa-steam.fa-2x
          .pure-u-lg-1-12.pure-u-5-24
            a.social(href='mailto:jim.jiaming.zhu@gmail.com')
              i.fa.fa-envelope.fa-2x
          .pure-u-lg-1-3.pure-u-1-12
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
h1,h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983

img
  border-radius: 50px

</style>
