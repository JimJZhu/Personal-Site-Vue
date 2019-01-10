<template lang="pug">
  div
    section.section
      .container
        h1.title Work Experience
        single-work-block(v-for="workplace in workplaces", v-bind:key="workplace.date", v-bind:data="workplace")
</template>

<script>
import SingleWorkBlock from '@/components/home_components/SingleWorkBlock';

export default {
  name: 'WorkSection',
  components: {
    'single-work-block': SingleWorkBlock,
  },
  data() {
    return {
      workplaces: [
        {
          date: 'January 2019 - Present',
          company: 'Splunk',
          position: 'Software Engineering Intern',
          points: [
            'TBA 🙏',
          ],
        },
        {
          date: 'May 2018 - August 2018',
          company: 'IBM iX',
          position: 'Software Engineering Intern',
          points: [
            'Led the IBM iX team in augmented reality development; assisted multiple teams with AR solutions including a major Canadian sporting event, a government agency, and a major energy company',
            'Created an extensible framework for ARKit on iOS using multithreading and delegates to maximize performance',
            'Developed an augmented reality mapping and navigation system for a sports venue',
            'Prototyped a Snapchat-style AR face-filter feature using Dlib’s facial landmark detection and ARKit',
          ],
        },
        {
          date: 'September 2017 - December 2017',
          company: 'Hubdoc',
          position: 'Software Engineering Intern',
          points: [
            'Maintained 100+ document fetching micro-services, increased success-rate from 59% to 83%',
            'Added new features to an internal analytics dashboard using Backbone.js, C3, Express, and PostgreSQL',
            'Created a chrome plugin to dynamically test and inject dashboard features, speeding up development time dramatically',
          ],
        },
        {
          date: 'Jan 2017 - April 2017',
          company: 'SAP',
          position: 'Software Engineering Intern',
          points: [
            'Constructed an Arduino board to analyze vibrations using a piezoelectric sensor and event-stream processing',
            'Worked on a backend written with Java; implemented an endpoint to connect custom Java code with R modules',
            'Developed an analytics dashboard for IoT devices following the modbus protocol using SAP PCo and SAP MII',
            'Created a custom Java app to stress-test and analyze OData endpoints, used by teams in Toronto, Paris, and Palo Alto',
          ],
        },
        {
          date: 'May 2016 - August 2016',
          company: 'MHS',
          position: 'Software Developer',
          points: [
            'Developed the backend for a health assessment’s scoring and report generation using C# and Microsoft SQL Server',
            'Optimized database calls by moving business logic out of SQL code and removing redundant queries, resulting in code that is cleaner, less coupled, and 500% faster',
            'Built an internal cross-platform communications and metrics app using Ionic, Azure Authentication, and Cosmos DB',
          ],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
