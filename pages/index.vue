<template lang="pug">
#Home.page
  .hero
    p amplifying your brand message
  .body
    .container
      .columns
        .column helping brands tell their stories in strategic ways.
        .column
          .title what we do
          .copy Daffodil Digital is a digital communications agency. We work with small companies who are dreaming big and big brands with a hunger to stay current. Fueled by our love for what we do every day (and good co ee!), we are here to help create, manage, and improve the digital footprint of all of our partners.
      .clear
      .inner
        .title why daffodil
        .copy The daffodil flower symbolizes new beginnings, something that felt right since we were about to embark on this new business journey together. The flower blooms in the spring, which was when we took the leap and decided to go o  on our own. The center of the flower is in the shape of a trumpet. Trumpets amplify sound, and we set out to amplify our clients' messages.
        .buttons
          .button: router-link(to="/services") services
          .button: router-link(to="/portfolio") portfolio
          .button: router-link(to="/about") about
</template>

<script>
import pages from '~/assets/pages.js'
export default {
  transition (to, from) {
    if (!from) return 'slide-left'
    let toi = pages.indexOf(to.name)
    let fromi = pages.indexOf(from.name)
    return toi > fromi ? 'slide-right' : 'slide-left'
  }
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/mixins.styl'
#Home
  > .hero
    position relative
    background-image url(/home/banner.jpg)
    background-size cover
    background-position 50% 50%
    // height 100vh
    height 600px
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

  > .body
    margin 60px 0
    background url('/vector/daffodil.svg')
    background-repeat no-repeat
    background-size 30%
    background-position 50% 50%
    > .container > .columns
      > .column:first-child
        float left
        width 250px
        font c2b
        text-transform uppercase
        color celery
        text-align right
        line-height 30px
        padding 20px 30px 0 0
      > .column:nth-child(2)
        float left
        padding 0 0 0 30px
        border-left 1px solid celery
        width 580px
        > .title
          font c1b
          text-transform uppercase
          padding 0 0 20px 0
        > .copy
          line-height 20px

    > .container > .inner
      text-align center
      > .title
        font h2
        color celery
        text-transform uppercase
        text-align center
        padding 60px 0 30px 0
      > .copy
        width 640px
        margin auto
        line-height 30px
      .buttons
        margin 60px auto
        width 800px
        text-align center
        > .button
          margin auto
          display inline-block
          background-color celery
          width 140px
          height 60px
          padding 10px
          margin-right 75px
          &:last-child
            margin-right 0px
          &:hover > a
            background-color white
            color celery
          > a
            display block
            text-decoration none
            border 1px solid white
            line-height 60px
            color white
            text-transform uppercase
            transition background-color 0.2s ease-in-out 0.1s, color 0.2s ease-in-out 0s

</style>
