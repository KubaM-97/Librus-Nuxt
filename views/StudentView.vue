<template>
  <div>
    <div v-if="$fetchState.pending">Cierpliwości</div>
    <StudentPanel :student="student" @fetch="fetch" v-else/>
  </div>
</template>

<script>
import StudentPanel from "@/components/student/StudentPanel";
import {
  defineComponent,
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
  setup(_p, {root}) {
    const route = useRoute();
    const router = useRouter();
    const studentId = route.value.params.id;
    console.log(root.$auth.user.group, root.$auth.strategy.token.get());
    const student = ref({});
    const { $http } = useContext();
    const { fetch } = useFetch(async () => {
      try{

        student.value = await $http.$post(`/api/auth/students/${studentId}`, {
          group: root.$auth.user.group },{
        headers:{
          // Accept: application/json,
          Authorization: root.$auth.strategy.token.get()

        }}
        // ,{ group: '3B' }
      )
      } catch (error) {
        console.log(error, this, root.$toast);
        this.$toast.error(this.$t('failed_to_fetch_student_data'));
      }
      finally{
        if(route.value.query.edit) router.replace({ query: null });
      }
    })
    return {
      student,
      fetch,
    };
  },
});
</script>