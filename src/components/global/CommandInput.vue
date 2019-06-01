<template lang="pug">
  div
    h2.subtitle
      | {{message}}
    b-field(
        custom-class="is-large"
        :type="{ 'is-danger': hasError }"
      )
      b-autocomplete(
          expanded
          type="text"
          placeholder=">"
          v-model="command"
          :keep-first="keepFirst"
          :open-on-focus="openOnFocus"
          :data="filteredDataObj"
          :loading="loading"
          :blur="fixError"
          :focus="fixError"
          size="is-large"
          @change.native="fixError"
          @keyup.enter.native="enterCommand"
        )
        template(slot-scope='props')
          h1
            | {{ props.option }}
    b-field(
      grouped
      group-multiline
    )
      p.control(v-for="command in commands")
        button.button(@click="applyCommand(command)") {{command}}

</template>

<script>
import Firebase from 'firebase';

export default {
  name: 'CommandInput',
  components: {},
  data() {
    return {
      commands: ['go', 'login', 'status'],
      links: [
        { url: '/', keywords: ['home'] },
        { url: '/about', keywords: ['about'] },
        { url: '/dev', keywords: ['dev', 'projects'] },
        { url: '/hrm', keywords: ['hrm'] },
        { url: '/envs.html', keywords: ['envs', 'env', 'envs200'] },
        { url: '/investorbate', keywords: ['invest', 'stocks'] },
        { url: '/reaction', keywords: ['rxn', 'reaction'] },
        { url: '/login', keywords: ['login', 'mph'] },
        { url: '/table', keywords: ['table'] },
        { url: '/notLoggedIn', keywords: ['status', 'away', 'jim'] },
      ],
      keepFirst: false,
      openOnFocus: false,
      command: '',
      loading: false,
      hasError: false,
      defaultMessage: 'What would you like to do?',
      message: 'What would you like to do?',
      displayName: '',
    };
  },
  methods: {
    fixError() {
      this.hasError = false;
      this.message = this.defaultMessage;
      if (this.displayName) {
        this.message = this.displayName + this.message.toLowerCase();
      }
    },
    applyCommand(command) {
      this.command = command;
    },
    enterCommand() {
      let command = this.command
        .toLowerCase()
        .trim()
        .split(' ');
      switch (command[0]) {
        case 'go': {
          let destination = command[1];
          if (destination in this.urlMapping) {
            let url = this.urlMapping[destination];
            // Some hardcode
            if (url == '/envs.html') {
              window.location.href = url;
            } else {
              this.$router.push(url);
            }
          } else {
            this.message = 'Invalid destination';
            this.hasError = true;
          }
          break;
        }
        case 'login':
        case 'mph':
          this.$router.push(`/login`);
          break;
        default:
          this.message = 'Invalid command';
          this.hasError = true;
          break;
      }
    },
  },
  mounted() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.displayName = `Hi ${user.displayName}, `;
        this.fixError();
      }
    });
  },
  computed: {
    filteredDataObj() {
      return this.commands.filter((option) => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.command.toLowerCase()) >= 0
        );
      });
    },
    urlMapping() {
      var result = this.links.reduce((map, link) => {
        for (var keyword of link.keywords) {
          map[keyword] = link.url;
        }
        return map;
      }, {});
      return result;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
a p
  text-align left
  color black
</style>
