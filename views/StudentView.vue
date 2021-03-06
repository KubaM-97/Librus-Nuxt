<template>
  <div class="wrapper">
    <FetchingLoader :fetchState="$fetchState" @fetch="fetch" />
    <StudentPanel
      v-if="!$fetchState.pending && !$fetchState.error"
      :student="student"
      @fetch="fetch"
    />
  </div>
</template>

<script>
import StudentPanel from "@/components/student/StudentPanel";
import {
  defineComponent,
  useStore,
  useRoute,
  useRouter,
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
  setup(_p, { root }) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const studentName = route.value.params.name;
    const student = ref({});
    const { $http } = useContext();
    const { fetch } = useFetch(async () => {
      try {
        student.value = await $http.$post(
          `/api/students/${studentName}`,
          {
            group: store.getters.loggedInUser.group,
          },
          {
            headers: {
              Authorization: root.$auth.strategy.token.get(),
            },
          }
        );
      } catch (error) {
        root.$toast.error(root.$t("failed_to_fetch_student_data"));
      } finally {
        if (route.value.query.edit) router.replace({ query: null });
      }
    });
    return {
      student,
      fetch,
    };
  },
});
</script>
