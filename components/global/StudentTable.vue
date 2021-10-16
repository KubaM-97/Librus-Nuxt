<template>
  <fragment>
    <td v-if="orderNo">{{ orderNo }}.</td>
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
  </fragment>
</template>


<script>
import { defineComponent } from "@nuxtjs/composition-api";
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
      type: Number,
      required: false,
      default: 0
    },
    // navigate
  },
  emits: ['v'],
  mixins: [gradesService],
  setup(p){
    console.log(p)
  }
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