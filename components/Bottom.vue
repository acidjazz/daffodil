<template lang="pug">
#Bottom
  .container
    .left
      a.address(href="https://goo.gl/maps/oqrsiE51KfF2",target="_new")
        .line daffodil digital
        .line 1929 union st.
        .line san francisco ca 94123
      .socials
        a.social.social_instagram(href="https://instagram.com/daffodildigital/",target="_new")
          i.fa.fa-lg.fa-instagram
        a.social.social_email(href="mailto:hello@daffodildigital.com")
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
  background-color bridalHeath
  color tapa
  > .container
    > .left
      float left
      > .address
        color tapa
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
          color tapa
          transition color 0.3s ease-in-out
          &:hover
            color energy
    > .center
      width size = 60px
      margin 20px auto 0 auto
      > .d
        width size
        height size
@media all and (min-width: 1px) and (max-width: 1000px)
  #Bottom
    > .container
      > .left
        margin-left 20px
      > .center
        float right
        margin-right 20px

</style>
