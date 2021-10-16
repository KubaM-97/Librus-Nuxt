<template>
  <div class="editStudentPanel" ref="editStudentPanel">
    <div class="students">
      <!-- <StudentTable :student="student" /> -->

      <div>
        <div class="form-group">
          <span class="title">PESEL:</span>
          <span class="data">{{ student.pesel }}</span>
        </div>

        <div class="form-group">
          <span class="title">{{ $t("address") }}:</span>
          <!-- <span class="data"
            >ul.{{ student.street.name }} {{ student.street.nr }} m.{{
              student.street.flat
            }}
            <br />
            {{ student.street.postcode }} {{ student.street.city }}</span
          > -->
        </div>

        <div class="form-group">
          <span class="title">{{ $t("phone") }}:</span>
          <span class="data">{{ student.phone }}</span>
        </div>

        <div class="form-group">
          <span class="title">{{ $t("email") }}:</span>
          <span class="data">{{ student.email }}</span>
        </div>

        <!-- <div class="form-group">
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
        </div> -->
      </div>

      <div>
        <!-- <NuxtLink
          :to="{
            path: `/group/student/${studentId}/editData`,
            params: { student },
          }"
        >
          {{ $t("edit_data") }}
        </NuxtLink>
        <NuxtLink
          :to="{
            path: `/group/student/${studentId}/editGrades`,
            params: { student },
          }"
        >
          {{ $t("edit_grades") }}
        </NuxtLink> -->
        <button @click="property = 'Data'">{{ $t("edit_data") }}</button>
        <button @click="property = 'Grades'">{{ $t("edit_grades") }}</button>
        <NuxtChild v-if="property" @close="property = null" :property="property"/> 
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
import StudentTable from "@/components/global/StudentTable";
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
  components: {
    StudentTable,
  },
  mixins: [gradesService],

  setup() {
    const route = useRoute();
    const studentId = route.value.params.id;
    const student = ref("");
    const property = ref(null);
    // function xxx() {
    //   history.pushState(
    //     {},
    //     null,
    //     encodeURIComponent(`${student.value.lastName.toLowerCase()} ${student.value.firstName.toLowerCase()}`)
    //   );
    // }
    const { $http } = useContext();

    useFetch(async () => {
      console.log(studentId);

      student.value = await $http.$get(`api/students/${studentId}`);
      console.log(student.value);
      // xxx()
    });

    return {
      studentId,
      student,
      property,
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
@media (max-width: 768px) {
  button {
    font-size: 9px;
    padding: 5px;
  }
}
</style>