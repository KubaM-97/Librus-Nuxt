<template>
  <div class="students">
    <table ref="tableStudents">
      <thead>
        <th>{{ $t('number_shortcut') }}.</th>
        <th>{{ $t('student') }}:</th>
        <th>{{ $t('marks') }}:</th>
        <th>{{ $t('marks_avg') }}:</th>
        <th>{{ $t('threatments') }}:</th>
      </thead>
      
            <!-- query: { student: { `${student.lastName}` } }, -->
      <tbody>
        {{ students }}
        <!-- <nuxt-link
          v-for="(student, index) in students"
          :key="student.id"
          custom
          v-slot="{ navigate }"
          :to="{
            path: '/group/student',
            params: {
              id: student.id,

              lastName: student.lastName,
              firstName: student.firstName,

              marks: student.marks,
              weights: student.weights,
              descriptions: student.descriptions,
              dates: student.dates,

              pesel: student.pesel,

              streetName: student.street.name,
              streetNr: student.street.nr,
              streetFlat: student.street.flat,
              streetPostcode: student.street.postcode,
              streetCity: student.street.city,

              phone: student.phone,
              email: student.email,

              motherFirstName: student.mother.firstName,
              motherLastName: student.mother.lastName,
              motherPhone: student.mother.phone,
              motherEmail: student.mother.email,

              fatherFirstName: student.father.firstName,
              fatherLastName: student.father.lastName,
              fatherPhone: student.father.phone,
              fatherEmail: student.father.email,
            },
          }"
        >
          <tr @click="navigate" @keypress.enter="navigate" role="link">
            <td>{{ index + 1 }}.</td>
            <td>
              {{ student.lastName.toUpperCase() }} {{ student.firstName }}
            </td>
            <td>
              <span
                class="grades"
                v-html="gradeWeightColor(student.marks, student.weights)"
              >
              </span>
            </td>
            <td>{{ avg(student.marks, student.weights) }}</td>
            <td v-html="threatness(avg(student.marks, student.weights))"></td>
          </tr>
        </nuxt-link> -->
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent, computed, ref, useContext, useFetch } from "@nuxtjs/composition-api";

// import gradesService from "@/assets/mixins/gradesMixins.js";
export default defineComponent({
  name: "Students",
  props: {
    students: {
      type: Array,
      required: false,
      default: () => [],
    }
  },
  setup(props) {
    console.log(props);
    return 
  },
  mounted() {
    this.addToolTips();
  },
  methods: {
    addToolTips(){
     for (let i = 0; i < props.students.value.length; i++) {
        // gradesService().showTooltip(
        //   this.$refs.tableStudents.querySelectorAll("tr")[i],
        //   this.props.students.value[i]
        // );
      }
    }
  },
  // mixins: [gradesService],
});
</script>

<style>
div.students {
  width: 90%;
  margin: 50px auto;
}
</style>