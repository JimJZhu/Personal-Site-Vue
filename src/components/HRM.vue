<template lang="pug">
  section.section
    br
    h1.title.is-1 HRM
    .columns
      .column.is-one-quarter
        .tile-ancestor
          hrm-panel.tile.is-vertical(:chapters="chapters" v-on:clicked="selectChapter($event)")
      .column
        .tile-ancestor
          hrm-content.tile(:questions="currentQuestions")

</template>

<script>
import HRMPanel from '@/components/hrm_components/HRMPanel';
import HRMContent from '@/components/hrm_components/HRMContent';

export default {
  name: 'HRM',
  data() {
    return {
      chapters: [],
      allQuestions: [],
      currentQuestions: [],
      status: '',
    };
  },
  created() {
    this.processHRM();
  },
  methods: {
    selectChapter(chapter) {
      this.currentQuestions = this.allQuestions[chapter - 1];
    },
    processHRM() {
      this.status = 'Loading...';
      for (let i = 1; i <= 17; i += 1) {
        this.allQuestions.push(this.fetchChapter(i));
        this.chapters.push(i);
        // console.log(this.chapters);
      }
      this.status = 'Done';
      this.currentQuestions = this.allQuestions[0];
    },
    fetchChapter(chapter) {
      // eslint-disable-next-line
      const res = require(`raw-loader!@/assets/hrm/c${chapter}.txt`);
      const body = res.split(/\.|\?|\s|:|A\)B\)C\)D\)E\)/);
      const QUESTION_STATE = 0;
      const ANSWER_STATE_A = 1;
      const ANSWER_STATE_B = 2;
      const ANSWER_STATE_C = 3;
      const ANSWER_STATE_D = 4;
      const ANSWER_STATE_E = 5;
      const CORRECT_ANSWER_STATE = 6;
      const INITIAL_STATE = -1;
      const questions = [];
      let question = {};
      let questionNum = 1;
      let state = INITIAL_STATE;
      for (let i = 0; i < body.length; i += 1) {
        const token = body[i];
        if (token.includes(`${questionNum})`)) {
          if (state !== INITIAL_STATE) {
            // Cleaning the answers
            question.answer.e = question.answer.e.substr(
              0,
              question.answer.e.length - 8,
            );
            question.answer.correct = question.answer.correct.substr(0, 1);
            if (question.answer.a) {
              // Excludes t/f
              questions.push(question);
              // console.log(question);
            }
          }
          question = {
            id: questionNum,
            question: '',
            answer: {
              a: '',
              b: '',
              c: '',
              d: '',
              e: '',
              correct: '',
            },
          };
          questionNum += 1;
          state = QUESTION_STATE;
        } else if (token.includes('A)')) {
          state = ANSWER_STATE_A;
        } else if (token.includes('B)')) {
          state = ANSWER_STATE_B;
        } else if (token.includes('C)')) {
          state = ANSWER_STATE_C;
        } else if (token.includes('D)')) {
          state = ANSWER_STATE_D;
        } else if (token.includes('E)')) {
          state = ANSWER_STATE_E;
        } else if (token.substr(1) === 'Explanation') {
          state = CORRECT_ANSWER_STATE;
        }
        switch (state) {
          case QUESTION_STATE:
            question.question += `${token.match(/(\d{0,1}.*)/i)[1]} `;
            if (question.question.includes('A)B)')) {
              question.question = question.question.substr(10);
            }
            break;
          case ANSWER_STATE_A:
            question.answer.a += `${token} `;
            break;
          case ANSWER_STATE_B:
            question.answer.b += `${token} `;
            break;
          case ANSWER_STATE_C:
            question.answer.c += `${token} `;
            break;
          case ANSWER_STATE_D:
            question.answer.d += `${token} `;
            break;
          case ANSWER_STATE_E:
            question.answer.e += `${token} `;
            break;
          case CORRECT_ANSWER_STATE:
            question.answer.correct += `${token.substr(0, 1)}`;
            break;
          default:
            break;
        }
      }
      return questions;
    },
  },
  components: {
    'hrm-panel': HRMPanel,
    'hrm-content': HRMContent,
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
