<template>
  <div class="editStudent wrapper mb-3 pt-4 pb-3 position-absolute"
  >
  {{clonedStudent.grades}}
    <div class="overlay" />
    <div class="container">
      <span class="d-block mb-3">{{ $t("edit_grade") }}:</span>
      <div class="row">
        <Grade
          class="col-12 col-md-11"
          v-for="(grade, index) in clonedStudent.grades"
          :key="index"
          :index="index"
          :grade="grade"
          @initGrade="handleInitGrade"
          @updateGrade="handleUpdateGrade"
          @removeGrade="handleRemoveGrade"
        />

        <div class="showAnotherGrade">
          <button name="moreGradesEditGrades" @click="handleInitGrade">+</button>
        </div>
      </div>
    <StudentTable :student="clonedStudent" />

    <button
      class="btn btn-success btn-lg save mr-3 px-2 py-2"
      @click="$emit('submit', clonedStudent)"
    >
      {{ $t("save_changes") }}
    </button>
    <button class="closeEditPanelBtn position-absolute" @click="$emit('close')">
      <img class="closeEditPanelImg w-100" src="@/assets/images/eXit.png" />
    </button>
    </div>
  </div>
</template>

<script>
import Grade from "@/components/global/Grade.vue";
import StudentTable from "~/components/global/StudentTable";
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "EditGrades",
  emit: ["close", "refresh"],
  components: {
    Grade,
    StudentTable,
  },
  props: {
    student: {
      type: Object,
      required: true,
    }
  },
  head() {
    return {
      title: this.$t("student_edit_page_title", {
        student: `${this.student.lastName} ${this.student.firstName}`,
      }),
    };
  },
  setup(props) {
    const gradesLength = ref(0);
    const clonedStudent = ref(JSON.parse(JSON.stringify(props.student)));

    
    // onActivated(()=>{
    //   clonedStudent.value = {...student}
    // })
    function handleInitGrade(){
      gradesLength.value++
      clonedStudent.value.grades.push({score: null, weigth: null, description: '', date: ''})
    }

    function handleUpdateGrade(grade, index) {
      console.log('update:', grade, index);
      // clonedStudent.value.grades[index] = grade
      // clonedGrades = [...grades.value];
      // clonedGrades[index] = { ...grade };
      
      // root.$accessor.updateStudentProperty({
      //   property: "grades",
      //   value: clonedGrades,
      // });
    }

    function handleRemoveGrade(index) {
      const clonedClonedStudent = [...clonedStudent.value.grades]
      console.log(clonedClonedStudent)
      clonedClonedStudent.splice(index, 1)
      console.log(clonedClonedStudent)
      clonedStudent.value.grades = clonedClonedStudent
      // clonedStudent.value.grades[index] = {score: null, weigth: null, description: '', date: ''}
    }
    return {
      gradesLength,
      clonedStudent,
      handleInitGrade,
      handleUpdateGrade,
      handleRemoveGrade,
    };
  },
});
</script>
<style lang="scss" scoped>
div.editStudent {
  background-color: black;
  overflow: hidden;
  .overlay {
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // z-index: 10;
  }
  font-size: 13px;
  // top: 20%;
  top: 40%;
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