<template>
    <table class="students">
      <thead>
        <tr>
          <th>{{ $t('number_abbr') }}.</th>
          <th>{{ $t('student') }}:</th>
          <th>{{ $t('grades') }}:</th>
          <th>{{ $t('grade_avg') }}:</th>
          <th>{{ $t('at_risks') }}:</th>
        </tr>
      </thead>
      <tbody>
        <StudentRow v-for="(student, index) in students" :key="`group_student_${student._id}`" 
        :student="student" :orderNo="index+1" 
        @click.native="router.push({ path: studentUrl(student), params: { id: student._id }})"/>
      </tbody>
    </table>
</template>

<script>
import { defineComponent, useRouter, useStore } from "@nuxtjs/composition-api";
import StudentRow from '@/components/global/StudentRow'
export default defineComponent({
  name: "Students",
  components: {
    StudentRow,
  },
  props: {
    students: {
      type: Array,
      required: false,
      default: () => [],
    }
  },
  setup(){
    const store = useStore()
    const router = useRouter()
    function studentUrlEndpoint(student) {
      return 'xxx'
      // return encodeURIComponent(`${student.lastName} ${student.firstName}`)
    } 
    function studentUrl(student) {
      return `/group/${store.getters.loggedInUser.group}/student/${studentUrlEndpoint(student)}`
    } 
    return {router, studentUrl}
  }
});
</script>

<style>
.students {
  width: 90%;
  margin: 50px auto;
}
</style>