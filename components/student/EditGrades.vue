<template>
  <div class="editStudent wrapper mb-3 pt-4 pb-3 position-absolute"
  >
    <div class="overlay" />
    <div class="container">
      <span class="d-block mb-3">{{ $t("edit_grade") }}:</span>
      <div class="row">
        <Grade
          class="col-12 col-md-11"
          v-for="(grade, index) in basedGrades.grades"
          :key="index"
          :index="index"
          :grade="grade"
          @xxxxxx="yy"

        />
        <Grade
          class="col-12 col-md-11"
          v-for="n in gradesLength"
          :key="n + student.grades.length"
          :index="gradesLength + student.grades.length - 1"
          :gradesLength="gradesLength"
          @xxxxxx="yy"
        />

        <div class="showAnotherGrade">
          <button name="moreGradesEditGrades" @click="gradesLength++">+</button>
        </div>
      </div>
    <StudentTable :student="basedGrades" />

    <button
      class="btn btn-success btn-lg save mr-3 px-2 py-2"
      @click="saveChanges"
    >
      {{ $t("save_changes") }}
    </button>
    <button class="closeEditPanelBtn position-absolute" @click="$emit('close')">
      <img class="closeEditPanelImg w-100" src="@/assets/images/eXit.png" />
    </button>
    </div>
  </div>
</template>

<script>
import gradesService from "@/assets/mixins/gradesMixins.ts";
import Grade from "@/components/global/Grade.vue";
import StudentTable from "~/components/global/StudentTable";
import { defineComponent, ref } from "@nuxtjs/composition-api";
import axios from "axios";
export default defineComponent({
  name: "EditGrades",
  emit: ["close", "refresh"],
  components: {
    Grade,
    StudentTable,
  },
  props: {
    student: {
      type: Object,
      required: true,
    }
  },
  mixins: [gradesService],
  head() {
    return {
      title: this.$t("student_edit_page_title", {
        student: `${this.student.lastName} ${this.student.firstName}`,
      }),
    };
  },
  setup(props, {root, emit}) {
    const gradesLength = ref(0);
    const student = props.student
    const basedGrades = ref(JSON.parse(JSON.stringify(student)));
    async function saveChanges() {
      try {
        this.$toast.show(this.$t("updating_student_data_in_progress"));
        await root.$accessor.updateStudent({student: basedGrades.value})

        await emit('refresh')
        this.$toast.success(this.$t("successfully_updated_student_data"));
      } catch (err) {
        this.$toast.error(this.$t("failed_to_update_student_data"));
      }
    }
    function yy(grade, index){
      basedGrades.value.grades[index] = grade
    }
    // onActivated(()=>{
    //   console.log('44', props.student.grades[0]);
    //   basedGrades.value = {...student}
    // })
    return {
      gradesLength,
      saveChanges,
      basedGrades,
      yy,
    };
  },
});
</script>
<style lang="scss" scoped>
div.editStudent {
  background-color: black;
  overflow: hidden;
  .overlay {
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // z-index: 10;
  }
  font-size: 13px;
  // top: 20%;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  button {
    &.save {
      font-size: 15px;
      float: right;
      &[disabled] {
        background-color: rgb(248, 11, 11);
        cursor: not-allowed;
      }
    }
    &.closeEditPanelBtn {
      top: -10px;
      right: -10px;
      width: 40px;
      height: 40px;
      border-radius: 50px;
      outline: none;
      img.closeEditPanelImg {
        -webkit-box-shadow: 2px 2px 10px 2px #d54545;
        -moz-box-shadow: 2px 2px 10px 2px #d54545;
        box-shadow: 2px 2px 10px 2px #d54545;
        border-radius: 50px;
      }
    }
  }
}
</style>