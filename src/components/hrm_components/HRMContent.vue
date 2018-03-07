<template lang="pug">
  section.section.tile-parent.is-vertical
    .control.tile-child.box.is-vertical(v-for="question in questions")
      h1.subtitle
        | {{'   ' + question.question.substr(0, 2) + ' ' +
        | question.question.substr(2, question.question.length)}}
      label.radio.tile {{question.answer.a.substr(2, question.answer.a.length)}}
        input(type="radio" name="answer")
      label.radio.tile {{question.answer.b}}
        input(type="radio" name="answer")
      label.radio.tile {{question.answer.c}}
        input(type="radio" name="answer")
      label.radio.tile {{question.answer.d}}
        input(type="radio" name="answer")
      label.radio.tile {{question.answer.e}}
        input(type="radio" name="answer")

</template>

<script>
export default {
  name: 'HRMContent',
  props: ['questions'],
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
