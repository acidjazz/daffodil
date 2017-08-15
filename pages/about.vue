<template lang="pug">
#About.page
  .container
    .hero
      img(src="/about/together.jpg")
    .people
      .block.block_left
        .text
          .title the founders
          .copy.copy_sarah Sarah-Maeve has worked in the digital marketing industry since 2010, with a focus on social media. Before co-founding Daodil Digital, she worked at agencies, specializing in social media and integrated digital brand strategies. She started her career in social media at VaynerMedia, and then worked as a digital strategist at The OutCast Agency. When Sarah-Maeve is not at her desk, she is likely escaping to ride horses. She might even be taking your call from atop a horse - you never know if she is on two or four feet!
          .links
            a.link LINKEDIN
            a.link INSTAGRAM
        .image
          img(src="/about/sarah1.jpg")
      .block.block_right
        .text
          .copy.copy_jenny Jenny Frank has been working in the social digital marketing space since 2006. Originally from the east coast, she worked on the sales marketing and social media teams at DailyCandy in New York City for 4 years.  Jenny then moved to the Bay Area and joined The OutCast Agency where she spent 5 years on the digital team. In her spare time, you’ll find Jenny doing pilates, seeking out her next slice of pizza, or planning the next trip with her husband. (check out #jfsjourneys on Instagram!)
          .links
            a.link LINKEDIN
            a.link INSTAGRAM
        .image
          img(src="/about/jenny1.jpg")
      .clear
// Mattie began her career in social and digital marketing in 2016, shortly after graduating from Chapman University in sunny Southern California.  As a marketing associate, she focuses on the development and management of social media content programs for a variety of Daodil Digital clients. In her free time, you can find Mattie out and about in the Bay Area - she’s always on the hunt for a new adventure (and a ‘grammable view)!
</template>
<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#About
  > .container
    > .hero
      margin 160px 0 0 0
      > img
        width 100%
    > .people
      padding 60px 0
      > .block
        clear both
        &.block_left > .text
          float left
          > .copy
            padding 0 30px 0 0
          > .links
            padding 30px 0 0 0
        &.block_left > .image
          float right
        &.block_right > .text
          float right
          > .copy
            padding 0 0 0 30px
          > .links
            padding 30px 0 0 30px
        &.block_right > .image
          float left
        > .text
          width 60%
          > .title
            font c2b
            text-transform uppercase
            color celery
            padding 30px 0 20px 0
          > .copy
            &.copy_jenny
              padding 90px 0 0 30px
          > .links
            > .link
              display block
              color celery
              padding 0 0 10px 0
              text-transform uppercase
        > .image
          width 40%
          > img
            width 100%

</style>

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


