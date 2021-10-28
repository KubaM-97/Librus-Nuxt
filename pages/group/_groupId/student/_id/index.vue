<template>
<div> 
<div v-if="$fetchState.pending"> Cierpliwości</div> 
  <div class="wrapper text-left pl-2" v-else>
      <div  class="summary">
      <StudentTable :student="student" />
      </div>
      <div class="p-4 w-75">
        <div class="form-group w-100 d-flex justify-content-between" v-for="property in orderedStudentProperties" :key="property">
          <span class="title biggerfont">{{$t(property)}}:</span>

          <span class="data" v-if="typeof student[property] !== 'object' && student[property] !== null">
            {{ student[property] }}
          </span>
            
          <span class="data" v-else>
            <span v-for="(_subValue, subProperty) in student[property]" :key="subProperty">
            {{student[property][subProperty]}}
            </span>
          </span>
        </div>
        
      </div>
      <!-- <StudentEditData :student="student"/> -->
      <StudentEditGrades :student="student"/>
      <div class="pr-3 d-flex justify-content-end">
        <NuxtLink tag="button" class="btn btn-lg" :to="{ query: { edit: 'data' }}">{{ $t("edit_data") }}</NuxtLink> 
        <NuxtLink tag="button" class="btn btn-lg" :to="{ query: { edit: 'grades' }}">{{ $t("edit_grades") }}</NuxtLink> 
             <!-- <transition name="EditStudentDataPanel" mode="out-in"> -->
        <component :is="chosenComponent" :student="student" />
      <!-- </transition> -->
      </div>
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
  useMeta
} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Student",
  components: {
    StudentTable,
    EditData,
    EditGrades,
  },
  mixins: [gradesService],
  // asyncData
  setup() {
    
    const route = useRoute();
    const studentId = route.value.params.id;
    const student = ref("");
    const { title } = useMeta()
    
    title.value = this.$t('student_page_title', { student: `${ student.lastName } ${ student.firstName }` })
    
    const property = ref(null);
    const orderedStudentProperties = ref([
      'pesel', 'phone', 'email', 'street', 'mother', 'father'
    ])
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

    // useFetch(async () => {
    //   console.log('to jest id: ',studentId);

    //   student.value = await $http.$get(`api/students/${studentId}`);
    //   console.log(student.value);
    //   // xxx()
    // });
 const { fetch, fetchState } = useFetch(async () => {
            student.value = await $http.$get(`api/students/${studentId}`);

    })

    // Manually trigger a refetch
    fetch()
fetchState
    return {
      studentId,
      student,
      property,
      chosenComponent,
      fetchState,
      orderedStudentProperties
    };
  },
});
</script>


<style lang="scss" scoped>

button {
  background-color: #2f76e2;
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