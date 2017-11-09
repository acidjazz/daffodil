<template lang="pug">
#Portfolio.page
  .clients.is-bg-bridalHeath
    .container
      .title.is-h2.is-celery.is-uppercase.has-text-centered(v-in-viewport) our clients
      .clientlist
        .client(v-for="client in clients",v-in-viewport)
          .inner.is-bg-white.has-text-centered
            .image.is-bg-bridalHeath(:style="'background-image: url(/portfolio/' + client.image + ')'")
            .content
              .name.is-tapa.is-c1b {{ client.name }}
              p.is-c1s(v-for="service in client.services") {{ service }}
              a.title.is-c1sb.is-celery(v-if="client.study",:href="`/portfolio/case-study/${client.study}`",target="_new") VIEW CASE STUDY
  .quotes
    .container.has-text-centered
      .curly.s-h1.is-celery 
        img(src="/portfolio/quote.svg")
      .quotelist
        transition(name="quote",mode="out-in")
          .quote.quote-item(v-for="quote, index in quotes", v-if="index === current",:key="index")
            .copy.is-c3 "{{ quote.quote }}"
            .author.is-c2b.is-uppercase {{ quote.author }}
            .position.is-c1b.is-uppercase {{ quote.position }}

    .dots
      .dot(v-for="quote, index in quotes",@click="cquote(index)")
        .inner.is-bg-tapa(v-if="index  === current")
        .inner.is-bg-energy(v-else)
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/mixins.styl'
#Portfolio
  margin 160px 0 30px 0
  .clients
    padding 60px 0 20px 0
    > .container
      > .title
        inViewport(0)
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
          for i in 1..7
            &:nth-child({i})
              inViewport(0.1*i)
          &:last-child > .inner > .image
            background-size 50%
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
              top 25px
            > .image
              background-size 60%
              background-repeat no-repeat
              background-position 50% 50%
              position absolute
              fullsize()
              transition opacity 0.6s ease-out, transform 0.6s ease-out

  .quotes
    > .dots
      text-align center
      margin 40px 0
      > .dot
        cursor pointer
        display inline-block
        border-radius 50%
        padding 10px
        > .inner
          width 10px
          height 10px
          border-radius 50%
    padding 60px 0
    > .container
      > .curly
        width 60px
        height 60px
        margin auto auto 40px auto
      > .quotelist
        > .quote
          display flex
          flex-direction column
          height 300px
          > .copy
            margin auto
            max-width 600px
            line-height 40px
          > .author
            margin 0 0 20px 0


.quote-enter-active,
.quote-leave-active
  transition all 0.3s
  .copy
    transition all 0.2s ease-in-out 0s
  .author
    transition all 0.2s ease-in-out 0.05s
  .position
    transition all 0.2s ease-in-out 0.1s

.quote-enter,
.quote-leave-active
  .copy,
  .author,
  .position
    opacity 0
    transform translateX(-10px)

@media all and (min-width: 1px) and (max-width: 1000px)
  #Portfolio
    > .clients > .container > .clientlist > .client
      width 100%
    > .quotes
      padding 60px 20px 0px 20px
      > .container > .quotelist > .quote
        height 400px

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

  methods: {
    cquote (current) {
      this.current = current
      clearInterval(this.rotate)
    },
  },

  mounted () {

    this.rotate = setInterval(() => {
      this.current++
      if (this.current > (this.quotes.length - 1)) {
        this.current = 0
      }
    }, 6000)

  },

  destroyed () {
    clearInterval(this.rotate)
  },
  data () {
    return {
      rotate: false,
      clients: [{
        name: 'INTUIT QUICKBOOKS SELF-EMPLOYED',
        image: 'quickbooks-logo.png',
        services: [
          'Customer Story Development',
          'Social Media Content Development',
          'Influencer/Advocate Program Management',
          'Graphic Design',
        ],
        study: 'CaseStudy_Final-03.jpg',
      }, {
        name: 'SALESFORCE DESK.COM',
        image: 'logo-salesforce-desk_2100x1200.png',
        services: [
          'Social Media Content Strategy',
          'Community Management',
          'Social Media Metrics Program',
          'Social Media Advertising',
        ],
        study: 'CaseStudy_Final-04.jpg',
      }, {
        name: 'TIPPING POINT',
        image: 'tippingpoint-logo_2100x1200.png',
        services: [
          'Social Digital Content Strategy',
          'Social Media Content Creation Copywriting',
          'Monthly Metrics Reporting',
        ],
        study: 'CaseStudy_Final-01.jpg',
      }, {
        name: 'BARE SNACKS',
        image: 'BareLogo_2100x1200.png',
        services: [
          'Social Media Advertising Strategy',
          'Social Ad Campaign Optimization & Management',
          'Social Ads Metrics Reporting',
        ],
        study: 'CaseStudy_Final-05.jpg',
      }, {
        name: 'INTUIT',
        image: 'intuit_logo_2100x1200.png',
        services: [
          'Internal Social Media Trainings',
          'Social Media Content Development',
          'PR/Thought Leadership Strategy',
        ],
        study: 'CaseStudy_Final-02.jpg',
      }, {
        name: 'SURECALL',
        image: 'SureCall-Logo_2100x1200.png',
        services: [
          'Social Media Content Strategy',
          'Social Media Content Creation Copywriting',
          'Monthly Metrics Reporting',
        ],
      }, {
        name: 'FULL SUN',
        image: 'FullSunLogo_Updated_Blue_1200x1200.png',
        services: [
          'Social Digital Content Strategy',
          'Social Media Content Creation',
          'Copywriting',
          'Competitive Analysis',
        ]
      }],
      quotes: [{
        quote: 'The difference between working with Daffodil Digital and other agencies is like the difference between climbing Mount Everest with an experienced sherpa or a camp counselor — Daffodils are the partners who will get you to the top.',
        author: 'Cindy Waters',
        position: 'Manager, Intuit'
      }, {
        quote: 'Easy to get along with and willing to evolve with the needs of the business. Combination of scrappy "can-do" attitude with smart strategic thinking.',
        author: 'Steve Sharpe',
        position: 'Senior Manager of Corporate Communications, Intuit',
      }, {
        quote: 'I would recommend Daffodil Digital for any growing business that needs help getting their digital brand off the ground! We hired Daffodil because of our familiarity with the founders and their understanding of our brand. And, we wanted the ability to get more attention using a boutique partner versus a big firm.',
        author: 'Katy Williams',
        position : 'Tipping Point Community',
      }, {
        quote: 'Solid team who gives good, sound advice on questions of all sorts and brings good work to the table.',
        author: 'Jonathan Bacon',
        position: 'VP of Marketing, SureCall',
      }
      ],
      current: 0,
    }
  },
}
</script>
