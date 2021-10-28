<template>
  <div class="editStudent mb-3" ref="editStudentGrades">
    <span class="d-block mb-3">{{ $t('edit_grade') }}:</span>
    <div class="container">
      <div class="row">
{{gradesLength + student.grades.length}}
      <Grade class="col-12 col-md-11" v-for="(grade, index) in student.grades" :key="index" :index="index" :grade="grade" />

      <Grade class="col-12 col-md-11" v-for="n in gradesLength" :key="n + student.grades.length" :index="gradesLength + student.grades.length" :gradesLength="gradesLength" />

        <div class="showAnotherGrade">
          <button name="moreGradesEditGrades" @click="gradesLength++">  +  </button>
        </div>
      </div>
    </div>
    <StudentTable :student="student"/>
     
    <button
        class="btn btn-success btn-lg save mr-3"
        @click="saveChanges"
      >
        <!-- :disabled="$v.student.$invalid && $v.student.$anyDirty" -->
        {{ $t("save_changes") }}
      </button>
   <button name="closeTheGradesPanel" @click="$router.go(-1)"><img class="closeThePanel" src="@/assets/images/eXit.png"/></button>
 </div>
</template>

<script>
import gradesService from "@/assets/mixins/gradesMixins.ts";
import Grade from "@/components/global/Grade.vue";
import StudentTable from "~/components/global/StudentTable";
import { defineComponent, ref, useMeta } from "@nuxtjs/composition-api";
import axios from 'axios'
export default defineComponent({
  name: "EditGrades",
  components: {
    Grade,
    StudentTable,
  },  
  props: {
    student: {
      type: Object,
      required: true
    }
  },
  mixins: [gradesService],
  setup(props) {
    const gradesLength = ref(0);
    const student = props.student;
    const { title } = useMeta();
    title.value = this.$t('student_edit_page_title', { student: `${ student.lastName } ${ student.firstName }` }),

    function saveChanges() {
      
      try {
        axios.put(`/api/students/${student._id}`, {
          student: student,
        });
        this.$toast.success(this.$t("successfully_updated_student_data"));
      } catch (err) {
        console.error(err);
        this.$toast.error(this.$t("successfully_updated_student_data"));
      }
    }
    return {
      gradesLength,
      saveChanges,
    };
  },
});
</script>
<style lang="scss" scoped>
div.editStudent {
  width: 90%;
  max-width: 1400px;
  margin: 100px auto;
  -webkit-box-shadow: 3px 3px 30px 5px #00c3ff;
  -moz-box-shadow: 3px 3px 30px 5px #00c3ff;
  box-shadow: 3px 3px 30px 5px #00c3ff;
  background-color: rgba(0, 0, 0, 1);
  text-align: center;
  font-size: 13px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  padding: 70px 0 40px;
}
button.save {
  font-size: 15px;
  padding: 8px 12px;
  opacity: 1;
  float: right;
}
button.save[disabled] {
  background-color: red;
  cursor: not-allowed;
}
.showAnotherGrade {
  position: absolute;
  top: 50px;
  right: 20px;
}
button[name="closeTheGradesPanel"] {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  outline: none;
}
img.closeThePanel {
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 2px 2px 10px 2px #d54545;
  -moz-box-shadow: 2px 2px 10px 2px #d54545;
  box-shadow: 2px 2px 10px 2px #d54545;
  border-radius: 50px;
}
@media (max-width: 768px) {
  div.editStudent {
    width: 95%;
    top: -30%;
  }
  .showAnotherGrade button {
    font-size: 19px;
    padding: 1px 9px;
    font-weight: 300;
  }
  table td {
    font-size: 11px;
  }
  button.save {
    font-size: 11px;
  }
  img.closeThePanel {
    width: 30px;
    height: 30px;
  }
}
</style>