<template lang="pug">
  section.section
    h1.title.is-1 HRM Chapter Quiz
    .columns
      .column.is-one-quarter
        .tile-ancestor
          hrm-panel.tile.is-vertical(:chapters="chapters"
            v-on:clicked="selectChapter($event)"
            v-on:searched="searched($event)")
      .column
        .tile-ancestor
          hrm-content.tile.is-vertical(:questions="currentQuestions"
            :search="search")

</template>

<script>
import HRMPanel from '@/components/hrm_components/HRMPanel';
import HRMContent from '@/components/hrm_components/HRMContent';

export default {
  name: 'HRM',
  components: {
    'hrm-panel': HRMPanel,
    'hrm-content': HRMContent,
  },
  data() {
    return {
      chapters: [],
      allQuestions: [],
      currentQuestions: [],
      status: '',
      search: '',
      defaultQuestion: [
        {
          question:
            '  Click on a chapter on the left begin.'
            + ' Use the search feature to search for keywords in each chapter.',
          answer: {
            correct: 'none',
            a: '',
            b: '',
            c: '',
            d: '',
            e: '',
          },
        },
        {
          question: '  You can test the features on these dummy questions.',
          answer: {
            correct: 'none',
            a: '',
            b: '',
            c: '',
            d: '',
            e: '',
          },
        },
        {
          question: '  What is the longest river in Africa?',
          answer: {
            correct: 'C',
            a: '  a) Kilimanjaro',
            b: 'b) Mawenzi',
            c: 'c) Nile',
            d: 'd) Wakanda',
            e: 'e) Egyptian',
          },
        },
        {
          question: '   Who killed Tupac?',
          answer: {
            correct: 'F',
            a: '  a) Biggie',
            b: 'b) Illuminati',
            c: 'c) FBI',
            d: 'd) Steve Harvey',
            e: 'e) Bush',
          },
        },
      ],
    };
  },
  created() {
    this.processHRM();
  },
  methods: {
    searched(s) {
      this.search = s;
    },
    selectChapter(chapter) {
      if (chapter === 0) {
        this.currentQuestions = this.defaultQuestion;
      } else {
        this.currentQuestions = this.allQuestions[chapter - 1];
      }
    },
    processHRM() {
      this.status = 'Loading...';
      for (let i = 1; i <= 17; i += 1) {
        this.allQuestions.push(this.fetchChapter(i));
        this.chapters.push(i);
      }
      this.status = 'Done';
      this.currentQuestions = this.defaultQuestion;
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

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
h1
  margin 1rem

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
