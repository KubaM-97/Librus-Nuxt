<template>
  <div class="EditStudentGrades" ref="editStudentGrades">
    <span id="EditStudentGradesTitle">{{ $t('edit_grade') }}:</span>
    <div class="container">
      <div class="row">

      <Grade class="col-12 col-md-11" v-for="(grade, index) in student.grades" :key="index" :index="index" :grade="grade" />

      <Grade class="col-12 col-md-11" v-for="n in gradesLength" :key="n" :index="gradesLength + student.grades.length" :gradesLength="gradesLength" />

        <div class="showAnotherGrade">
          <button name="moreGradesEditGrades" @click="gradesLength++">  +  </button>
        </div>
      </div>
    </div>
     
    <StudentTable :student="student"/>
     
    <!-- <button name="possibleSaveData" class="btn btn-success btn-lg save" :disabled="!isPossibleSave"> -->
    <button name="possibleSaveData" class="btn btn-success btn-lg save">
      {{ $t('save_changes') }}
    </button>
   <button name="closeTheGradesPanel" @click="$router.go(-1)"><img class="closeThePanel" src="@/assets/images/eXit.png"/></button>
 </div>
</template>

<script>
import gradesService from "@/assets/mixins/gradesMixins.ts";
import Grade from "@/components/global/Grade.vue";
import StudentTable from "@/components/global/StudentTable.vue";
import { ref } from "@nuxtjs/composition-api";
export default {
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
  setup() {
    const gradesLength = ref(0);
    return {
      gradesLength,
    };
  },
};
</script>
<style lang="css" scoped>
div.EditStudentGrades {
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
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  padding: 70px 0 40px;
}
#EditStudentGradesTitle {
  display: block;
  margin-bottom: 40px;
}
div.gainedGradesAndNewGrades {
  width: 80%;
}
div.gainedGrades {
  margin: auto;
}
div.gainedGrades .row > div {
  align-content: flex-end;
  display: grid;
  margin-bottom: 30px;
}
.studentPanelSummary {
  width: 80%;
  margin: 150px auto 100px;
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
  div.EditStudentGrades {
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