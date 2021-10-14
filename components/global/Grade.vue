<template>
  <div class="addStudentPanelGradesContentSingle" :ref="`grade_${index}`">
    <div class="container">
      <div class="row">
        <div class="col-2 col-md-3">
          <div class="addStudentPanelGradesContentSingleGrade">
            <div class="select">
              <label for="score">{{ $t("grade_score") }}:</label>
              <select v-model.number="grade.score">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
        </div>

        <div class="col-2 col-md-3">
          <div class="addStudentPanelGradesContentSingleWeight">
            <label for="weight">{{ $t("grade_weight") }}:</label>

            <div class="select">
              <select v-model.number="grade.weight">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </div>

        <div class="col-7 col-md-5">
          <div class="addStudentPanelGradesContentSingleDescription">
            <span class="descriptionCount"
              >{{ $t("characters_left_many", { characters }) }}.</span
            >

            <label class="description"
              >{{ $t("grade_description") }}:

              <input
                autocomplete="off"
                type="text"
                v-model="grade.description"
                class="description"
                maxlength="30"
              />
            </label>
          </div>
        </div>

        <div class="col-1">
          <span @click="remove(index)" class="remove"
            ><em>{{ $t("remove") }}</em></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  watch,
  onBeforeUpdate,
  useStore,
  computed,
} from "@nuxtjs/composition-api";
import gradesService from "@/assets/mixins/gradesMixins.ts";

export default defineComponent({
  name: "Grade",
  props: {
    index: {
      type: Number,
      required: true,
    },
    characters: {
      type: Number,
      required: false,
      default: 30,
    },
    grade: {
      type: Object,
      required: false,
      default: () => {
        return {
          score: "",
          weight: "",
          description: "",
          date: "",
        };
      },
    },
  },
  mixins: [gradesService],
  setup(props, { root }) {
    const index = props.index;

    const store = useStore();
    const characters = props.characters;
    const grades = computed(() => root.$accessor.student.grades);
    const grade = props.grade;
    watch(
      () => [...grade.description],
      () => {
        const inputGradeDescription =
          this.$refs[`grade_${index}`].querySelectorAll("input.description")[
            index
          ].value;
        const descriptionCount = this.$refs[`grade_${index}`].querySelectorAll(
          "span.descriptionCount"
        )[index];
        const counter = characters - inputGradeDescription.length;
        switch (counter) {
          case 2:
          case 3:
          case 4:
          case 22:
          case 23:
          case 24:
            descriptionCount.innerHTML = root.$t("characters_left_few", {
              characters: counter,
            });
            break;
          case 1:
            descriptionCount.innerHTML = root.$t("characters_left_one", {
              characters: counter,
            });
            break;
          default:
            descriptionCount.innerHTML = root.$t("characters_left_many", {
              characters: counter,
            });
        }
      }
    );

    onBeforeUpdate(() => {
      grade.date = gradesService.setup().getCurrentDate();
      updateStudentGrade();
    });

    //places a new mark, weight, description or date in appropriate place according to the provided index inside newGrades in Vuex
    function updateStudentGrade() {
      const clonedGrade = [...grades.value];
      clonedGrade[index] = { ...grade };
      root.$accessor.updateStudent({ property: "grades", value: clonedGrade });
    }

    //clears newGrades object in Vuex
    function remove(index) {
      root.$accessor.removeGrade(index);
      const refEl = this.$refs[`grade_${index}`];
      // console.log(refEl);
      refEl.parentNode.removeChild(refEl);
    }

    return {
      store,
      updateStudentGrade,
      remove,
      grades,
    };
  },
});
</script>

<style scoped>
.addStudentPanelGradesContentSingle {
  margin-bottom: 30px;
}

.addStudentPanelGradesContentSingle .row > div {
  display: grid;
  align-content: flex-end;
}

@media (max-width: 768px) {
  .addStudentPanelGradesContentSingle {
    width: 100%;
  }
}
</style>
