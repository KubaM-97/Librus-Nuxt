<template>
  <div class="students">
    <table ref="tableStudents">
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
        <NuxtLink  
          v-for="(student, index) in students"
          :key="student._id"
          tag="tr"
          :to="{
            path: `/group/${$route.params.groupId}/student/${student._id }`,
            params: { id: student._id },
          }">
          <StudentTable :student="student" :orderNo="index+1" />
        </NuxtLink>
        
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import StudentTable from '@/components/global/StudentTable'
import gradesService from "@/assets/mixins/gradesMixins.ts";
export default defineComponent({
  name: "Students",
  components: {
    StudentTable,
  },
  props: {
    students: {
      type: Array,
      required: false,
      default: () => [],
    }
  },
  mixins: [gradesService],
});
</script>

<style>
div.students {
  width: 90%;
  margin: 50px auto;
}
</style>