<template lang="pug">
#Top(:class="{ light: $route.name === 'index', dark: $route.name !== 'index' }")
  .container
    nav
      .left
        router-link.logo(to="/")
          include ../static/vector/logo.svg
      .right
        ul.menu
          li: router-link(to="/",:class="{active: $route.name === 'index'}") home
          li: router-link(to="/services",:class="{active: $route.name === 'services'}") services
          li: router-link(to="/portfolio",:class="{active: $route.name === 'portfolio'}") portfolio
          li: router-link(to="/about",:class="{active: $route.name === 'about'}") about
          li: router-link(to="/contact",:class="{active: $route.name === 'contact'}") contact
</template>

<script>
export default { props: ['theme'], }
</script>

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
  .cls-1, .cls-2
    transition fill 2s ease-in-out
  &.light
    .cls-1, .cls-2
      fill white
    li > a
      color white
      &.active
        border-bottom 2px solid white
      &:hover:not(.active)
        border-bottom 2px solid rgba(white, 0.5)
  &.dark
    .cls-1, .cls-2
      fill celery
    li > a
      color celery
      &:hover:not(.active)
        border-bottom 2px solid rgba(celery, 0.5)
      &.active
        border-bottom 2px solid celery
nav
  margin 60px 0
  > .left
    float left
    > .logo
      display block
      width 140px
      height 72px
  > .right
    float right
    > ul.menu
      > li
        float left
        > a
          text-decoration none
          text-transform uppercase
          font c1m
          padding 10px 10px
          margin 0 10px
          border-bottom 2px solid rgba(red, 0)
          transition border 0.2s ease-in-out 0.1s, color 0.3s ease-in-out 0.2s
</style>
