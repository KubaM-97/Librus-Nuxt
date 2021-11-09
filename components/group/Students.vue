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
        @click.native="router.push({ path: `/group/${$auth.$state.user.group}/student/${studentPathRoute(student)}`,
        params: { id: student._id }})"/>
      </tbody>
    </table>
</template>

<script>
import { defineComponent, useRouter } from "@nuxtjs/composition-api";
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
    const router = useRouter()
    function studentPathRoute(student) {
      return encodeURIComponent(`${student.lastName} ${student.firstName}`)
    } 
    return {router, studentPathRoute}
  }
});
</script>

<style>
.students {
  width: 90%;
  margin: 50px auto;
}
</style>