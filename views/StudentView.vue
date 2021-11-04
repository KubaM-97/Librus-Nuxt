<template>
  <div>
    <div v-if="$fetchState.pending">Cierpliwości</div>
    <StudentPanel :student="student" :fetch="fetch" v-else/>
  </div>
</template>

<script>
import StudentPanel from "@/components/student/StudentPanel";
import {
  defineComponent,
  useRoute,
  ref,
  useFetch,
  useContext,
} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "StudentView",
  components: {
    StudentPanel,
  },
  head() {
    return {
      title: this.$t("student_page_title", {
        student: `${this.student.firstName} ${this.student.lastName}`,
      }),
    };
  },
  setup(_p, {root}) {
    const route = useRoute();
    const studentId = route.value.params.id;
    const student = ref({});
    const { $http } = useContext();
    const { fetch } = useFetch(async () => {
      try{

        //$post zamiast $get przy parametrach
        student.value = await $http.$get(`/api/students/${studentId}`
        // ,{ group: '3B' }
      )
      } catch (error) {
        console.log(error, this, root.$toast);
        this.$toast.error(this.$t('failed_to_fetch_student_data'));
      }
    })
    return {
      student,
      fetch,
    };
  },
});
</script>