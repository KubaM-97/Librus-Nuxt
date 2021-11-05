<template>
  <div class="addStudentPanelGrades">
    <div class="addStudentPanelGradesTitle mb-2">
      <span class="addStudentGradeSubpanelTitle"
        >{{ $t("accumulated_grades") }}:</span
      >
    </div>
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
  setup(_props, { root }) {
    const gradesLength = ref(1);
      const grades = computed(()=>root.$accessor.student.grades)
      let clonedGrades = [...grades.value];
      
    function handleInitGrade(){
      gradesLength.value++
      root.$accessor.initGrade();
    }

    function handleUpdateGrade(grade, index) {
      clonedGrades = [...grades.value];
      clonedGrades[index] = { ...grade };

      root.$accessor.updateStudentProperty({
        property: "grades",
        value: clonedGrades,
      });
    }

    function handleRemoveGrade(index) {
      const refEl = this.$refs[`grade_${index}`][0].$el;
      refEl.parentNode.removeChild(refEl);
      root.$accessor.removeGrade(index);
    }
    return {
      gradesLength,
      handleInitGrade,
      handleUpdateGrade,
      handleRemoveGrade,
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