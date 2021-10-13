<template>
  <div class="fullClass">
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

      students.value = await $http.$post(`api/students/`, 
        { group: groupId }
      )
    })

    return { students }
  },
})
</script>

<style>
.fullClass {
  width: 90%;
  max-width: 1400px;
  margin: 100px auto;
  -webkit-box-shadow: 3px 3px 30px 5px #00c3ff;
  -moz-box-shadow: 3px 3px 30px 5px #00c3ff;
  box-shadow: 3px 3px 30px 5px #00c3ff;
  background-color: rgba(0, 0, 0, 0.55);
  text-align: center;
  font-size: 15px;
  padding: 40px 0;
}
</style>
