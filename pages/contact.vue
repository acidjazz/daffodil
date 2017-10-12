<template lang="pug">
doctype
#Contact.page
  .banner(v-in-viewport)
    .container
      img(src="/contact/banner.jpg")

  .drop
    .container
      .section
        .inner
          .title.is-h2.is-celery.is-uppercase drop us a line
      .section
        .inner
          .copy Please take a minute to tell us about yourself, your project, and how you heard about us. Speed-dating style. We’re eager to get to know you.
      .section
        .inner
          .copy.is-uppercase new business inquiries
          a.copy(href="mailto:hello@daffodildigital.com") hello@daffodildigital.com
          .copy.is-uppercase general & job inquiries
          a.copy(href="mailto:hello@daffodildigital.com") hello@daffodildigital.com

      .clear

  .socialize
    .container
      .title.is-celery.is-uppercase.is-h3.has-text-centered let's socialize
      .gallery.has-centered-text
        .insta
        .insta
        .insta
        .insta

</template>


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
        > .inner
          padding 0 30px
        &:nth-child(2)
          line-height 20px
        &:nth-child(3)
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
      > .gallery
        padding 30px 0
        > .insta
          display inline-block
          width 200px
          height 200px
          background-color nobel
          margin-right 30px
          &:last-child
            margin-right 0px
</style>



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
  },
}
</script>
