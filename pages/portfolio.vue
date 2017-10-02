<template lang="pug">
#Portfolio.page
  .clients.is-bg-bridalHeath
    .container
      .title.is-h2.is-celery.is-uppercase.has-text-centered our clients
      .clientlist
        .client(v-for="client in clients")
          .inner.is-bg-white.has-text-centered
            .image.is-bg-bridalHeath(:style="'background-image: url(/portfolio/' + client.image + ')'")
            .content
              .name.is-tapa.is-c1b {{ client.name }}
              p.is-c1s(v-for="service in client.services") {{ service }}
  .quotes
    .container.has-text-centered
      .curly.s-h1.is-celery "
      .quotelist
        .quote 
          .copy.is-c3 “The difference between working with Da odil Digital and other agencies is like the di erence between climbing Mount Everest with an experienced sherpa or a camp counselor — Da odils are the partners who will get you to the top.”
          .author.is-c2b.is-uppercase cindy waters
          .title.is-c1b.is-uppercase manager, intuit
</template>

<style lang="stylus">
@import '../assets/stylus/mixins.styl'
#Portfolio
  margin 160px 0 30px 0
  .clients
    padding 60px 0 20px 0
    > .container
      > .clientlist
        z-index 12
        text-align center
        display -webkit-box
        display flex
        flex-wrap wrap
        text-align center
        > .client
          width 33.3333%
          margin auto
          &:hover
            > .inner > .image
              opacity 0
              transform scale(0.95)
              transition opacity 0.3s ease-out, transform 0.3s ease-out
            > .inner > .content
              opacity 1
              transition opacity 0.3s ease-out
          > .inner
            position relative
            margin 10px
            padding 20px
            height 160px
            > .content
              opacity 0
              position absolute
              fullsize()
              transition opacity 0.3s ease-out
              padding 20px
            > .image
              background-size contain
              background-repeat no-repeat
              background-position 50% 50%
              position absolute
              padding 20px
              fullsize()
              transition opacity 0.6s ease-out, transform 0.6s ease-out

  .quotes
    padding 60px 0
    > .container
      > .curly
        font-size 100px
        line-height 100px
      > .quotelist
        > .quote
          > .copy
            margin auto
            max-width 600px
            line-height 40px

          > .author
            margin 20px 0

</style>

<script>
import pages from '~/assets/pages.js'
export default {
  transition (to, from) {
    if (!from) return 'slide-left'
    let toi = pages.indexOf(to.name)
    let fromi = pages.indexOf(from.name)
    return toi > fromi ? 'slide-right' : 'slide-left'
  },
  data () {
    return {
      clients: [{
        name: 'INTUIT INC., QUICK BOOKS SELF-EMPLOYED',
        image: 'Intuit_QuickBooks.png',
        services: [
          'Customer Story Development',
          'Social Media Content Development',
          'Influencer/Advocate Program Management',
          'Graphic Design',
        ],
      }, {
        name: 'SALESFORCE DESK.COM',
        image: 'salesforce.jpg',
        services: [
          'Social Media Content Strategy',
          'Community Management',
          'Social Media Metrics Program',
          'Social Media Advertising',
        ],
      }, {
        name: 'TIPPING POINT',
        image: 'TippingPointCommunity.png',
        services: [
          'Social Digital Content Strategy',
          'Social Media Content Creation Copywriting',
          'Monthly Metrics Reporting',
        ],
      }, {
        name: 'BARE SNACKS',
        image: 'BareLogo2016.png',
        services: [
          'Social Media Advertising Strategy',
          'Social Ad Campaign Optimization & Management',
          'Social Ads Metrics Reporting',
        ],
      }, {
        name: 'INTUIT',
        image: 'intuit_logo.png',
        services: [
          'Internal Social Media Trainings',
          'Social Media Content Development',
          'PR/Thought Leadership Strategy',
        ],
      }, {
        name: 'SURECALL',
        image: 'SureCall-Logo.png',
        services: [
          'Social Media Content Strategy',
          'Social Media Content Creation Copywriting',
          'Monthly Metrics Reporting',
        ],
      }, {
        name: 'FULL SUN',
        image: 'FullSunLogo.png',
        services: [
          'Social Digital Content Strategy',
          'Social Media Content Creation',
          'Copywriting Competitive Insights',
        ]
      }]
    }
  },
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/mixins.styl'
