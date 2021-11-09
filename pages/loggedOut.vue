<template>
  <LoggedOutView />
</template>

<script>
import LoggedOutView from '@/views/LoggedOutView.vue';
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'LoggedOut',
  components: {
    LoggedOutView,
  },
});
</script>
