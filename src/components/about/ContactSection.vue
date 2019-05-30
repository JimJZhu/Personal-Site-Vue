<template lang="pug">
  section.section
    h1.title Contact
    .container
      .tile.is-ancestor
        .tile.is-3
        form.tile.is-vertical.is-6(method='POST', action='http://formspree.io/jim.jiaming.zhu@gmail.com')
          .field
            .control
              input.input(type='email', name='email', placeholder='Email')
          .field
            .control
              input.input(type='text', name='name', placeholder='Name')
          .field
            .control
              textarea.textarea(name='message', placeholder='Message')
          button.button.is-danger(type='submit') Send
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      msg: 'Contact Section',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped></style>
