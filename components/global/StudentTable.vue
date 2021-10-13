<template>
  <div class="row">
    <div class="addStudentPanelSummary">
      <table class="summary">
        <tbody>
        <tr>
          <td v-if="orderNo"></td>
          <td>{{ student.lastName.toUpperCase() }} {{ student.firstName }}</td>
          <td>
            <div
              class="gradeWeightColor"
              :class="gradeColor(grade.weight)"
              v-for="(grade, index) in student.grades"
              :key="`new_student_grade-${index}`"
              @mouseenter="showGradeDetails($event, grade)"
              @mouseleave="hideGradeDetails($event)"
            >
              {{ grade.score }}
            </div>
          </td>
          <td>{{ calculateAvgGrade(student.grades) || '' }}</td>
          <td>
            <span v-if="calculateAvgGrade(student.grades) < 2" class="fire">
              {{ $t("at_risk").toUpperCase() }}
            </span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import { computed, defineComponent, onUpdated, watchEffect, useStore , ref} from "@nuxtjs/composition-api";
import gradesService from "@/assets/mixins/gradesMixins.ts";

export default defineComponent({
  name: "StudentTable",
  props: {
    student: {
        type: Object,
        required: false,
        default: () => {}
    },
    orderNo: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mixins: [gradesService],
})
</script>
<style>


.addStudentPanelSummary {
  width: 90%;
  margin: 100px 70px 0;
}
@media (max-width: 768px) {
  
  .addStudentPanelSummary {
    width: 100%;
    margin: 100px 0;
  }
}
</style>