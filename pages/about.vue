<template lang="pug">
doctype
#About.page
  .banner(v-in-viewport)
    .container
      img(src="/about/banner.jpg")
  .people
    .container
      .block.block_left(v-in-viewport)
        .image
          img(src="/about/sarah.jpg")
          .lining
        .text
          .title.is-c2b.is-uppercase.is-celery the founders
          .copy.copy_sarah.is-c1s Sarah-Maeve has worked in the digital marketing industry since 2010, with a focus on social media. Before co-founding Daffodil Digital, she worked at agencies, specializing in social media and integrated digital brand strategies. She started her career in social media at VaynerMedia, and then worked as a digital strategist at The OutCast Agency. When Sarah-Maeve is not at her desk, she is likely escaping to ride horses. She might even be taking your call from atop a horse - you never know if she is on two or four feet!
          .links
            a.link.is-celery.is-c1s(href="https://www.linkedin.com/in/sarahmaevehershboyle/",target="_new") LINKEDIN
            a.link.is-celery.is-c1s(href="https://instagram.com/smhb/",target="_new") INSTAGRAM
      .block.block_right(v-in-viewport)
        .image
          img(src="/about/jenny.jpg")
          .lining
        .text
          .copy.copy_jenny.is-c1s Jenny Frank has been working in the social digital marketing space since 2006. Originally from the east coast, she worked on the sales marketing and social media teams at DailyCandy in New York City for 4 years.  Jenny then moved to the Bay Area and joined The OutCast Agency where she spent 5 years on the digital team. In her spare time, you’ll find Jenny doing pilates, seeking out her next slice of pizza, or planning the next trip with her husband. (check out #jfsjourneys on Instagram!)
          .links
            a.link.is-celery.is-c1s(href="https://www.linkedin.com/in/jennyfournierfrank/",target="_new") LINKEDIN
            a.link.is-celery.is-c1s(href="https://instagram.com/jennycandy/",target="_new") INSTAGRAM
      .block.block_right
      .clear

  .hero.is-bg-bridalHeath
    .container
      .title.is-h2.is-uppercase.is-celery.has-text-centered(v-in-viewport) our story
      .copy(v-in-viewport) It’s pretty simple. We worked together for over two years and realized we made a darn good team. So, it may sound cliché, but we were literally just two gals sipping red wine watching a Warriors game, when one said to the other: “let’s just do our own thing, you in?” And, that was that. We used the code name “Project Warrior” until we were offcially Daffodil Digital. The Warriors went on to win the 2015 National Championship that year, so we're pretty sure that was a good sign!

  .people
    .container
      .block.block_left(v-in-viewport)
        .text
          .title.is-c2b.is-uppercase.is-celery our team
          .copy.copy_sarah.is-c1s Mattie Mackes began her career in social and digital marketing in 2016, shortly after graduating from Chapman University in sunny Southern California. As a marketing associate, she focuses on the development and management of social media content programs for a variety of Daffodil Digital clients. In her free time, you can find Mattie out and about in the Bay Area - she’s always on the hunt for a new adventure (and a ‘grammable view)!
          .links
            a.link.is-celery.is-c1s(href="https://www.linkedin.com/in/mattiemackes/",target="_new") LINKEDIN
            a.link.is-celery.is-c1s(href="https://instagram.com/mattierose",target="_new") INSTAGRAM
        .image
          img(src="/about/mattie.jpg")
          .lining
      .block.block_right(v-in-viewport)
        .text
          .copy.copy_jenny.is-c1s Mo is our top dog pawtner at Daffodil Digital. His role at the company spans from providing comic relief, welcomed and unwelcomed kisses, constant crumb patrol, and he frequently stars in photo shoots. The guy works like a dog, but he has yet to be promoted because he tends to sleep (and snore!) through meetings - woof! Mo hails from Southern California, and after years of working in the field he opted for a desk job. When Mo is not at work, you can find him exploring the parks and beaches of San Francisco. Follow his adventures on Instagram - @mo_in_sf.
          .links
            a.link.is-celery.is-c1s(href="https://instagram.com/mo_in_sf",target="_new") INSTAGRAM
        .image
          img(src="/about/mo.jpg")
          .lining
      .block.block_right
      .clear

  .hero.is-bg-bridalHeath
    .container
      .title.is-h2.is-uppercase.is-celery.has-text-centered(v-in-viewport) why daffodil
      .copy(v-in-viewport) You may be wondering why we chose “Daffodil Digital." Well, there are a few reasons... One: the flower symbolizes new beginnings, something that felt right since we were about to embark on this new business journey together. Two: the flower blooms in the Spring, which was when we decided to go out on our own. Three: the center of the flower is in the shape of a trumpet. Trumpets amplify sound, and well, we amplify brand messages. Fun Fact: we’ve since been given the nickname “The Daffodils” by clients and friends. We like it, it just fits.

  .hero
    .container
      .title.is-h2.is-uppercase.is-celery.has-text-centered(v-in-viewport) our values
      .values(v-in-viewport)
        img(src="/about/values.svg")

</template>
<style lang="stylus">
@import '../assets/stylus/mixins'
json('../assets/colors.json')
#About
  .links
    > .link
      text-decoration none
  > .banner
    margin 160px 0 0 0
    inViewportStay(0)
    > .container
      > img
        width 100%
  > .people
    padding 60px 0
    > .container
      > .block
        inViewport(0)
        > .text > .copy
          line-height 20px
        clear both
        &.block_left > .text
          float left
          > .copy
            padding 0 90px 0 0
          > .links
            padding 30px 0 0 0
        &.block_left > .image
          float right
        &.block_right > .text
          float right
          > .copy
            padding 0 0 0 30px
          > .links
            padding 30px 0 0 90px
        &.block_right > .image
          float left
        > .text
          width 60%
          > .title
            padding 30px 0 20px 0
            letter-spacing 1px
          > .copy
            &.copy_jenny
              padding 90px 0 0 90px
          > .links
            > .link
              display block
              padding 0 0 10px 0
              text-transform uppercase
        > .image
          position relative
          width 40%
          > img
            width 100%
          > .lining
            position absolute
            fullsize()
            border: 1px solid celery 
            transform translate(20px, 20px)

  > .hero
    padding 60px 0
    > .container
      > .title
        inViewport(0)
      > .copy
        inViewport(0.2)
        padding 30px 0 0 0
        max-width 700px
        margin auto
        line-height 30px
      > .values
        inViewport(0.2)
        width 800px
        margin 60px auto
        > svg
          width inherit

@media all and (min-width: 1px) and (max-width: 1000px)
  #About
    > .people
      padding 60px 20px
    > .people > .container > .block
      &.block_left,
      &.block_right
        float none
        > .text,
        > .image
          > .lining
            display none
          float none
          width 100%
          padding 0
          > .copy
            padding 30px 0
          > .links
            padding 20px 0
    > .hero
      padding 60px 20px
    > .hero > .container > .values
      width 100%
      > img
        width inherit

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
  data () {
    return {
      values: {
        'RESPECT': 'We believe every successful relationship has a solid foundation of respect and appreciation.',
        'HARD WORK': 'We believe anything is possible with hard work and determination.',
        'GROWTH': 'We believe life is too short to be boring. Growth takes strength and courage, yet creates the most powerful rewards.',
        'FUN': 'We believe happiness is everything in life. If we’re not having fun, what’s the point?',
        'TRUST': 'We believe the best part- nerships are built from trust, which is created through honest, transparent communication.',
        'INSPIRATION': 'We believe great work and ideas come from those who are truly inspired by and excited about what they do everyday.',
      }
    }
  }
}
</script>


