<template lang="pug">
  section.section
    h1.title Contact Me
    .container
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
