<template lang="pug">
#Top
  .container
    nav
      .left
        .logo
          include ../static/vector/logo.svg
      .right
        ul.menu
          li: a home
          li: a services
          li: a portfolio
          li: a about
          li: a contact
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#Top
  top 0
  left 0
  position fixed
  width 100%
  height 500px
  z-index 10
nav
  margin 60px 0
  > .left
    float left
    > .logo
      width 140px
      height 72px
  > .right
    float right
    > ul.menu
      > li
        float left
        > a
          color white
          text-transform uppercase
          font c1m
          padding 0 30px 0 0
        &:last-child > a
          padding 0 0 0 0

</style>
