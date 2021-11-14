<template>
  <div>
    <TheHeader v-if="$auth.loggedIn"/>
      <!-- {{$auth.loggedIn}}
      {{$auth.user}} -->
      <!-- x{{$root}}y -->
      <!-- {{$root.state.test}} -->
    <Nuxt />
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup(_p, {root}) {
    console.log(root.$auth);
  },
})
</script>

