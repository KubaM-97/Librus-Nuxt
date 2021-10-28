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
  layout: 'loggedOut',
  head() {
    return{
      title: this.$t('logged_out_page_title'),
    }
  },
});
</script>
