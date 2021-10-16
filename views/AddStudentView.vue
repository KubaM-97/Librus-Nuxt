<template>
  <div class="addStudentPanel">
    {{student}}
    <PersonalStudentData @getNewStudentName="getNewStudentNameHandler" :student="student" />
    <StudentTable :student="student" />
    <!-- <DialogActions @cancel="handleCancel" @submit="handleSubmit" />
    <ClosePrompt :showPrompt.sync="showPrompt" /> -->
  </div>
</template>

<script>
import DialogActions from "@/components/global/DialogActions";
import ClosePrompt from "@/components/global/ClosePrompt";
import StudentTable from "@/components/global/StudentTable";
import PersonalStudentData from "@/components/addstudent/data/PersonalStudentData";
import {
  defineComponent,
  ref,
  useRouter,
  onBeforeUnmount,
  computed
} from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    DialogActions,
    ClosePrompt,
    StudentTable,
    PersonalStudentData,
  },
  setup(_, {root}) {
    const router = useRouter();
      const student = computed(() => root.$accessor.student);

    const gradesLength = ref(1);
    const showPrompt = ref(false);
    function handleCancel() {
      student.value = {};
      gradesLength.value = 1;
    }

    onBeforeUnmount(()=>{
      // student.value.grades.map( grade => {
      //     if (
      //       this.$v.form.$invalid ||
      //       !(grade.score && grade.weight) ||
      //       (!grade.score && !grade.weight && grade.description)
      //     ) {
      //       showPrompt.value = true;
      //       return
      //     }
      //   });
    })
    
    function handleSubmit() {
      showPrompt.value = true;
      this.$toast.show("Trwa dodawanie nowego ucznia");
      student.value.grades.map((grade) => grade.score && grade.weight);
      try {
        axios.post("/api/students/new", {
          student,
        });
        this.$toast.success("dodano nowego ucznia");
        router.push({ path: "/group" });
      } catch (err) {
        console.error(err);
        this.$toast.error("failed_to_add nowego ucznia");
      }
    };

    function getNewStudentNameHandler(fullname) {
      const formattedFullname = fullname.split(" ").reverse().join();
      student.value.name = formattedFullname;
    }

    return {
      handleCancel,
      handleSubmit,
      getNewStudentNameHandler,
      showPrompt,
      student,
    };
  },
});
</script>


<style>
.addStudentPanel {
  width: 90%;
  max-width: 1400px;
  margin: 100px auto;
  -webkit-box-shadow: 3px 3px 30px 5px #00c3ff;
  -moz-box-shadow: 3px 3px 30px 5px #00c3ff;
  box-shadow: 3px 3px 30px 5px #00c3ff;
  background-color: rgba(0, 0, 0, 0.55);
  text-align: center;
  font-size: 11px;
}
</style>