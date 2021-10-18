<template>
  <div>
    Strona główna
  </div>
</template>


<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  beforeRouteEnter(to, from, next) {
    console.log(3425)
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log(34234425)
    next()
  },
})
</script>
