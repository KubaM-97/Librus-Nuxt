<template>
  <div>
    <AddStudentView />
    <ClosePrompt ref="ClosePrompt"/>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

import AddStudentView from '@/views/AddStudentView.vue';
import ClosePrompt from "@/components/global/ClosePrompt";
export default defineComponent({
  name: 'AddStudent',
  components: {
    AddStudentView,
    ClosePrompt,
  },
  head() {
    return{
      title: this.$t('student_add_page_title'),
    }
  },
  // beforeRouteLeave(to, from, next) {
    // next()
    // const ClosePrompt = this.$refs.ClosePrompt;
    // ClosePrompt.showPrompt ? next() : ClosePrompt.preventLeaving(to)
  // },
});
</script>
