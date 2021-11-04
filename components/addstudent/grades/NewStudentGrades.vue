<template>
  <div class="addStudentPanelGrades">
    <div class="addStudentPanelGradesTitle mb-2">
      <span class="addStudentGradeSubpanelTitle"
        >{{ $t("accumulated_grades") }}:</span
      >
    </div>
    <!-- {{$store.state.student.grades}} -->
    {{grades}}
    <Grade
      :ref="`grade_${n - 1}`"
      :index="n - 1"
      class="addStudentPanelGradesContent"
      v-for="n in gradesLength"
      :key="n"
      @initGrade="handleInitGrade"
      @updateGrade="handleUpdateGrade"
      @removeGrade="handleRemoveGrade"
    />

    <div class="showAnotherGrade">
      <!-- <button name="moreGradesAddStudent" @click="gradesLength.value++"> -->
      <button name="moreGradesAddStudent" @click="handleInitGrade">
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
      type: Array,
      required: false,
      default: () => []
    },
  },
  setup(props, { root }) {
    const gradesLength = ref(1);
    function handleRemoveGrade(index) {
      root.$accessor.removeGrade(index);
    }
    // const grades = props.grades;
    const grades = computed(()=>root.$accessor.student.grades)

    let clonedGrades = [...grades.value];
    function handleUpdateGrade(grade, index) {
    clonedGrades = [...grades.value];

      clonedGrades[index] = { ...grade };
      console.log(clonedGrades)
      root.$accessor.updateStudentProperty({
        property: "grades",
        value: clonedGrades,
      });
      // root.$accessor.updateGrade({
      //   grade,
      //   index,
      // });
      this.$forceUpdate()
    }
    function handleInitGrade(){
      gradesLength.value++
      root.$accessor.initGrade();
    }
    return {
      handleUpdateGrade,
      gradesLength,
      handleRemoveGrade,
      handleInitGrade,
    };
  },
});
</script>

<style lang="scss">
.addStudentPanelGrades {
  position: relative;
  .addStudentPanelGradesTitle {
    padding-top: 10px;
    margin-bottom: 50px;
    font-size: 11px;
    .addStudentPanelGradesContent {
      width: 90%;
    }
  }
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