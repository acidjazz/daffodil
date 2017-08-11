<template lang="pug">
#Error
  Top(theme="dark")
  .inner
    i.fa.fa-exclamation-triangle
    p The page you are looking for can't be found.
  Bottom
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#Error
  > .inner
    text-align center
    padding 160px 0
    > i
      font-size 128px
      color celery
    > p
      font c2

</style>

<script>
import Top from '~/components/Top.vue'
import Bottom from '~/components/Bottom.vue'
export default { components: { Top, Bottom } }
</script>


