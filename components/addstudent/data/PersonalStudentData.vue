<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-4 mt-4">
        <PersonalStudentDataForm :v="v" :form="form"/>
      </div>
      <div class="col-12 col-lg-8">
        <NewStudentGrades />
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
    student: {
      type: Object,
      required: true,
    },
    v: {
      type: Object,
      required: true,
    },
    form: {
      type: Object,
      required: true,
    }
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