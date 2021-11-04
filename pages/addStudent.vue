<template>
  <div>
    <AddStudentView />
    <ClosePrompt ref="ClosePrompt"/>X
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
    const lastName = student.lastName;
    const grades = student.grades;
    
    const noScoreOrNoWeight = grades.some(grade => grade.score ^ grade.weight);
    const onlyDescription = grades.some(grade => (!grade.score && !grade.weight) && grade.description);
    const invalidGradesConditions = noScoreOrNoWeight || onlyDescription;
    const invalidFormConditions = lastName || invalidGradesConditions;
    const ClosePrompt = this.$refs.ClosePrompt;
    (!ClosePrompt.showPrompt && invalidFormConditions) ? ClosePrompt.preventLeaving(to) : next()
  },
});
</script>
