<template lang="pug">
  #Home
    Top
    .hero
      p amplifying your brand message
</template>

<script>
import Top from '~/components/Top.vue'
export default {
  components: {
    Top
  }
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#Home
.hero
  position relative
  background-image url(/home/banner.jpg)
  background-size cover
  background-position 50% 50%
  height 100vh
  // height 600px
  > p
    position absolute
    color white
    font h1
    letter-spacing 2px
    text-align center
    text-transform uppercase
    width 720px
    height 150px
    top 50%
    left 50%
    margin-top -75px
    margin-left -360px
</style>
