<template lang="pug">
  div
    Top
    nuxt
    Bottom
</template>

<script>
import pages from '~/assets/pages.js'

import Top from '~/components/Top.vue'
import Bottom from '~/components/Bottom.vue'

export default {
  components: { Top, Bottom },
  transition (to, from) {
    if (!from) return 'slide-left'
    let toi = pages.indexOf(to.name)
    let fromi = pages.indexOf(from.name)
    return toi > fromi ? 'slide-right' : 'slide-left'
  }
}
</script>
