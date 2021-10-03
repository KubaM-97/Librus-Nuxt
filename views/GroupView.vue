<template>
  <div class="fullClass">
    <TableHeader />
    <p v-if="$fetchState.error">
      Failed to fetch students
    </p>
    <template v-if="$fetchState.pending">
      <p>GIF: </p>
    </template>
    <Students v-else :students="students"/>
  </div>
</template>

<script>
import TableHeader from "@/components/group/TableHeader.vue";
import Students from "@/components/group/Students.vue";

import { defineComponent, computed, ref, useAsync, useContext, useFetch } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "GroupView",
  components: {
    TableHeader,
    Students,
  },
  setup(_, { root }) {
    const group = computed(() => root.$accessor.user.group);
    const students = ref([])

    const { $http } = useContext()
    //  const students = useAsync(() => $http.$post("/api/students", {
    //     group: group.value,
    //   })
    // );
    useFetch(async () => {
      students.value = await $http.$post(`api/students/`, 
        { group: group.value }
      )
    })

    return { students }
  },
  fetchOnServer: false,
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
