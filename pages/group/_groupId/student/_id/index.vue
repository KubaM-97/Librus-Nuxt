<template>
  <div>
    <div v-if="$fetchState.pending">Cierpliwości</div>
    <div class="wrapper text-left pl-2" v-else>
      <div class="summary">
        <StudentTable :student="student" />
      </div>
      <div class="p-4 w-75">
        <div
          class="form-group w-100 d-flex justify-content-between"
          v-for="property in orderedStudentProperties"
          :key="property"
        >
          <span class="title biggerfont">{{ $t(property) }}:</span>

          <span
            class="data"
            v-if="
              typeof student[property] !== 'object' &&
              student[property] !== null
            "
          >
            {{ student[property] }}
          </span>

          <span class="data" v-else>
            <span
              v-for="(_subValue, subProperty) in student[property]"
              :key="subProperty"
            >
              {{ student[property][subProperty] }}
            </span>
          </span>
        </div>
      </div>
      <div class="pr-3 d-flex justify-content-end">
        <NuxtLink
          tag="button"
          class="btn btn-lg"
          :to="{ query: { edit: 'data' } }"
          >{{ $t("edit_data") }}</NuxtLink
        >
        <NuxtLink
          tag="button"
          class="btn btn-lg"
          :to="{ query: { edit: 'grades' } }"
          >{{ $t("edit_grades") }}</NuxtLink
        > 
        <transition @enter="enter" @after-enter="afterEnter" @leave="leave" @before-leave="beforeLeave" :css="false">
          <!-- <keep-alive> -->
            <component
              ref="editStudentPanel"
              @close="handleClose"
              @refresh="handleRefresh"
              :is="chosenComponent"
              :student="student"
            />
          <!-- </keep-alive> -->
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
  useRouter,
  ref,
  useFetch,
  shallowRef,
  watch,
  computed,
  useContext,
} from "@nuxtjs/composition-api";
import Vue from "vue";

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
      title: this.$t("student_page_title", {
        student: `${this.student.firstName} ${this.student.lastName}`,
      }),
    };
  },
  setup(_p, {root}) {
    const router = useRouter()
    function afterEnter(el) {
      el.addEventListener("animationend", function () {
        el.style = "";
      });
      el.querySelector('.overlay').style.animation = "showDetailDatax .2s";
      el.querySelector('.overlay').style.animationFillMode = "forwards";
    }
    function enter(el, done) {
      el.addEventListener("animationend", function () {
        el.style = "";
        done();
      });
      el.style.animation = "edit .2s"
    }
    function beforeLeave(el) {
      el.addEventListener("animationend", function () {
        el.style = "";
      });
      el.querySelector('.overlay').style.animation = "showDetailDatax .2s";
      el.querySelector('.overlay').style.animationDirection = "reverse";
      el.querySelector('.overlay').style.animationFillMode = "forwards";
    }
    function leave(el, done) { 

      el.addEventListener("animationend", function () {
        el.style = "";
        done();
      });
      el.style.animation = "edit .2s";
      el.style.animationDirection = "reverse";
      el.style.animationDelay = ".2s";
    }
    const route = useRoute();
    const studentId = route.value.params.id;
    // const student = computed(()=>root.$accessor.student);
    const student = ref({});
    const { $http } = useContext();

    const orderedStudentProperties = ref([
      "pesel",
      "phone",
      "email",
      "street",
      "mother",
      "father",
    ]);
    const chosenComponent = shallowRef(null);
    if (route.value.query.edit === "data") {
      chosenComponent.value = EditData;
    } else if (route.value.query.edit === "grades") {
      chosenComponent.value = EditGrades;
    }
    watch(
      () => route.value.query,
      () => {
        switch (route.value.query.edit) {
          case "data": {
            chosenComponent.value = EditData;
            break;
          }
          case "grades": {
            chosenComponent.value = EditGrades;
            break;
          }
          default: {
            chosenComponent.value = null;
          }
        }
      }
    );
    useFetch(async () => {
      // console.log(studentId);
      // await root.$accessor.fetchUser(studentId)
      student.value = await $http.$get(`/api/students/${studentId}`)
    });

    function handleClose(){
      chosenComponent.value = null;
      router.replace({ query: null });
    }
    async function handleRefresh(){
      student.value = await $http.$get(`/api/students/${studentId}`)
      chosenComponent.value = null;
      router.replace({ query: null });
    }
    return {
      afterEnter,
      enter,
      beforeLeave,
      leave,
      student,
      chosenComponent,
      orderedStudentProperties,
      handleClose,
      handleRefresh,
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
.editStudentPanel-enter-active {
  animation: edit 2s linear;
}
.editStudentPanel-leave-active {
  animation: edit 2s linear;
  animation-direction: reverse;
}

</style>