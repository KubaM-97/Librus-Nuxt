<template>
  <div class="wrapper">
    <TableHeader />
    <p v-if="$fetchState.error">
       {{ $t('failed_to_fetch_students_list') }}
    </p>
    <div class="image" v-else-if="$fetchState.pending">
        <img src="~images/loader.gif" alt="loading...">
    </div>
    <Students v-else :students="students"/>
  </div>
</template>

<script>
import TableHeader from "@/components/group/TableHeader.vue";
import Students from "@/components/group/Students.vue";

import { defineComponent, useRoute, ref, useContext, useFetch } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "GroupView",
  components: {
    TableHeader,
    Students,
  },
  setup() {
    const route = useRoute()
    const groupId = route.value.params.groupId;
    const students = ref([]);

    const { $http } = useContext();

    useFetch(async () => {
      try{
        students.value = await $http.$post(`api/students/`, 
        { group: groupId }
      )
      } catch (error) {
        const status = error.response.status;
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
            this.$toast.error(this.$t("alternative_log_error"));
          }
        }
      }
    })

    return { students }
  },
})
</script>

