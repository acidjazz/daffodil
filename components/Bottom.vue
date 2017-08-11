<template lang="pug">
#Bottom
  .container
    .left
      a.address(href="https://goo.gl/maps/oqrsiE51KfF2",target="_new")
        .line daffodil digital
        .line 1929 union st.
        .line san francisco ca 94103
      .socials
        a.social.social_instagram(href="powerj")
          i.fa.fa-lg.fa-instagram
        a.social.social_twitter(href="powerj")
          i.fa.fa-lg.fa-twitter
        a.social.social_facebook(href="powerj")
          i.fa.fa-lg.fa-facebook
        a.social.social_email(href="powerj")
          i.fa.fa-lg.fa-envelope
    .center
      .d
        include ../static/vector/d.svg

    .clear
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#Bottom 
  padding 30px 0
  background-color tapa
  color white
  > .container
    > .left
      float left
      > .address
        color white
        text-decoration none
        font c1s
        text-transform uppercase
        line-height 18px
      > .socials
        margin 10px 0 0 0
        > .social
          display block
          text-align center
          line-height 22px
          float left
          width 22px
          height 22px
          margin 0 10px 0 0
          padding 2px
          border-radius 3px
          color white
          transition color 0.3s ease-in-out
          &:hover
            color energy
    > .center
      width size = 80px
      margin auto
      > .d
        width size
        height size

</style>
