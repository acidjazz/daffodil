<template lang="pug">
#Error
  .inner
    i.fa.fa-exclamation-triangle
    p The page you are looking for can't be found.
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#Error
  > .inner
    text-align center
    padding 160px 0
    > i
      font-size 128px
      color celery
    > p
      font c2
</style>
