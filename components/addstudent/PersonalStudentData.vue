<template>
  <div class="addStudentMainPanel">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <PersonalStudentDataForm />
        </div>
        <div class="col-lg-8">
          <NewStudentGrades />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import NewStudentGrades from "@/components/addstudent/NewStudentGrades";
import PersonalStudentDataForm from "@/components/addstudent/PersonalStudentDataForm";

export default defineComponent({
  name: "PersonalStudentData",
  components: {
    PersonalStudentDataForm,
    NewStudentGrades,
  },
  props: {
    student: {
      type: Object,
      required: true,
    },
  },
  setup() {},
});
</script>

<style>
.addStudentPanelMain {
  padding: 40px 5px;
}
@media (max-width: 768px) {
  .addStudentPanelMain {
    padding: 40px 10px;
  }
}
</style>