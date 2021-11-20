<template>
  <div class="editStudent wrapper mb-3 pt-4 pb-3 position-absolute">
    <div class="overlay" />
    <div class="container">
      <span class="d-block mb-3">{{ $t("edit_grade") }}:</span>
      <div class="row">
        <Grade
          class="col-12 col-md-11"
          v-for="(grade, index) in student.grades"
          :key="`edit_student_grade_${index}`"
          :index="index"
          :grade="grade"
          @removeGrade="handleRemoveGrade"
        />

        <div class="showAnotherGrade">
          <button name="moreGradesEditGrades" @click="handleInitGrade">
            +
          </button>
        </div>
      </div>
      <StudentTable :student="student" />

      <button
        class="btn btn-success btn-lg save mr-3 px-2 py-1"
        @click="submit"
      >
        {{ $t("save_changes") }}
      </button>
    </div>

    <button class="closeEditPanelBtn position-absolute" @click="$emit('close')">
      <img class="closeEditPanelImg w-100" src="~images/eXit.png" />
    </button>
  </div>
</template>

<script>
import Grade from "@/components/global/Grade.vue";
import StudentTable from "~/components/global/StudentTable";
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "EditGrades",
  components: {
    Grade,
    StudentTable,
  },
  props: {
    basedStudent: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      title: this.$t("student_edit_page_title", {
        student: `${this.student.lastName} ${this.basedStudent.firstName}`,
      }),
    };
  },
  setup(props, { emit }) {
    const gradesLength = ref(0);
    const student = ref(JSON.parse(JSON.stringify(props.basedStudent)));

    function handleInitGrade() {
      gradesLength.value++;
      student.value.grades.push({
        score: null,
        weigth: null,
        description: "",
        date: "",
      });
    }

    function handleRemoveGrade(index) {
      const clonedClonedStudent = [...student.value.grades];
      clonedClonedStudent.splice(index, 1);
      student.value.grades = clonedClonedStudent;
    }

    function submit() {
      student.value.grades = student.value.grades.filter(
        (grade) => grade.score && grade.weight
      );
      emit("submit", student.value);
    }

    return {
      gradesLength,
      student,
      handleInitGrade,
      handleRemoveGrade,
      submit,
    };
  },
});
</script>
<style lang="scss" scoped>
div.editStudent {
  background-color: black;
  .overlay {
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  font-size: 13px;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  button {
    &.save {
      font-size: 15px;
      float: right;
      &[disabled] {
        background-color: rgb(248, 11, 11);
        cursor: not-allowed;
      }
    }
    &.closeEditPanelBtn {
      top: -10px;
      right: -10px;
      width: 40px;
      height: 40px;
      border-radius: 50px;
      outline: none;
      z-index: 100;
      img.closeEditPanelImg {
        -webkit-box-shadow: 2px 2px 10px 2px #d54545;
        -moz-box-shadow: 2px 2px 10px 2px #d54545;
        box-shadow: 2px 2px 10px 2px #d54545;
        border-radius: 50px;
      }
    }
  }
}
</style>