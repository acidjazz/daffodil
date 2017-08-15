<template lang="pug">
#Services.page
  .container
    .section
      .inner
        img(src="/services/lap.jpg")
        .title WE ARE STORYTELLERS
        .copy We develop the creative messaging and visuals to make your brand story memorable.
    .section
      .inner
        img(src="/services/notes.jpg")
        .title WE ARE TEACHERS
        .copy We provide strategic guidance and inspire our clients to create thoughtful digital experiences driving toward their overall business goals.
    .section
      .inner
        img(src="/services/at.jpg")
        .title WE ARE STRATEGISTS
        .copy We educate our clients and provide them with the tools they need to use social and digital media in a more strategic way.
    .clear
  .clear

  .approach
    .container
      .left
        img(src="/services/smiles.jpg")
      .right
        .title OUR APPROACH
        .copy We are a boutique agency with the big agency experience you really want, yet the scrappiness you really need. Everything we do is driven by our passion to help brands tell their stories in more creative and thoughtful ways. Da odil Digital was born with the intention of doing things di erently. We create custom partnerships with the companies we work with and we pride ourselves on o ering killer strategic thinking, honest counsel, and one-of-a-kind industry experience.
      .clear

  .services
    .container
      .title OUR SERVICES
      .servicelist

        ul.service

          .title STRATEGY
          li Social Digital Content Strategy 
          li Social Digital Launch Strategy 
          li Event Social Media Strategy

          .title CONTENT & STORYTELLING
          li Social Digital Content Development 
          li Influencer & Ambassador Programs 
          li Customer Story Development
          li Copywriting
          li Graphic Design

        ul.service
          .title COMMUNITY MANAGEMENT
          li Community Building
          li Social Media Customer Service

          .title ANALYTICS
          li Brand Auditing
          li Competitive Insights
          li Monthly Metrics Reporting

        ul.service
          .title EDUCATION
          li Social Media 101 Trainings
          li Digital Thought Leadership Trainings

          .title ADVERTISING
          li Social Media Ad Strategy
          li Social Ad Campaign Optimization & Management
          li Social Ad Metrics Reporting
        .clear

  Bottom
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
#Services
  margin 160px 0 30px 0
  > .container > .section
    float left
    width 33.3333%
    &:last-child > .inner
      padding 0 0 0 0
    > .inner
      padding 0 20px 0 0
      > img
        width 100%
        height 400px
      > .title
        padding 30px 0 10px 0
        color celery
        font c3b
      > .copy
        font c1s
        line-height 20px
        padding 0 10px 0 0
  .approach
    background-color bridalHeath
    padding 60px 0
    margin 60px 0
    > .container
      > .left, > .right
        width calc(50% - 20px)
      > .left
        padding 0 20px 0 0
        float left
        > img
          width 100%
      > .right
        float right
        padding 0 0 0 20px
        > .title
          font h2
          color celery
          padding 50px 0 20px 0
        > .copy
          line-height 20px
  .services
    padding 60px 0
    > .container
      > .title
        font h2
        color celery
        text-align center
      > .servicelist
        width 700px
        margin auto
        > ul.service
          float left
          width 33%
          > .title
            font c1sb
            padding 20px 0 10px 0
          > li
            font c1s
            list-style-type circle
            margin 0 0 0 14px
            padding 0 20px 6px 0
</style>

