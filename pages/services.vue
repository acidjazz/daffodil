<template lang="pug">
doctype
#Services.page
  .container
    .section(v-in-viewport)
      .inner
        img(src="/services/lap.jpg")
        .title.is-c3b WE ARE STORYTELLERS
        .copy We develop the creative messaging and visuals to make your brand story memorable.
    .section(v-in-viewport)
      .inner
        img(src="/services/notes.jpg")
        .title.is-c3b WE ARE TEACHERS
        .copy We educate our clients and provide them with the tools they need to use social media and and digital media in a more strategic way.

    .section(v-in-viewport)
      .inner
        img(src="/services/at.jpg")
        .title.is-c3b WE ARE STRATEGISTS
        .copy We provide strategic guidance and inspire our clients to create thoughtful digital experiences driving toward their overall business goals.
    .clear
  .clear

  .different
    .container
      .left(v-in-viewport)
        img(src="/services/different.jpg")
      .right
        .title.is-h2(v-in-viewport) WHY WE'RE DIFFERENT
        .copy(v-in-viewport) We’re a one-stop digital shop that specializes in digital marketing, social media management, and content strategy. But, we’re not just strategists or marketers. We’re creatives. We’re copywriters. We’re analysts. We’re project managers. We're designers. We’re communicators. We believe our unique blend of skills allow us to create stronger and more thoughtful social digital content programs for our partners.
      .clear

  .services
    .container
      .title.is-h2(v-in-viewport) OUR SERVICES
      .servicelist(v-in-viewport)

        ul.service
          .title.is-c1sb STRATEGY
          li.is-c1s Social Digital Content Strategy 
          li.is-c1s Social Digital Launch Strategy 
          li.is-c1s Event Social Media Strategy
          li.is-c1s PR/Thought Leadership Strategy

        ul.service
          .title.is-c1sb CONTENT & STORYTELLING
          li.is-c1s Social Digital Content Development 
          li.is-c1s Influencer & Ambassador Programs 
          li.is-c1s Customer Story Development
          li.is-c1s Copywriting
          li.is-c1s Graphic Design

        ul.service
          .title.is-c1sb COMMUNITY MANAGEMENT
          li.is-c1s Community Building
          li.is-c1s Social Media Customer Service

        ul.service
          .title.is-c1sb ANALYTICS
          li.is-c1s Brand Auditing
          li.is-c1s Competitive Insights
          li.is-c1s Monthly Metrics Reporting

        ul.service
          .title.is-c1sb EDUCATION
          li.is-c1s Social Media 101 Trainings
          li.is-c1s Digital Thought Leadership Trainings

        ul.service
          .title.is-c1sb ADVERTISING
          li.is-c1s Social Media Ad Strategy
          li.is-c1s Social Ad Campaign Optimization & Management
          li.is-c1s Social Ad Metrics Reporting
        .clear
      .border
      p(v-in-viewport) Don’t see a service listed above? Ask us about it! We consider Daffodil Digital to be a collective.
      p(v-in-viewport) We bring people together to do awesome work. If we don’t do it, we know someone who does. 
      p(v-in-viewport) We have partners that span a great deal of work outside of our core services.
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
#Services
  margin 160px 0 30px 0
  > .container > .section
    float left
    width 33.3333%
    &:nth-child(1)
      inViewportStay(0)
    &:nth-child(2)
      inViewportStay(0.1)
    &:nth-child(3)
      inViewportStay(0.2)
    &:last-child > .inner
      padding 0 0 0 0
    > .inner
      padding 0 20px 0 0
      > img
        width 100%
        height 400px
      > .title
        padding 30px 0 10px 0
        letter-spacing 1px
        color celery
      > .copy
        line-height 30px
        padding 0 10px 0 0
  .different
    background-color bridalHeath
    padding 60px 0
    margin 60px 0
    > .container
      > .left, > .right
        width calc(50% - 20px)
      > .left
        padding 0 20px 0 0
        float left
        inViewport(0.2)
        > img
          width 100%
      > .right
        float right
        padding 0 0 0 20px
        > .title
          color celery
          padding 30px 0 20px 0
          inViewport(0)
        > .copy
          line-height 30px
          inViewport(0.1)
  .services
    padding 60px 0
    > .container
      > .title
        color celery
        text-align center
        margin 0 0 30px 0
        inViewport(0)
      > .servicelist
        width 760px
        margin auto
        inViewport(0.1)
        > ul.service
          float left
          padding 0 20px
          width calc(33%-60px)
          height 220px
          > .title
            padding 20px 0 10px 0
          > li
            list-style-type circle
            margin 0 0 0 12px
            padding 0 0 6px 0
            line-height 20px

      > .border
        width 140px
        margin -30px auto 30px auto
        border 1px solid tusk
      > p
        text-align center
        inViewport(0)

@media all and (min-width: 1px) and (max-width: 1000px)
  #Services
    padding 0 20px
    > .container > .section
      float none
      width auto
    > .different
      > .container
        > .left, > .right
          width auto
        > .left
          float none
        > .right
          float none
    > .services
      > .container
        > .servicelist
          width auto
          > ul.service
            float none
            width auto
            height auto



</style>

