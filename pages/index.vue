<template lang="pug">
doctype
#Home.page
  .hero
    p(v-in-viewport) let's start something awesome.
  .body
    .container
      .columns
        .column(v-in-viewport) helping brands tell their stories in smarter ways.
        .column(v-in-viewport)
          .title what we do
          .copy Daffodil Digital is a digital communications agency. We work with small companies, who are dreaming big and big brands with a hunger to stay current. Fueled by our love for what we do every day (and good coffee!), we are here to help create, manage, and improve the digital footprint of all of our partners.
      .clear
      .inner
        .title(v-in-viewport) how we work
        .copy(v-in-viewport) We are a boutique agency with the big agency experience you really want, yet the scrappiness you really need. Everything we do is driven by our passion to help brands tell their stories in more creative and thoughtful ways. Daffodil Digital was born with the intention of doing things differently. We create custom partnerships with the companies we work with and we pride ourselves on offering killer strategic thinking, honest counsel, and one-of-a-kind industry experience.
        .buttons
          .button(v-in-viewport): router-link(to="/services") services
          .button(v-in-viewport): router-link(to="/portfolio") portfolio
          .button(v-in-viewport): router-link(to="/about") about
</template>

<script>
import pages from '~/assets/pages.js'
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
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
      width 920px
      height 150px
      top 50%
      left 50%
      margin-top -75px
      margin-left -460px
      inViewport(0.2)

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
        letter-spacing 1px
        color celery
        text-align right
        line-height 40px
        padding 0 30px 0 0
        margin-top -10px
        inViewport(0)
      > .column:nth-child(2)
        float left
        padding 0 0 0 30px
        border-left 1px solid celery
        width 580px
        inViewport(0.2)
        > .title
          font c1b
          text-transform uppercase
          padding 0 0 20px 0
        > .copy
          line-height 30px

    > .container > .inner
      text-align center
      > .title
        font h2
        color celery
        text-transform uppercase
        text-align center
        padding 60px 0 30px 0
        inViewport(0)
      > .copy
        width 640px
        margin auto
        line-height 30px
        inViewport(0.2)
      .buttons
        margin 60px auto
        width 800px
        text-align center
        > .button
          margin auto
          display inline-block
          background-color celery
          width 120px
          height 40px
          padding 10px
          margin-right 75px
          letter-spacing 1px
          &:nth-child(1)
            inViewport(0)
          &:nth-child(2)
            inViewport(0.1)
          &:nth-child(3)
            inViewport(0.2)
          &:last-child
            margin-right 0px
          &:hover > a
            background-color white
            color celery
          > a
            display block
            text-decoration none
            border 1px solid white
            line-height 40px
            color white
            text-transform uppercase
            transition background-color 0.2s ease-in-out 0.1s, color 0.2s ease-in-out 0s

@media all and (min-width: 1px) and (max-width: 1000px)
  #Home
    > .hero
      height 100vh
      > p
        font h2
        width auto
        margin auto
        top 240px
        left 0
    > .body
      padding 0 20px
      > .container > .columns
        > .column:first-child
          float none
          width auto
          text-align center
          padding 0 0 40px 0
        > .column:nth-child(2)
          float none
          padding 0
          width auto
          border-left none
      > .container > .inner
        > .copy
          width auto
        > .buttons
          width auto
          > .button
            margin 20px auto
            display block
            &:last-child
              margin auto



</style>
