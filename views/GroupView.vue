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
  setup(_p, {root}) {
    const route = useRoute()
    // console.log('2222');
    console.log(root.$auth);
    // console.log('3333333');
    const groupId = route.value.params.groupId;
    const students = ref([]);

    const { $http } = useContext();

    useFetch(async () => {
      try{
        console.log('WYŚLIJ KURWA');
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

    return { students }
  },
})
</script>

