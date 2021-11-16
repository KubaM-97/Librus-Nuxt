<template>
  <div class="newStudentPanelGrades">
    <div class="newStudentPanelGradesTitle mb-2">
      <span class="addStudentGradeSubpanelTitle"
        >{{ $t("accumulated_grades") }}:</span
      >
    </div>
    <Grade
      :ref="`grade_${n - 1}`"
      :index="n - 1"
      class="newStudentPanelGradesContent"
      v-for="n in gradesLength"
      :key="`new_student_grades_${n}`"
      @updateGrade="handleUpdateGrade"
      @removeGrade="handleRemoveGrade"
    />

    <div class="showAnotherGrade">
      <button name="moreGradesAddStudent" @click="handleInitGrade">+</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, useStore } from "@nuxtjs/composition-api";

import Grade from "@/components/global/Grade.vue";
import { getDefaultGrade } from "@/store";
export default defineComponent({
  name: "NewStudentGrades",
  components: {
    Grade,
  },
  props: {
    grades: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  setup() {
    const gradesLength = ref(1);
    const store = useStore();
    const grades = computed(() => store.state.student.grades);

    function handleInitGrade() {
      gradesLength.value++;
      store.commit("initGrade");
    }

    function handleUpdateGrade(grade, index) {
      const clonedGrades = [...grades.value];
      clonedGrades[index] = { ...grade };

      store.commit("updateStudentProperty", {
        property: "grades",
        value: clonedGrades,
      });
    }

    function handleRemoveGrade(index) {
      const refEl = this.$refs[`grade_${index}`][0].$el;
      refEl.parentNode.removeChild(refEl);

      const clonedGrades = [...grades.value];
      clonedGrades[index] = getDefaultGrade;

      store.commit("updateStudentProperty", {
        property: "grades",
        value: clonedGrades,
      });

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
.newStudentPanelGrades {
  position: relative;
  .newStudentPanelGradesTitle {
    padding-top: 10px;
    margin-bottom: 50px;
    font-size: 11px;
    .newStudentPanelGradesContent {
      width: 90%;
    }
  }
}

@media (max-width: 768px) {
  .newStudentPanelGradesTitle {
    padding-top: 70px;
  }
  .showAnotherGrade {
    top: 35px;
    right: 10px;
    button {
      font-size: 19px;
      padding: 1px 9px;
      font-weight: 300;
    }
  }
}
</style>