<template>
  <div class="editStudentPanel" ref="editStudentPanel">
    <div class="students">
      <table>
        <thead>
          <th>{{ $t("students_first_and_lastname") }}</th>
          <th>{{ $t("grades") }}:</th>
          <th>{{ $t("avg") }}:</th>
          <th>{{ $t("at_risk") }}:</th>
        </thead>
        <tbody>
          <tr>
            <td>{{ student.lastName.toUpperCase() }} {{ student.firstName }}</td>
            <td  class="gradeWeightColor"
                :class="gradeColor(grade.weight)"
                v-for="(grade, index) in student.grades"
                :key="`grade-${index}`"
                @mouseenter="showGradeDetails($event, grade)"
                @mouseleave="hideGradeDetails($event)">
                {{ grade.score }}
            </td>
            <td>{{ calculateAvgGrade(student.grades) }}</td>
            <td>
              <span v-if="calculateAvgGrade(student.grades) < 2" class="fire">
                {{ $t("at_risk").toUpperCase() }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <div class="form-group">
          <span class="title">PESEL:</span>
          <span class="data">{{ student.pesel }}</span>
        </div>

        <div class="form-group">
          <span class="title">{{ $t("address") }}:</span>
          <span class="data"
            >ul.{{ student.street.name }} {{ student.street.nr }} m.{{
              student.street.flat
            }}
            <br />
            {{ student.street.postcode }} {{ student.street.city }}</span
          >
        </div>

        <div class="form-group">
          <span class="title">{{ $t("phone") }}:</span>
          <span class="data">{{ student.phone }}</span>
        </div>

        <div class="form-group">
          <span class="title">{{ $t("email") }}:</span>
          <span class="data">{{ student.email }}</span>
        </div>

        <div class="form-group">
          <span class="title">{{ $t("mother") }}:</span>
          <span class="data"
            >{{ student.mother.firstname }} {{ student.mother.lastname }} <br />
            {{ student.mother.phone }} <br />
            {{ student.mother.email }}
          </span>
        </div>

        <div class="form-group">
          <span class="title">{{ $t("father") }}:</span>
          <span class="data"
            >{{ student.father.firstname }} {{ student.father.lastname }} <br />
            {{ student.father.phone }} <br />
            {{ student.father.email }}</span
          >
        </div>
      </div>

      <div>
        <NuxtLink
           :to="{
            path: `/group/student/${id}/editGrades`,
            params: { student },
          }"
        >
          {{ $t("edit_data") }}
        </NuxtLink>
        <NuxtLink
           :to="{
            path: `/group/student/${id}/editGrades`,
            params: { student },
          }"
        >
          {{ $t("edit_grades") }}
        </NuxtLink>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
import gradesService from "@/assets/mixins/gradesMixins.ts";
import {
  defineComponent,
  useRoute,
  ref,
  useContext,
  useFetch,
} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Student",
  mixins: [gradesService],

  setup() {
    const route = useRoute();
    const id = route.value.params.id;
    const student = ref("");
    const { $http } = useContext();

    useFetch(async () => {
      student.value = await $http.$get(`api/students/${id}`);
    });

    return {
      id,
      student,
    };
  },
});
</script>


<style>
div.students {
  width: 90%;
  margin: 50px auto;
  font-size: 13px;
}

button {
  background-color: blueviolet;
  display: inline-block;
  font-size: 13px;
  color: #fff;
  border-radius: 4px;
  padding: 6px 11px;
  text-shadow: 1px 1px 1px violet;
  margin: 0 15px;
}
@media(max-width: 768px){
  
  button {
    font-size: 9px;
    padding: 5px;
  }
}
</style>