<template>
  <div class="wrapper">
    <!-- {{student}} -->
    <PersonalStudentData @getNewStudentName="getNewStudentNameHandler" :student="student" />
    <table>
      <tbody> 
        <tr>
          <StudentTable :student="student" />
        </tr>
      </tbody>
    </table>
    <DialogActions @cancel="handleCancel" @submit="handleSubmit" />
  </div>
</template>

<script>
import DialogActions from "@/components/global/DialogActions";
import StudentTable from "@/components/global/StudentTable";
import PersonalStudentData from "@/components/addstudent/data/PersonalStudentData";
import {
  defineComponent,
  ref,
  useRouter,
  computed
} from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    DialogActions,
    StudentTable,
    PersonalStudentData,
  },
  setup(_, {root}) {
    const router = useRouter();
    const student = computed(() => root.$accessor.student);
    const gradesLength = ref(1);

    function handleCancel() {
      student.value = {};
      gradesLength.value = 1;
    }

    function handleSubmit() {
      this.$toast.show("Trwa dodawanie nowego ucznia");
      student.value.grades.map((grade) => grade.score && grade.weight);
      try {
        // axios.post("/api/students/new", {
        //   student: student.value,
        // });
        this.$toast.success("dodano nowego ucznia");
        router.push({ path: "/group/3B" });
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
      student,
    };
  },
});
</script>
