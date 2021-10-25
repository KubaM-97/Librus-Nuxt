<template>
  <div class="addStudentPanelGrades">
    <div class="addStudentPanelGradesTitle mb-2">
      <span class="addStudentGradeSubpanelTitle"
        >{{ $t("accumulated_grades") }}:</span
      >
    </div>
    <Grade
      :index="n - 1"
      @remove="handleRemove"
      class="addStudentPanelGradesContent"
      v-for="n in gradesLength"
      :key="n"
      :ref="`gradeRef_${n - 1}`"
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
    return {
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
.showAnotherGrade {
  position: absolute;
  top: 10px;
  right: 15px;
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