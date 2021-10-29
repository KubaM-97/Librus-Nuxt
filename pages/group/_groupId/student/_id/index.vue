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
      <div class="pr-3 d-flex justify-content-end">
        <NuxtLink tag="button" class="btn btn-lg" :to="{ query: { edit: 'data' }}">{{ $t("edit_data") }}</NuxtLink> 
        <NuxtLink tag="button" class="btn btn-lg" :to="{ query: { edit: 'grades' }}">{{ $t("edit_grades") }}</NuxtLink> 
        <transition name="editStudentPanel" @afterEnter="afterEnter" @enter="enter" @beforeLeave="beforeLeave" @beforeEnter="beforeEnter">
          <component 
            ref="editStudentPanel"
            @close="chosenComponent = null; $router.replace({'query': null})" :is="chosenComponent" :student="student" 
          />
        </transition>
      </div>
    </div>
    </div>

</template>

<script>
import StudentTable from "@/components/global/StudentTable";
import EditData from "@/components/student/EditData";
import EditGrades from "@/components/student/EditGrades";
import gradesService from "@/assets/mixins/gradesMixins.ts";
import validations from "@/assets/mixins/validations";
import {
  defineComponent,
  useRoute,
  ref,
  useContext,
  useFetch,
  shallowRef,
  watch
} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Student",
  components: {
    StudentTable,
    EditData,
    EditGrades,
  },
  mixins: [gradesService, validations],
  head() {
    return {
      title: this.$t('student_page_title', { student: `${ this.student.firstName } ${ this.student.lastName }` })
    }
  },
  setup(_props, { root }) {
    function afterEnter(){
      this.$refs.editStudentPanel.$el.querySelector('.overlay').style.zIndex = -10;

      // this.$refs.editStudentPanel.$el.querySelector('.editStudentGrades').style.animation = 'showEditPanel .1s';
      // this.$refs.editStudentPanel.$el.querySelector('.editStudentGrades').style.animationFillMode = 'forwards';
    }
    function enter(){
      this.$refs.editStudentPanel.$el.querySelector('.editStudentGrades').style.opacity = 0;
    }
    function beforeEnter(){
    }
    function beforeLeave(){
      this.$refs.editStudentPanel.$el.querySelector('.overlay').style.zIndex = 10;
    }
    const route = useRoute();
    const studentId = route.value.params.id;
    const student = ref("");
    
    const orderedStudentProperties = ref([
      'pesel', 'phone', 'email', 'street', 'mother', 'father'
    ])
    const chosenComponent = shallowRef(null);
    if(route.value.query.edit === 'data'){
      chosenComponent.value = EditData
    }
    else if(route.value.query.edit === 'grades') {
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

    const { $http } = useContext();

    useFetch(async () => {
      student.value = await $http.$get(`api/students/${studentId}`);
    });


    return {
      afterEnter,
      enter,
      beforeEnter,
      beforeLeave,
      student,
      chosenComponent,
      orderedStudentProperties
    };
  },
});
</script>


<style lang="scss" scoped>
@keyframes showEditPanel{
  from {opacity: 0}
  to {opacity: 1; background-color: orange;}
  }
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
.editStudentPanel-enter-active{
  animation: edit 2s linear;
}
.editStudentPanel-leave-active{
  animation: edit 2s linear;
  animation-direction: reverse;
}
@keyframes edit{
 0% { 
    width: 0; 
    height: 0; 
    font-size: 0px !important;
    div{
      background-color: purple !important;
    }
    .xxx{
      opacity: 0;
    }
  }
  20% {
    width: 0; 
    height: 100%;
  }
  70% {
    width: 90%;
    font-size: 0px !important;
    .yyy{
      background-color: blue;
    }
  }
  100% {
    font-size: 100%;
  }
}

</style>