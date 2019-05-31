<template lang="pug">
  section.section
    br
    img(src="@/assets/rin_side_eye.gif")
    h1.title Access Denied!
    router-link.button.is-warning.is-large(to='/login') Login
</template>

<script>
export default {};
</script>
<style lang="stylus" scoped>
img
  height 60vh
</style>
