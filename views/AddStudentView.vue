<template>
  <div class="wrapper">
    <PersonalStudentData ref="PersonalStudentData" @getNewStudentName="getNewStudentNameHandler" :v="$v" :student="student" :gradesLength="gradesLength"/>
    <StudentTable :student="student" class="mt-4"/>
    <FormActions @cancel="handleCancel($v)" @submit="handleSubmit($v)" />
  </div>
</template>

<script>
import FormActions from "@/components/addstudent/FormActions";
import StudentTable from "@/components/global/StudentTable";
import PersonalStudentData from "@/components/addstudent/data/PersonalStudentData";
import validations from "@/assets/mixins/validations";
import {
  defineComponent,
  ref,
  useRouter,
  useContext,
  useStore,
  computed,
} from "@nuxtjs/composition-api";
export default defineComponent({
  name: 'AddStudentView',
  components: {
    FormActions,
    StudentTable,
    PersonalStudentData,
  },
  mixins: [validations],
  setup(_, { root }) {
    const store = useStore();
    const router = useRouter();
    const gradesLength = ref(1);
    const student = computed(()=>store.state.student)
    const fullName = ref('')
    const PersonalStudentData = ref(null);
    const group = computed(()=>store.getters.loggedInUser.group).value
    function handleCancel(v) {
      fullName.value = ''
      store.commit('resetStudent')
      v.$reset()
      this.$refs.PersonalStudentData.$refs.PersonalStudentDataForm.showAdditionalDataForm = false 
    }
    const { $http } = useContext();
    async function handleSubmit(v) {
      if(v.$invalid) {
        v.$touch()
        this.$toast.error(root.$t('failed_form_message'));
        return
      }
      const clonedStudent = {...student.value}
      clonedStudent.grades = clonedStudent.grades.filter((grade) => grade.score && grade.weight)
      this.$toast.show(root.$t('adding_student_in_progress'));
      try {
        await $http.$post("/api/students/new", {
            student: clonedStudent,
            group },{
          headers:{
            Authorization: root.$auth.strategy.token.get()
          }})
        this.$toast.success(root.$t('successfully_added_new_student'));
        store.commit('resetStudent')
        router.push({ path: `/group/${group}` });
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
