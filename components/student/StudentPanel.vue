<template>
  <div class="text-left pl-2">
    <StudentTable :student="student" />
    <div class="px-md-5 py-md-3 w-100 panel">
      <div
        class="form-group d-flex justify-content-between"
        v-for="property in orderedStudentProperties"
        :key="`edit_student_main_panel_property_${property}`"
      >
        <span class="title">{{ $t(property) }}:</span>

        <span
          class="data"
          v-if="
            typeof student[property] !== 'object' && student[property] !== null
          "
        >
          {{ student[property] }}
        </span>

        <span class="data" v-else>
          <span
            v-for="(_subValue, subProperty) in student[property]"
            :key="`edit_student_main_panel_subProperty_${subProperty}`"
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
      <transition
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
        @before-leave="beforeLeave"
        :css="false"
      >
        <component
          ref="editStudentPanel"
          @close="handleClose"
          @refresh="handleRefresh"
          @submit="handleSubmit"
          :is="chosenComponent"
          :basedStudent="student"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import StudentTable from "@/components/global/StudentTable";
import EditData from "@/components/student/EditData";
import EditGrades from "@/components/student/EditGrades";
import validations from "@/assets/mixins/validations";
import {
  defineComponent,
  useRoute,
  useRouter,
  useContext,
  ref,
  shallowRef,
  watch,
  onMounted,
} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "StudentPanel",
  components: {
    StudentTable,
    EditData,
    EditGrades,
  },
  props: {
    student: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  mixins: [validations],
  emits: ["fetch"],
  setup(props, { root, emit }) {
    const fetch = props.fetch;
    const route = useRoute();
    const router = useRouter();
    function afterEnter(el) {
      el.addEventListener("animationend", function () {
        el.style = "";
      });
      el.querySelector(".overlay").style.animation =
        "showEditStudentPanelOverlay .7s";
      el.querySelector(".overlay").style.animationFillMode = "forwards";
      el.style.overflow = "scroll";
    }
    function enter(el, done) {
      el.addEventListener("animationend", function () {
        el.style = "";
        done();
      });
      el.style.animation = "showEditStudentPanel .7s";
      el.style.overflow = "hidden";
    }
    function beforeLeave(el) {
      el.addEventListener("animationend", function () {
        el.style = "";
      });
      el.querySelector(".overlay").style.animation =
        "showEditStudentPanelOverlay .7s";
      el.querySelector(".overlay").style.animationDirection = "reverse";
      el.querySelector(".overlay").style.animationFillMode = "forwards";
      el.style.overflow = "hidden";
    }
    function leave(el, done) {
      el.addEventListener("animationend", function () {
        el.style = "";
        done();
      });
      el.style.animation = "showEditStudentPanel .7s";
      el.style.animationDirection = "reverse";
      el.style.animationDelay = ".7s";
      el.style.overflow = "scroll";
    }

    const orderedStudentProperties = ref([
      "pesel",
      "phone",
      "email",
      "address",
      "mother",
      "father",
    ]);
    const chosenComponent = shallowRef(null);
    onMounted(() => {
      if (route.value.query.edit === "data") {
        chosenComponent.value = EditData;
      } else if (route.value.query.edit === "grades") {
        chosenComponent.value = EditGrades;
      }
    });
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
    const { $http } = useContext();
    const studentName = route.value.params.name;
    async function handleSubmit(clonedStudent) {
      try {
        this.$toast.show(this.$t("updating_student_data_in_progress"));
        clonedStudent.grades = clonedStudent.grades.filter((grade) => grade.score && grade.weight)

        await $http.$put(
          `/api/students/${studentName}`,
          {
            student: clonedStudent,
            group: root.$auth.user.group,
          },
          {
            headers: {
              Authorization: root.$auth.strategy.token.get(),
            },
          }
        );
        await emit("fetch");
        this.$toast.success(this.$t("successfully_updated_student_data"));
      } catch (err) {
        console.error(err);
        this.$toast.error(this.$t("failed_to_update_student_data"));
      }
    }
    function handleClose() {
      chosenComponent.value = null;
      router.replace({ query: null });
    }
    async function handleRefresh() {
      fetch();
    }
    return {
      afterEnter,
      enter,
      beforeLeave,
      leave,
      chosenComponent,
      orderedStudentProperties,
      handleClose,
      handleRefresh,
      handleSubmit,
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
  .panel{
    font-size: 9px;
    padding-right: 2px;
  }
  button {
    font-size: 9px;
    padding: 5px;
  }
}
</style>