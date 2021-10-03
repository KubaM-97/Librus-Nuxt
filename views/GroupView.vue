<template>
  <div class="fullClass">
    <TableHeader />
    <!-- <Students :students="students"/> -->
  </div>
</template>

<script>
import TableHeader from "@/components/group/TableHeader.vue";
import Students from "@/components/group/Students.vue";

import { defineComponent, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'GroupView',
  components: {
    TableHeader,
    Students,
  },
  setup() {
    const store = useStore();
    // await store.dispatch("fetchStudents");
  },
  computed: {
      students() {
          return this.$store.state.students;
      }
  },
  mounted() {
    this.fetchStudents();
  },
  methods: {
    async fetchStudents() {
       await this.store.dispatch("fetchStudents");
    },
  }
});
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
