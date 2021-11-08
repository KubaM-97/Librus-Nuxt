<template>
  <div class="wrapper">
    <TableHeader />
    <FetchingLoader :fetchState="$fetchState" @fetch="fetch"/>
    <Students v-if="!$fetchState.pending && !$fetchState.error" :students="students"/>
  </div>
</template>

<script>
import TableHeader from "@/components/group/TableHeader.vue";
import Students from "@/components/group/Students.vue";
import FetchingLoader from "@/components/global/FetchingLoader.vue";

import { defineComponent, useRoute, ref, useContext, useFetch } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "GroupView",
  components: {
    TableHeader,
    Students,
    FetchingLoader,
  },
  setup(_p, {root}) {
    const route = useRoute()
    // console.log('2222');
    console.log(root.$auth);
    // console.log('3333333');
    const groupId = route.value.params.groupId;
    const students = ref([]);

    const { $http } = useContext();

    const { fetch } = useFetch(async () => {
      try{
        students.value = await $http.$post(`/api/auth/students/`, 
        { group: root.$auth.user.group },{
        headers:{
          // Accept: application/json,
          Authorization: root.$auth.strategy.token.get()

        }}
      )
      } catch (error) {
        console.log(error);
        const status = error.response;
        switch (status) {
          case 404: {
            this.$toast.error(this.$t("failed_to_fetch_students_list"));
            break;
          }
          case 500: {
            this.$toast.error(this.$t("server_error"));
            break;
          }
          default: {
            // this.$toast.error(this.$t("alternative_log_error"));
          }
        }
      }
    })

    return { students, fetch }
  },
})
</script>

