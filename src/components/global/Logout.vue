<template lang="pug">
  div
    span Logging out ...
</template>

<script>
import Firebase from 'firebase';
export default {
  mounted() {
    Firebase.auth()
      .signOut()
      .then(() => {
        localStorage.setItem('authenticated', false);
        window.location.href = '/';
      });
  },
};
</script>
