<template lang="pug">
  section.section
    br
    img(src="@/assets/abuse.png")
    h1.title Already Logged In!
    router-link.button.is-warning.is-large(to='/') Back
</template>

<script>
export default {};
</script>
<style lang="stylus" scoped>
img
  height 60vh
</style>
