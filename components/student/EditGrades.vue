<template>
  <div class="editStudent wrapper mb-3 pt-4 pb-3 position-absolute"
  >
    <div class="overlay" />
    <div class="container editStudentGrades">
      <span class="d-block mb-3">{{ $t("edit_grade") }}:</span>
      <div class="row">
        <Grade
          class="col-12 col-md-11"
          v-for="(grade, index) in student.grades"
          :key="index"
          :index="index"
          :grade="grade"
        />

        <Grade
          class="col-12 col-md-11"
          v-for="n in gradesLength"
          :key="n + student.grades.length"
          :index="gradesLength + student.grades.length"
          :gradesLength="gradesLength"
        />

        <div class="showAnotherGrade">
          <button name="moreGradesEditGrades" @click="gradesLength++">+</button>
        </div>
      </div>
    <StudentTable :student="student" />
    </div>

    <button
      class="btn btn-success btn-lg save mr-3 px-2 py-2"
      @click="saveChanges"
    >
      {{ $t("save_changes") }}
    </button>
    <button class="closeEditPanelBtn position-absolute" @click="$emit('close')">
      <img class="closeEditPanelImg w-100" src="@/assets/images/eXit.png" />
    </button>
  </div>
</template>

<script>
import gradesService from "@/assets/mixins/gradesMixins.ts";
import Grade from "@/components/global/Grade.vue";
import StudentTable from "~/components/global/StudentTable";
import { defineComponent, ref, onMounted } from "@nuxtjs/composition-api";
import axios from "axios";
export default defineComponent({
  name: "EditGrades",
  emit: ["close"],
  components: {
    Grade,
    StudentTable,
  },
  props: {
    student: {
      type: Object,
      required: true,
    },
  },
  mixins: [gradesService],
  head() {
    return {
      title: this.$t("student_edit_page_title", {
        student: `${this.student.lastName} ${this.student.firstName}`,
      }),
    };
  },
  setup(props) {
    const gradesLength = ref(0);
    const student = props.student;
    function saveChanges() {
      try {
        axios.put(`/api/students/${student._id}`, {
          student: student,
        });
        this.$toast.success(this.$t("successfully_updated_student_data"));
      } catch (err) {
        console.error(err);
        this.$toast.error(this.$t("successfully_updated_student_data"));
      }
    }
    return {
      gradesLength,
      saveChanges,
    };
  },
});
</script>
<style lang="scss" scoped>
@keyframes showEditPanel{
  from {opacity: 0}
  to {opacity: 1;}
  }
div.editStudent {
  .editStudentGrades {
    opacity: 0;
    animation: showEditPanel .5s linear;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
  .overlay {
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
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