<template lang="pug">
#Top
  .container
    nav
      .left
        .logo
          include ../static/vector/logo.svg
      .right
        ul.menu
          li: router-link(to="/") home
          li: router-link(to="/services") services
          li: router-link(to="/portfolio") portfolio
          li: router-link(to="/about") about
          li: router-link(to="/contact") contact
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
          text-decoration none
          text-transform uppercase
          font c1m
          padding 10px 15px
          transition background-color 0.2s ease-in-out 0.1s, color 0.2s ease-in-out 0s
          &:hover
            background-color white
            color celery
</style>
