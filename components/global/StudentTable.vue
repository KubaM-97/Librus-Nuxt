<template>
  <table class="mb-3">
    <tbody>
      <StudentRow :student="student"/>
    </tbody>
  </table>
</template>


<script>
import { defineComponent } from "@nuxtjs/composition-api";
import StudentRow from "@/components/global/StudentRow";

export default defineComponent({
  name: "StudentTable",
  props: {
    student: {
        type: Object,
        required: false,
        default: () => {}
    },
  },
  components: {
    StudentRow,
  }
})
</script>
