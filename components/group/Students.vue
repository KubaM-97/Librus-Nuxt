<template>
  <div class="students">
    <table ref="tableStudents">
      <thead>
        <th>{{ $t('number_abbr') }}.</th>
        <th>{{ $t('student') }}:</th>
        <th>{{ $t('grades') }}:</th>
        <th>{{ $t('grade_avg') }}:</th>
        <th>{{ $t('at_risks') }}:</th>
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
          <td>{{ index + 1 }}.</td>
            <td>
              {{ student.lastName.toUpperCase() }} {{ student.firstName }}
            </td>
            <td>
              <div class="gradeWeightColor" :class="gradeColor(grade.weight)" 
              v-for="(grade, index) in student.grades" :key="`grade-${index}`"
              @mouseenter="showGradeDetails($event, grade)" @mouseleave="hideGradeDetails($event)">
                {{ grade.score }}
              </div>
            </td>
            <td> {{ calculateAvgGrade(student.grades) }} </td>
            <td>
              <span v-if="calculateAvgGrade(student.grades) < 2" class="fire">
                  {{ $t('at_risk').toUpperCase() }}
              </span>
            </td>
        </NuxtLink>
        
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

import gradesService from "@/assets/mixins/gradesMixins.ts";
export default defineComponent({
  name: "Students",
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