<template>
  <div class="wrapper">
    <PersonalStudentData ref="PersonalStudentData" @getNewStudentName="getNewStudentNameHandler" :v="$v" :fullName="fullName" :student="student" :gradesLength="gradesLength"/>
    <StudentTable :student="student" />
    <FormActions @cancel="handleCancel" @submit="handleSubmit($v, ...arguments)" />
  </div>
</template>

<script>
import FormActions from "@/components/global/FormActions";
import StudentTable from "@/components/global/StudentTable";
import PersonalStudentData from "@/components/addstudent/data/PersonalStudentData";
import validations from "@/assets/mixins/validations";
import {
  defineComponent,
  ref,
  useRouter,
  computed,
} from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    FormActions,
    StudentTable,
    PersonalStudentData,
  },
  mixins: [validations],
  setup(_, {root}) {
    const router = useRouter();
    const gradesLength = ref(1);
    const student = computed(()=>root.$accessor.student)
    const fullName = ref('')
    const PersonalStudentData = ref(null)
    function handleCancel() {
      fullName.value = ''
      root.$accessor.resetStudent()
      this.$refs.PersonalStudentData.$refs.PersonalStudentDataForm.showAdditionalDataForm = false 
    }
    async function handleSubmit(v) {
      if(v.$invalid) {
        this.$toast.error(root.$t('failed_form_message'));
        return
      }
      const clonedStudent = {...student.value}
      clonedStudent.grades = clonedStudent.grades.filter((grade) => grade.score && grade.weight)
      this.$toast.show(root.$t('adding_student_in_progress'));
      try {
        await root.$accessor.addStudent(clonedStudent)
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
      fullName,
      gradesLength,
      PersonalStudentData,
    };
  },
});
</script>
