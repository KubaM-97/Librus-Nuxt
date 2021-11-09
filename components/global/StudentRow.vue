<template>
  <tr>
    <td v-if="orderNo">{{ orderNo }}.</td>
    <td>{{ student.lastName.toUpperCase() }} {{ student.firstName }}</td>
    <td>
      <div
        :class="[
          { gradeWeightColor: grade.score || grade.weight },
          gradeColor(grade.weight),
        ]"
        v-for="(grade, index) in student.grades"
        :key="`new_student_grade-${index}`"
        @mouseenter="showGradeDetails($event, grade)"
        @mouseleave="hideGradeDetails($event)"
      >
        {{ grade.score }}
      </div>
    </td>
    <td>{{ avg }}</td>
    <td>
      <span v-if="avg && avg < 2" class="fire">
        {{ $t("at_risk").toUpperCase() }}
      </span>
    </td>
  </tr>
</template>


<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "StudentRow",
  props: {
    student: {
      type: Object,
      required: false,
      default: () => {},
    },
    orderNo: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  computed: {
    avg() {
      return this.calculateAvgGrade(this.student.grades);
    },
  },
});
</script>