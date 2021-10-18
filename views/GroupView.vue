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
    // const studentsa = ref([]);

    const { $http } = useContext();

    useFetch(async () => {
      students.value = await $http.$get('http://localhost:1222/posts')
      // studentsa.value = await $http.$put('http://localhost:1222/posts/255', {imie: 'dupsko', naz: 'jenot'})
      // studentsa.value = await $http.$get('http://localhost:1222/posts/255')
      // students.value = await $http.$post(`api/students/`, 
      //   { group: groupId }
      // )
    })

    return { students }
  },
})
</script>

