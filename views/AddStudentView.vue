<template>
  <div class="wrapper">
    {{student}}
    <PersonalStudentData @getNewStudentName="getNewStudentNameHandler" :student="student" />
    <table>
      <tbody> 
        <tr>
          <StudentTable :student="student" />
        </tr>
      </tbody>
    </table>
    <FormActions @cancel="handleCancel" @submit="handleSubmit" />
  </div>
</template>

<script>
import FormActions from "@/components/global/FormActions";
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
    FormActions,
    StudentTable,
    PersonalStudentData,
  },
  setup(_, {root}) {
    const router = useRouter();
    const student = computed(() => root.$accessor.student);
    const gradesLength = ref(1);

    function handleCancel() {
      root.$accessor.resetStudent()
      gradesLength.value = 0;
      setTimeout(()=>{
        gradesLength.value = 1;
      }, 1000)
    }

    function handleSubmit() {
      if(root.$v.$invalid) {
        this.$toast.error(root.$t('failed_form'));
        return
      }
      this.$toast.show(root.$t('adding_student_in_progress'));
      student.value.grades.map((grade) => grade.score && grade.weight);
      console.log(student.value);
      try {
        // axios.post("/api/students/new", {
        //   student: student.value,
        // });
        this.$toast.success(root.$t('successfully_added_new_student'));
        router.push({ path: "/group/3B" });
      } catch (err) {
        console.error(err);
        this.$toast.error(root.$t('failed_to_add_new_student'));
      }
    };

    function getNewStudentNameHandler(fullName) {
      const formattedFullname = fullName.split(" ").reverse().join();
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
