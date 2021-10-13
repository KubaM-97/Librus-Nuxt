<template>
  <div class="row">
    <div class="addStudentPanelSummary">
      <table class="summary">
        <tbody>
        <tr>
          <td>{{ student.lastname.toUpperCase() }} {{ student.firstname }}</td>
          <td>
            <div
              class="gradeWeightColor"
              :class="gradeColor(grade.weight)"
              v-for="(grade, index) in grades"
              :key="`new_student_grade-${index}`"
              @mouseenter="showGradeDetails($event, grade)"
              @mouseleave="hideGradeDetails($event)"
            >
              {{ grade.score }}
            </div>
          </td>
          <td>{{ calculateAvgGrade(grades) || '' }}</td>
          <td>
            <span v-if="calculateAvgGrade(grades) < 2" class="fire">
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
    fullname: {
        type: String,
        required: false,
        default: ''
    },
    // grades: {
    //     type: [],
    //     required: false,
    //     default: () => []
    // },
  },
  mixins: [gradesService],
  setup(props, {root}) {
    const store = useStore()
    const student = computed(() => root.$accessor.student)
    const grades = computed(() => root.$accessor.student.grades)

     function gradeColor(weight) {
      switch (weight) {
        case 1:
          return 'gradeWeightGreen'
        case 2:
          return 'gradeWeightYellow'
        case 3:
          return 'gradeWeightRed'
        default:
          return ''
      }
    }
    return {
      gradeColor,
      grades,
      student,
    };
  },
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