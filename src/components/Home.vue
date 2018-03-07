<template lang="pug">
  div
    section.hero.is-dark.is-large
      .hero-body
        .container
          h1.title Jim Jiaming Zhu
          h2.subtitle University of Waterloo
    content-block
    footer.footer
      .container
        .content.has-text-centered
          p Website by #[strong Jim J.Zhu]
</template>

<script>
import ContentBlock from '@/components/ContentBlock';

export default {
  name: 'Home',
  data() {
    return {
      msg: '',
    };
  },
  components: {
    'content-block': ContentBlock,
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
