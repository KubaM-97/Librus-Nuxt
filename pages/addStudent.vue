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
  beforeRouteLeave(to, from, next) {
    const student = this.$store.state.student;
    const grades = student.grades;
    
    const noScoreOrNoWeight = grades.some(grade => grade.score ^ grade.weight);
    const onlyDescription = grades.some(grade => (!grade.score && !grade.weight) && grade.description);
    const invalidFormConditions = noScoreOrNoWeight || onlyDescription;
    const ClosePrompt = this.$refs.ClosePrompt;
    (!ClosePrompt.showPrompt && invalidFormConditions) ? ClosePrompt.preventLeaving(to) : next()
  },
});
</script>
