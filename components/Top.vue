<template lang="pug">
#Top(:class="{ light: $route.name === 'index', dark: $route.name !== 'index' , mobile: burger }")
  .container
    nav
      .left
        router-link.logo(@click.native="burger = false",to="/")
          include ../static/vector/logo.svg
      .right
        ul.menu
          li: router-link(@click.native="burger = false",to="/",:class="{active: $route.name === 'index'}") home
          li: router-link(@click.native="burger = false",to="/services",:class="{active: $route.name === 'services'}") services
          li: router-link(@click.native="burger = false",to="/portfolio",:class="{active: $route.name === 'portfolio'}") portfolio
          li: router-link(@click.native="burger = false",to="/about",:class="{active: $route.name === 'about'}") about
          li: router-link(@click.native="burger = false",to="/contact",:class="{active: $route.name === 'contact'}") contact
  .burger(@click="burger = !burger",:class="{ on: burger }")
    .lines
      span
      span
      span
      span
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#Top
  top 0
  left 0
  position fixed
  width 100%
  height 140px
  z-index 10
  .cls-1, .cls-2
    transition fill 2s ease-in-out
  &.light
    position absolute
    .cls-1, .cls-2
      fill white
    li > a
      color white
      &.active
        border-bottom 2px solid white
      &:hover:not(.active)
        border-bottom 2px solid rgba(white, 0.5)
  &.dark
    background-color rgba(white, 0.96)
    .cls-1, .cls-2
      fill celery
    li > a
      color celery
      &:hover:not(.active)
        border-bottom 2px solid rgba(celery, 0.5)
      &.active
        color nobel
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
          letter-spacing 1px
          padding 10px 10px
          margin 0 10px
          border-bottom 2px solid rgba(red, 0)
          transition border 0.2s ease-in-out 0.1s, color 0.3s ease-in-out 0.2s

.burger
  display none
  cursor pointer
  position fixed
  transition z-index 0.2s ease-in-out 0s, transform 0.25s ease-in-out
  top 20px
  right 20px
  clear both
  width 60px
  height 40px
  padding 10px
  z-index 250
  &.on > .lines > span
    background-color white
  &.on > .lines > span:nth-child(1)
    top 18px
    width 0%
    left 50%
  &.on > .lines > span:nth-child(2)
    transform rotate(45deg)
  &.on > .lines > span:nth-child(3)
    transform rotate(-45deg)
  &.on > .lines > span:nth-child(4)
    top 18px
    width 0%
    left 50%

  > .lines
    position relative
    width 100%
    height 100%
    > span
      display block
      position absolute
      background-color tapa
      height 4px
      border-radius 9px
      width 100%
      opacity 1
      left 0
      transition all 0.25s ease-in-out
      &:nth-child(1)
        top 0px
      &:nth-child(2),
      &:nth-child(3)
        top 14px
      &:nth-child(4)
        top 28px

@media all and (min-width: 1px) and (max-width: 1000px)
  .burger
    display block
  #Top
    position absolute
    > .container
      > nav
        margin 0
        > .left
          margin 0 0 0 20px
          > .logo
            position absolute
            margin 20px 0 0 0
            z-index 200
        > .right
          opacity 0.5
          transform translateX(100%)
          transition opacity 0.25s ease-in-out 0s, transform 0s ease-in-out 0.25s
          position fixed
          background-color tapa
          widht 100%
          height 100%
          bottom 0
          left 0
          right 0
          float none
          text-align right
          > ul
            margin-top 22vh
            width inherit
            height inherit
            height 380px
            > li
              width 200px
              float right
              clear both
              display block
              height 12vh
              line-height 12vh
              opacity 0
              > a
                font h3
                display block
                transition background-color 0.2s ease-in-out 0.1s, color 0.3s ease-in-out 0.2s
                &.active
                  border-bottom 2px solid transparent
                  background-color white
                  color tapa
                &:hover:not(.active)
                  border-bottom 2px solid transparent


              transform translateX(20px)
              transition all 0.3s ease-in-out 0.1s
              for i in 1..6
                &:nth-child({i})
                  transition-delay unit(0.05*i, 's')
    &.mobile
      > .container > nav > .left
        > .logo
          position fixed
          .cls-1, .cls-2
            fill white
            transition fill 0.3s ease-in-out
      > .container > nav > .right
        transition opacity 0.25s ease-in-out 0.1s, transform 0s ease-in-out 0.1s
        opacity 1
        transform translateX(0)
        > ul > li
          opacity 1
          transform translateX(0)
    &.light > .container > nav > .right > ul > li > a,
    &.dark > .container > nav > .right > ul > li > a
      color white
      &.active
        border-bottom 2px solid transparent
        background-color white
        color tapa
      &:hover:not(.active)
        border-bottom 2px solid transparent
</style>

<script>
export default {
  data () {
    return {
      burger: false
    }
  }
}
</script>
