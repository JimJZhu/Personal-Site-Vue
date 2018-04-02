<template lang="pug">
  section.section
    .container
      h1#logo Investormate
      #response.response
        textarea.response_text(readonly) {{this.response}}
      form.input_container(v-on:submit="send")
        input#input(type='text' v-model="input" placeholder="Talk to me here...")
        button#go.btn GO


</template>

<script>
import axios from 'axios';

const accessToken = 'f5c36cec32f64f61a0fdf426d25fce51';
const investApiKey = 'YTG3TTH2PRUNCIVQ';
const baseUrl = 'https://api.api.ai/v1/';
export default {
  name: 'Investorbate',
  data() {
    return {
      input: '',
      histPosition: 0,
      hist: '',
      response: '',
    };
  },
  methods: {
    send() {
      axios({
        method: 'POST',
        url: `${baseUrl}query`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json; charset=utf-8',
        },
        data: JSON.stringify({
          query: this.input,
          lang: 'en',
          sessionId: 'yaydevdiner',
        }),
      }).then((response) => {
        this.callAPI(response.data);
      });
    },
    callAPI(val) {
      if (!val) {
        this.respond('', 'Please Type Something...1');
        return;
      }
      if (!val.result) {
        this.respond('', 'Please Type Something...2');
        return;
      }
      if (!val.result.parameters) {
        this.respond('', val.result.speech);
        return;
      }
      if (!val.result.parameters.symbol) {
        this.respond('', val.result.speech);
        return;
      }
      let params = val.result.parameters.params;
      params = params.split(',');
      let urlExt = '';
      for (let i = 0; i < params.length; i += 1) {
        urlExt += `&${params[i]}=${val.result.parameters[params[i]]}`;
      }
      urlExt = urlExt.substring(1);
      let location = val.result.parameters.location;
      location = location.split(',');
      const URL = `https://www.alphavantage.co/query?${urlExt}&apikey=${investApiKey}`;
      axios.get(URL).then((response) => {
        let data = response.data;
        for (let i = 0; i < location.length; i += 1) {
          if (location[i][0] === '$') {
            if (val.result.parameters[location[i].substring(1)]) {
              if (!response[val.result.parameters[location[i].substring(1)]]) {
                data = data[Object.keys(data)[0]];
              } else {
                data = data[val.result.parameters[location[i].substring(1)]];
              }
            } else {
              data = data[Object.keys(data)[0]];
            }
          } else if (!data[location[i]]) {
            data = data[Object.keys(data)[0]];
          } else {
            data = data[location[i]];
          }
        }
        const apiData = JSON.stringify(data, undefined, 2);
        this.respond(apiData, val.result.speech);
      });
    },
    respond(response, template) {
      if (response === '') {
        this.response = `[Investormate]: ${template}`;
      } else {
        this.response = `[Investormate]: ${template.replace(
          '$output',
          response.replace('"', '').replace('"', '.'),
        )}\n`;
      }
    },
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
