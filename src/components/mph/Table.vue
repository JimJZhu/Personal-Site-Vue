<template lang="pug">
    section.section
      .tile.is-parent(v-for="book in books")
        .tile.is-child.box {{book.author}}
      .panel.panel-default
        .panel-heading
          h3.panel-title Add New Books
        .panel-body
          form#form.form-inline(v-on:submit.prevent='addBook')
            .form-group
              label(for='bookTitle') Title:
              input#bookTitle.form-control(type='text', v-model='newBook.title')
            .form-group
              label(for='bookAuthor') Author:
              input#bookAuthor.form-control(type='text', v-model='newBook.author')
            .form-group
              label(for='bookUrl') Url:
              input#bookUrl.form-control(type='text', v-model='newBook.url')
            input.btn.btn-primary(type='submit', value='Add Book')
</template>

<script>
// const db = this.$firebase.database();
// const booksRef = db.ref('site');
// export default {
//   name: 'Table',
//   firebase: {
//     books: booksRef,
//   },
//   data() {
//     return {
//       newBook: {
//         title: '',
//         author: '',
//         url: 'http://',
//       },
//     };
//   },
//   methods: {
//     addBook() {
//       booksRef.push(this.newBook);
//       this.newBook.title = '';
//       this.newBook.author = '';
//       this.newBook.url = 'http://';
//     },
//   },
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
