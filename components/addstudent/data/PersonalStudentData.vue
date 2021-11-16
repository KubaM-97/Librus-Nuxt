<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-4 mt-4">
        <PersonalStudentDataForm ref="PersonalStudentDataForm" :v="v" :student="student" />
      </div>
      <div class="col-12 col-lg-8">
        <NewStudentGrades :grades="student.grades"/>
      </div>
    </div>
  </div>
</template>


<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import NewStudentGrades from "@/components/addstudent/grades/NewStudentGrades";
import PersonalStudentDataForm from "@/components/addstudent/data/PersonalStudentDataForm";

export default defineComponent({
  name: "PersonalStudentData",
  components: {
    PersonalStudentDataForm,
    NewStudentGrades,
  },
  props: {
    v: {
      type: Object,
      required: true,
    },
    student: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
});
</script>

<style>
.newStudentPanelMain {
  padding: 40px 5px;
}
@media (max-width: 768px) {
  .newStudentPanelMain {
    padding: 40px 10px;
  }
}
</style>