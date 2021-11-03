<template>
  <div class="addStudentPanelGrades">
    <div class="addStudentPanelGradesTitle mb-2">
      <span class="addStudentGradeSubpanelTitle"
        >{{ $t("accumulated_grades") }}:</span
      >
    </div>
    grades: {{grades}}
    <Grade
      :index="n - 1"
      @remove="handleRemove"
      class="addStudentPanelGradesContent"
      v-for="n in gradesLength"
      :key="n"
      :ref="`gradeRef_${n - 1}`"
      @xxxxxx="yy"

    />

    <div class="showAnotherGrade">
      <button name="moreGradesAddStudent" @click="$accessor.increase()">
        +
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "@nuxtjs/composition-api";

import Grade from "@/components/global/Grade.vue";
export default defineComponent({
  name: "NewStudentGrades",
  components: {
    Grade,
  },
  props: {
    grades: {
      type: Object,
      required: false,
    },
  },
  setup(props, { root }) {
    const gradesLength = computed(() => root.$accessor.gradesLength);
    function handleRemove(index) {
      props.grades.splice(index, 1);
    }
    const grades = computed(() => root.$accessor.student.grades);
    let clonedGrades = [...grades.value];
    console.log(grades)
    function yy(grade, index){
      clonedGrades = [...grades.value];
      console.log(clonedGrades);
      clonedGrades[index] = { ...grade };
      root.$accessor.updateStudent({ property: "grades", value: clonedGrades });

      // basedGrades.value.grades[index] = grade
    }
    return {
      yy,
      // grades,
      gradesLength,
      handleRemove,
    };
  },
});
</script>

<style>
.addStudentPanelGrades {
  position: relative;
}
.addStudentPanelGradesTitle {
  padding-top: 10px;
  margin-bottom: 50px;
  font-size: 11px;
}
.addStudentPanelGradesContent {
  width: 90%;
}
@media (max-width: 768px) {
  .addStudentPanelGradesTitle {
    padding-top: 70px;
  }
  .showAnotherGrade {
    top: 35px;
    right: 10px;
  }
  .showAnotherGrade button {
    font-size: 19px;
    padding: 1px 9px;
    font-weight: 300;
  }
}
</style>