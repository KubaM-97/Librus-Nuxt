<template>
  <div class="wrapper text-left pl-2">
      <div class="summary">
        <table>
          <tbody> 
      <tr>
        <StudentTable :student="student" />
      </tr>
      </tbody>
      </table>
      </div>
      <div>
        <div class="form-group">
          <span class="title">PESEL:</span>
          <span class="data">{{ student.pesel }}</span>
        </div>

        <div class="form-group">
          <span class="title">{{ $t("address") }}:</span>
          <span class="data"
          
            >ul.{{ student.street.name }} {{ student.street.nr }} m.{{
              student.street.flat
            }}
            <br />
            {{ student.street.postcode }} {{ student.street.city }}</span
          >
        </div>

        <div class="form-group">
          <span class="title">{{ $t("phone") }}:</span>
          <span class="data">{{ student.phone }}</span>
        </div>

        <div class="form-group">
          <span class="title">{{ $t("email") }}:</span>
          <span class="data">{{ student.email }}</span>
        </div>

        <div class="form-group">
          <span class="title">{{ $t("mother") }}:</span>
          <span class="data"
            >{{ student.mother.firstname }} {{ student.mother.lastname }} <br />
            {{ student.mother.phone }} <br />
            {{ student.mother.email }}
          </span>
        </div>

        <div class="form-group">
          <span class="title">{{ $t("father") }}:</span>
          <span class="data"
            >{{ student.father.firstname }} {{ student.father.lastname }} <br />
            {{ student.father.phone }} <br />
            {{ student.father.email }}</span
          >
        </div>
      </div>
      <div>
        <NuxtLink tag="button" :to="{ query: { edit: 'data' }}">{{ $t("edit_data") }}</NuxtLink> 
        <NuxtLink tag="button" :to="{ query: { edit: 'grades' }}">{{ $t("edit_grades") }}</NuxtLink> 
       <component :is="chosenComponent" :student="student"/>
      </div>
    </div>

</template>

<script>
import StudentTable from "@/components/global/StudentTable";
import EditData from "@/components/student/EditData";
import EditGrades from "@/components/student/EditGrades";
import gradesService from "@/assets/mixins/gradesMixins.ts";
import {
  defineComponent,
  useRoute,
  ref,
  useContext,
  useFetch,
  shallowRef,
  watch,
} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Student",
  components: {
    StudentTable,
    EditData,
    EditGrades,
  },
  mixins: [gradesService],
  setup() {
    const route = useRoute();
    const studentId = route.value.params.id;
    const student = ref("");
    const property = ref(null);

    const chosenComponent = shallowRef(null);
    if(route.value.query.data){
      chosenComponent.value = data
    }
    else if(route.value.query.grades) {
      chosenComponent.value = EditGrades
    }
    watch(()=>route.value.query, () => {
      switch(route.value.query.edit) {
        case 'data': {
          chosenComponent.value = EditData;
          break;
        }
        case 'grades': {
          chosenComponent.value = EditGrades;
          break;
        }
        default: {
          chosenComponent.value = null
        }
      }
    })
    // function xxx() {
    //   history.pushState(
    //     {},
    //     null,
    //     encodeURIComponent(`${student.value.lastName.toLowerCase()} ${student.value.firstName.toLowerCase()}`)
    //   );
    // }
    const { $http } = useContext();

    useFetch(async () => {
      console.log(studentId);

      student.value = await $http.$get(`api/students/${studentId}`);
      console.log(student.value);
      // xxx()
    });

    return {
      studentId,
      student,
      property,
      chosenComponent,
    };
  },
});
</script>


<style lang="scss" scoped>

button {
  background-color: blueviolet;
  display: inline-block;
  font-size: 13px;
  color: #fff;
  border-radius: 4px;
  padding: 6px 11px;
  text-shadow: 1px 1px 1px violet;
  margin: 0 15px;
}
@media (max-width: 768px) {
  button {
    font-size: 9px;
    padding: 5px;
  }
}
</style>