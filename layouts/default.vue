<template>
  <div>
    <TheHeader v-if="$auth.loggedIn"/>
    <!-- {{$auth}} -->
    <Nuxt />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup(_p, {root}) {
    // console.log('Przed: ',root.$auth);
  },
})
</script>


