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
    const students = ref([]);
    const { $http } = useContext();
    const { fetch } = useFetch(async () => {
      try{
        students.value = await $http.$post(`/api/students/`, 
        { group: root.$auth.user.group },{
        headers:{
          Authorization: root.$auth.strategy.token.get()
        }}
      )
      } catch (error) {
        const status = error.response.status;
        switch (status) {
          case 404: {
            root.$toast.error(root.$t("failed_to_fetch_students_list"));
            break;
          }
          case 500: {
            root.$toast.error(root.$t("server_error"));
            break;
          }
          default: {
            root.$toast.error(root.$t("alternative_log_error"));
          }
        }
      }
    })

    return { 
      students, 
      fetch
    }
  },
})
</script>

