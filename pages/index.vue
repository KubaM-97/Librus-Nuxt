<template>
<div>INDEX
    GroupView: {{students}} KONIEC
    <!-- <GroupView /> -->
</div>
</template>

<script>
import { defineComponent, useRouter, useStore,useContext, useFetch } from '@nuxtjs/composition-api'
// import GroupView from "@/views/GroupView.vue";

export default defineComponent({
    components:{
        // GroupView,
    },
    setup(_p, {root}) {
        const store = useStore()
        const router = useRouter()
        // if(store.getters.isAuthenticated) router.push({ path: `group/${store.getters.loggedInUser.group}` })
         const students = ref([]);
    const { $http } = useContext();
    useFetch(async () => {
      try{
        students.value = await $http.$post(`/api/students/`, 
        { group: root.$auth.user.group },{
        headers:{
          Authorization: root.$auth.strategy.token.get()
        }}
      )
       root.$toast.success('pobrano')
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
        students
    }
    },
})
</script>
