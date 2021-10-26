<template>
    <table class="students">
      <thead>
        <tr>
          <th>{{ $t('number_abbr') }}.</th>
          <th>{{ $t('student') }}:</th>
          <th>{{ $t('grades') }}:</th>
          <th>{{ $t('grade_avg') }}:</th>
          <th>{{ $t('at_risks') }}:</th>
        </tr>
      </thead>
      <tbody>
        <!-- <NuxtLink  
          v-for="(student, index) in students"
          :key="student._id"
          tag="tr"
          :to="{
            path: `student/${student._id }`,
            params: { id: student._id },
          }"
          append> -->
          <StudentTable v-for="(student, index) in students" :key="student._id" 
          :student="student" :orderNo="index+1" 
          @click="$router.push({ path: `student/${student._id }`,
            params: { id: student._id }, append: true})"/>
        <!-- </NuxtLink> -->
        
      </tbody>
    </table>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import StudentTable from '@/components/global/StudentTable'
import gradesService from "@/assets/mixins/gradesMixins.ts";
export default defineComponent({
  name: "Students",
  components: {
    StudentTable,
  },
  props: {
    students: {
      type: Array,
      required: false,
      default: () => [],
    }
  },
  mixins: [gradesService],
});
</script>

<style>
.students {
  width: 90%;
  margin: 50px auto;
}
</style>