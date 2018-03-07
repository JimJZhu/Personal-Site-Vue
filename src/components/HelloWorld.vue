<template lang="pug">
  .projects-section#Projects
    h2 Projects
    a.project-card(target="_blank", href='https://github.com/JimJZhu/HackTheSix')
      h3 Investormate
      p A personal investment assistant.
      .project-card-overlay.fa.fa-github-alt.fa-3x
    a.project-card(target="_blank", href='https://github.com/JimJZhu/OsuDataAggregator')
      h3 Osu Data Aggregator
      p A python web crawler that scrapes osu player data.
      .project-card-overlay.fa.fa-github-alt.fa-3x
    a.project-card(target="_blank", href='https://github.com/JimJZhu/Personal-Site')
      h3 This Website :)
      p My personal website built on top of Pure.css using pug and stylus.
      .project-card-overlay.fa.fa-github-alt.fa-3x
    a.project-card(target="_blank", href='https://github.com/JimJZhu/QuickGrapherExtension')
      h3 Quick Grapher Extension
      p A simple graphing tool for chrome.
      .project-card-overlay.fa.fa-github-alt.fa-3x
    a.project-card(target="_blank", href='https://github.com/JimJZhu/Kanban')
      h3 Kanban Task Manager
      p A Kanban style personal task manager.
      .project-card-overlay.fa.fa-github-alt.fa-3x
    a.project-card(target="_blank", href='https://github.com/JimJZhu/J-OSU')
      h3 J-OSU
      p A Java port of my favourite rhythm game. Reads standard .osk files.
      .project-card-overlay.fa.fa-github-alt.fa-3x
    .about-section#About
      h2 About Me
      .about-container
        img(src="/assets/me.jpg")
        p
          | I am a 3rd year Computer Engineering student at the University of Waterloo
          | with a deep interest in automation and artificial intelligence.
          | During my free time, I enjoy tinkering with hardware
          | and coding up tools to automate my own life.
          | Some of my other hobbies include fishing, cycling, weight-lifting,
          |  basketball, and curling.
          | I also play a lot of Monster Hunter and various rhythm games, like
          a(target="_blank", href="https://osu.ppy.sh/u/2594079") this one.
    .contact-section#Contact
      h2 Contact Me
      .contact-container
        form(method='POST', action='http://formspree.io/jim.jiaming.zhu@gmail.com')
          input(type='email', name='email', placeholder='Your email')
          input(type='text', name='name', placeholder='Your name')
          textarea(name='message', placeholder='Your message')
          button(type='submit') Send
      br
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
    footer
      p © Jim Zhu 2018
        i.fa.fa-smile-o
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
