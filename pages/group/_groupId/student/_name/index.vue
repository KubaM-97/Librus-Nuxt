<template>
  <StudentView />
</template>

<script>
import StudentView from "@/views/StudentView.vue";
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "Student",
  components: {
    StudentView,
  },
});
</script>