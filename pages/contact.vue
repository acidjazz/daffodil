<template lang="pug">
doctype
#Contact.page
  .banner(v-in-viewport)
    .container
      img(src="/contact/banner.jpg")

  .drop
    .container
      .section(v-in-viewport)
        .inner
          .title.is-h2.is-celery.is-uppercase drop us a line
      .section(v-in-viewport)
        .inner
          .copy Please take a minute to tell us about yourself, your project, and how you heard about us. Speed-dating style. We’re eager to get to know you.
      .section(v-in-viewport)
        .inner
          .copy.is-uppercase new business inquiries
          a.copy(href="mailto:dd@daffodildigital.com") dd@daffodildigital.com
          .copy.is-uppercase general & job inquiries
          a.copy(href="mailto:hello@daffodildigital.com") hello@daffodildigital.com

      .clear

  .socialize
    .container
      .title.is-celery.is-uppercase.is-h3.has-text-centered(v-in-viewport) let's socialize
      .gallery.has-centered-text
        a(v-for="item in response.data",:href="item.link",target="_new",v-in-viewport)
          img(:src="item.images.square.url")

</template>

<script>
import Vue from 'vue'
import pages from '~/assets/pages.js'
import inViewportDirective from 'vue-in-viewport-directive'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
export default {

  directives: { 'in-viewport': inViewportDirective },

  transition (to, from) {
    if (!from) return 'slide-left'
    let toi = pages.indexOf(to.name)
    let fromi = pages.indexOf(from.name)
    return toi > fromi ? 'slide-right' : 'slide-left'
  },

  created () {

    const Instafeed = require('instafeed.js')

    let feed = new Instafeed({
      get: 'user',
      userId: this.userId,
      accessToken: this.token,
      limit: 4,
      sortBy: 'most-recent',
      resoluton: 'square',
      template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
      success: (response) => {
        this.response = response
        response.data.forEach((e) => {
          e.images.square = {
            url: e.images.thumbnail.url,
            // url: e.images.thumbnail.url.replace(/vp.*\/.{32}\/.{8}\//, '').replace('150x150', '600x600'),
            width: 600,
            height: 600,
          }
        })
      }
    })

    feed.run()
  },

  data () {
    return {
      token: '2036103420.1677ed0.e23023ba875147569736ee7f05007ece',
      userId: 2036103420,
      response: {},

    }
  },
}

</script>


<style lang="stylus">
@import '../assets/stylus/mixins'
json('../assets/colors.json')
#Contact
  > .banner
    margin 160px 0 0 0
    inViewportStay(0)
    > .container
      > img
        width 100%
  > .drop
    padding 60px 0
    > .container
      > .section
        float left
        width 33%
        for i in 1..3
          &:nth-child({i})
            inViewport(0.1*i)
        > .inner
          padding 0 20px
          > .title
            letter-spacing 1px
        &:nth-child(2)
          line-height 30px
        &:nth-child(3)
          text-align right
          > .inner
            > .copy
              color tapa
              display block
              text-decoration none
              padding 0 0 10px 0
              &:nth-child(2)
                padding 0 0 40px 0

  > .socialize
    padding 60px 0
    > .container
      > .title
        letter-spacing 2px
        inViewport(0)
      > .ignore#instafeed
        display none !important
      > .gallery
        padding 30px 0
        > a
          display inline-block
          width 200px
          height 200px
          background-color nobel
          margin-right 30px
          for i in 1..4
            &:nth-child({i})
              inViewport(0.1*i)
          > img
            width inherit
            height inherit
          &:last-child
            margin-right 0px

@media all and (min-width: 1px) and (max-width: 1000px)
  #Contact
    > .drop
      > .container
        > .section
          width 100%
          &:nth-child(3)
            text-align center
          float none
          text-align center
          > .inner
            padding 20px
    > .socialize
      > .container
        > .gallery
          > a
            display block
            margin 30px auto
            &:last-child
              margin 30px auto

</style>


