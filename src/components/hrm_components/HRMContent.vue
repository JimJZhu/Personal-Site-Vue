<template lang="pug">
  ul.section.tile.is-parent.is-vertical
    .notification.float.is-info
      p.title {{correctCounter}}/{{filteredQuestions.length}}
      progress.progress.is-danger.is-small(v-bind:value="correctCounter" v-bind:max="filteredQuestions.length")
    li.control.tile.is-parent.box.is-vertical(v-for="(question, key) in filteredQuestions")
      h1.subtitle.tile
        | {{question.question.substr(0, 2) + ' ' +
        | question.question.substr(2, question.question.length)}}
      label.radio.tile(v-show="question.answer.correct !== 'none'"
      v-bind:class="isCorrect(responses[key], 'A', question.answer.correct)")
        | #[input(type="radio" :name="'answer' + key" v-model="responses[key]" value="A" @click="increment(responses[key], 'A', question.answer.correct)")]
        | {{question.answer.a.substr(2, question.answer.a.length)}}
      label.radio.tile(v-show="question.answer.correct !== 'none'"
      v-bind:class="isCorrect(responses[key], 'B', question.answer.correct)")
        | #[input(type="radio" :name="'answer' + key" v-model="responses[key]" value="B" @click="increment(responses[key], 'B', question.answer.correct)")]
        | {{question.answer.b}}
      label.radio.tile(v-show="question.answer.correct !== 'none'"
      v-bind:class="isCorrect(responses[key], 'C', question.answer.correct)")
        | #[input(type="radio" :name="'answer' + key" v-model="responses[key]" value="C" @click="increment(responses[key], 'C', question.answer.correct)")]
        | {{question.answer.c}}
      label.radio.tile(v-show="question.answer.correct !== 'none'"
      v-bind:class="isCorrect(responses[key], 'D', question.answer.correct)")
        | #[input(type="radio" :name="'answer' + key" v-model="responses[key]" value="D" @click="increment(responses[key], 'D', question.answer.correct)")]
        | {{question.answer.d}}
      label.radio.tile(v-show="question.answer.correct !== 'none'"
      v-bind:class="isCorrect(responses[key], 'E', question.answer.correct)")
        | #[input(type="radio" :name="'answer' + key" v-model="responses[key]" value="E" @click="increment(responses[key], 'E', question.answer.correct)")]
        | {{question.answer.e}}

</template>

<script>
export default {
  name: 'HRMContent',
  props: ['questions', 'search'],
  data() {
    return {
      responses: [],
      correctCounter: 0,
    };
  },
  watch: {
    questions() {
      this.responses = [];
      this.correctCounter = 0;
    },
  },
  created() {},
  methods: {
    isCorrect(index, response, correct) {
      if (index === response) {
        if (response === correct) {
          return 'correct';
        }
        return 'incorrect';
      }
      return '';
    },
    increment(index, response, correct) {
      if (!index) {
        if (response === correct) {
          this.correctCounter += 1;
        }
      } else if (response === correct) {
        if (index !== response) {
          this.correctCounter += 1;
        }
      } else if (index === correct) {
        this.correctCounter -= 1;
      }
    },
  },
  computed: {
    filteredQuestions() {
      return this.questions.filter(
        question =>
          question.question.toLowerCase().includes(this.search) ||
          question.answer.a.toLowerCase().includes(this.search) ||
          question.answer.b.toLowerCase().includes(this.search) ||
          question.answer.c.toLowerCase().includes(this.search) ||
          question.answer.d.toLowerCase().includes(this.search) ||
          question.answer.e.toLowerCase().includes(this.search),
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0
  .float
    position fixed
    z-index 1000
    bottom 0px
    right 2rem
  li
    display inline-block
    margin 0 10px
  label
    margin 0.25rem 0.5rem
    input
      margin 0.2rem 0.5rem
a
  color #42b983
.correct
  color #21885a
  font-weight 700
  background-color #e0ffdb
.incorrect
  color red
  font-weight 700
  background-color #ffdbdb

</style>
