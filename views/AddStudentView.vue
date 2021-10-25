<template>
  <div class="wrapper">
    <NuxtLink :to="`/group/${$route.params.groupId || '3B'}`">
        <button active-class="active" class="btn btn-primary btn-lg">
          {{ $t('class') }}
        </button>
      </NuxtLink>
    <PersonalStudentData :ref="PersonalStudentData" @getNewStudentName="getNewStudentNameHandler" :v="$v" :form="form" :gradesLength="gradesLength"/>
    <table>
      <tbody> 
          <StudentTable :student="student" />
      </tbody>
    </table>
    <FormActions @cancel="handleCancel" @submit="handleSubmit($v, ...arguments)" />
  </div>
</template>

<script>
import FormActions from "@/components/global/FormActions";
import StudentTable from "@/components/global/StudentTable";
import PersonalStudentData from "@/components/addstudent/data/PersonalStudentData";
import { helpers, required } from "vuelidate/lib/validators";
const fullName = helpers.regex(
  "fullName",
  /^[A-ZĄĆĘŁŃÓŚŹŻ]?[a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ]?[a-ząćęłńóśźż]*)+(-[A-ZĄĆĘŁŃÓŚŹŻ]?[a-ząćęłńóśźż]+)?$/
);
const firstName = helpers.regex(
  "firstName",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$/
);
const lastName = helpers.regex(
  "lastName",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$/
);
const pesel = helpers.regex("pesel", /^[0-9]{11}$/);
const phone = helpers.regex("phone", /^([0-9]{7}|[0-9]{9})$/);
const email = helpers.regex(
  "email",
  /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-]+\.[a-z]+$/
);
const streetName = helpers.regex("streetName", /^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$/);
const streetNr = helpers.regex(
  "streetNr",
  /^[0-9]+[a-zA-Z]?(\/?[0-9]*[a-zA-Z]?)?$/
);
const flat = helpers.regex("flat", /^[0-9]+[a-zA-Z]?$/);
const postCode = helpers.regex("postCode", /^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$/);
const city = helpers.regex(
  "city",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( (- )?[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)*$/
);
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
  validations: {
    form: {
      fullName: {
        required,
        fullName,
      },
      student: {
        pesel: { pesel },
        phone: { phone },
        email: { email },
        street: {
          name: { streetName },
          nr: { streetNr },
          flat: { flat },
          postcode: { postCode },
          city: { city },
        },
        mother: {
          firstName: { firstName },
          lastName: { lastName },
          phone: { phone },
          email: { email },
        },
        father: {
          firstName: { firstName },
          lastName: { lastName },
          phone: { phone },
          email: { email },
        },
      },
    },
  },
  setup(_, {root}) {
    const router = useRouter();
    const gradesLength = ref(1);
    const student = computed(()=>root.$accessor.student)
    const PersonalStudentData = ref(null)
    function handleCancel() {

      form.value.fullName = ''
      root.$accessor.resetStudent()
      root.$refs.PersonalStudentData.$refs.PersonalStudentDataForm.showAdditionalDataForm.value = false 
    }
    function handleSubmit(v) {
      router.push({ path: "/group/3B" });
      // if(v.$invalid) {
      //   this.$toast.error(root.$t('failed_form_message'));
      //   return
      // }
      // this.$toast.show(root.$t('adding_student_in_progress'));
      // student.value.grades.map((grade) => grade.score && grade.weight);
      // try {
      //   // axios.post("/api/students/new", {
      //   //   student: student.value,
      //   // });
      //   this.$toast.success(root.$t('successfully_added_new_student'));
      //   router.push({ path: "/group/3B" });
      // } catch (err) {
      //   console.error(err);
      //   this.$toast.error(root.$t('failed_to_add_new_student'));
      // }
    };

    function getNewStudentNameHandler(fullName) {
      const formattedFullname = fullName.split(" ").reverse().join();
      student.value.name = formattedFullname;
    }

    const form = ref({
      fullName: '',
      student
    })

    return {
      handleCancel,
      handleSubmit,
      getNewStudentNameHandler,
      student,
      form,
      gradesLength,
      PersonalStudentData
      // student2,
    };
  },
});
</script>
