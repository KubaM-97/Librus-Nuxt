<template>
  <div class="newStudentPanelGradesContentSingle mb-3" :ref="`grade_${index}`">
    <div class="container">
      <div class="row singleGrade">
        <div class="col-2 col-md-3">
          <div class="newStudentPanelGradesContentSingleGrade">
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
          <div class="newStudentPanelGradesContentSingleWeight">
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

        <div class="col-6 col-md-5">
          <div class="newStudentPanelGradesContentSingleDescription">
            <span class="descriptionCount">{{ leftCharactersMessage }}.</span>

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
  watch,
  onBeforeUpdate,
} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Grade",
  props: {
    index: {
      type: Number,
      required: true,
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
  emits: ["updateGrade", "removeGrade"],
  setup(props, { root, emit }) {
    const index = props.index;
    const grade = props.grade || ref();
    const characters = ref(30);
    const leftCharactersMessage = ref(
      root.$t("characters_left_many", { characters: characters.value - grade.description.length })
    );
    watch(
      () => [...grade.description],
      () => {
        const counter = characters.value - grade.description.length;
        switch (counter) {
          case 2:
          case 3:
          case 4:
          case 22:
          case 23:
          case 24:
            leftCharactersMessage.value = root.$t("characters_left_few", {
              characters: counter,
            });
            break;
          case 1:
            leftCharactersMessage.value = root.$t("characters_left_one", {
              characters: counter,
            });
            break;
          default:
            leftCharactersMessage.value = root.$t("characters_left_many", {
              characters: counter,
            });
        }
      }
    );

    onBeforeUpdate(() => {
      grade.date = root.getCurrentDate();
      emit("updateGrade", grade, index);
    });
    function remove(index) {
      emit("removeGrade", index);
    }
    return {
      leftCharactersMessage,
      remove,
    };
  },
});
</script>

<style lang="scss" scoped>
.newStudentPanelGradesContentSingle {
  .singleGrade {
    display: flex;
    align-items: flex-end;
    input:focus,
    select:focus {
      border: 2px solid #a5cda5;
      -webkit-box-shadow: 0px 0px 3px 2px rgba(204, 204, 204, 0.9);
      -moz-box-shadow: 0px 0px 3px 2px rgba(204, 204, 204, 0.9);
      box-shadow: 0px 0px 3px 2px rgba(204, 204, 204, 0.9);
    }
  }
}
</style>
