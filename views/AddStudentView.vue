<template>
  <div class="wrapper">
   {{student}}
    <PersonalStudentData @getNewStudentName="getNewStudentNameHandler" :student="student" :v="$v" :form="form"/>
    <table>
      <tbody> 
        <tr>
          <StudentTable :student="student" />
        </tr>
      </tbody>
    </table>
    <FormActions @cancel="handleCancel" @submit="handleSubmit($v, ...arguments)" />
    <!-- <button @click="x=$v"/> -->
  </div>
</template>

<script>
import FormActions from "@/components/global/FormActions";
import StudentTable from "@/components/global/StudentTable";
import PersonalStudentData from "@/components/addstudent/data/PersonalStudentData";
import { helpers, required } from "vuelidate/lib/validators";
const fullName = helpers.regex(
  "fullName",
  // /^[A-ZĄĆĘŁŃÓŚŹŻ]?[a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ]?[a-ząćęłńóśźż]*)+(-[A-ZĄĆĘŁŃÓŚŹŻ]?[a-ząćęłńóśźż]+)?$/
   /^[0-9]{2}$/
);
const firstName = helpers.regex(
  "firstName",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$/
);
const lastName = helpers.regex(
  "lastName",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$/
);
const pesel = helpers.regex("pesel", /^[0-9]{2}$/);
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
  onUpdated
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
const x = ref('')
  const student = computed(() => root.$accessor.student)
    // const student = ref(Object.assign({}, studentState.value))
    function handleCancel() {
      root.$accessor.resetStudent()
      gradesLength.value = 0;
      setTimeout(()=>{
        gradesLength.value = 1;
      }, 1000)
    }
    function handleSubmit(v) {
      console.log(v);
      if(v.$invalid) {
        this.$toast.error(root.$t('failed_form_message'));
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

    const form = ref({
      fullName: '',
      student: student.value
    })
    return {
      handleCancel,
      handleSubmit,
      getNewStudentNameHandler,
      student,
      form,
      x,
    };
  },
});
</script>
