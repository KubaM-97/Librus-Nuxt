<template>
  <fragment>
    <AddStudentView />
    <ClosePrompt ref="ClosePrompt"/>
  </fragment>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

import AddStudentView from '@/views/AddStudentView.vue';
import ClosePrompt from "@/components/global/ClosePrompt";
export default {
  name: 'AddStudent',
  components: {
    AddStudentView,
    ClosePrompt,
  },
  beforeRouteLeave(to, from, next) {
    // next()
    const ClosePrompt = this.$refs.ClosePrompt;
    ClosePrompt.showPrompt ? next() : ClosePrompt.preventLeaving(to)
  },
};
</script>
