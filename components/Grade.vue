<template>

  <div class="addStudentPanelGradesContentSingle">

       <div class="container">

          <div class="row">

            <div class="col-2 col-md-3">

                <div class="addStudentPanelGradesContentSingleGrade">

                  <!-- <label for="marks">{{ $t('mark') }}:</label> -->

                  <div class="select">

                    <select v-model.number="grade.mark" @change="addNewItem('mark')" id="mark">
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

                  <label for="weight">{{ $t('weight') }}:</label>

                  <div class="select">
                      <select v-model.number="grade.weight" @change="addNewItem('weight')" id="weight">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                      </select>
                  </div>

              </div>

            </div>

            <div class="col-7 col-md-5">

                <div class="addStudentPanelGradesContentSingleDescription">

                 <span class="descriptionCount">{{ $t('characters_left', { characters }) }}.</span>

                 <label class="description">{{ $t('grade_description') }}:

                     <input autocomplete="off" name="#" type="text" v-model="grade.description" @change="addNewItem('description')" class="description" maxlength="30">

                 </label>

             </div>

            </div>

            <div class="col-1">
                <span @click="remove(index)" class="remove"><em>{{ $t('remove') }}</em></span>
            </div>

          </div>

       </div>
  </div>

</template>

<script>

// import gradesService from "../assets/mixins/gradesMixins.js"

import { defineComponent, ref, reactive, watch, onBeforeUpdate, useStore } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Grade",
  props: {
    index: Number
  },
  emits: ["letMeSave"],
  setup(props, {emit}){

    const index = props.index

    const store = useStore()
    const gradesVuex = store.state.newGrades;
    
    const characters = ref(30);

    const grade = reactive({
      mark: "",
      weight: "",
      description: "",
      date: ""
    })
    
    watch(() => [...grade.description], () => {
        const inputGradeDescription = document.querySelectorAll("input.description")[index].value;
        const descriptionCount = document.querySelectorAll("span.descriptionCount")[index];
        const counter = (characters.value - (inputGradeDescription.length));
        switch (counter) {
          case 2:
          case 3:
          case 4:
          case 22:
          case 23:
          case 24:
            descriptionCount.innerHTML = `Pozostały: ${counter} znaki.`;
            break;
          case 1:
            descriptionCount.innerHTML = `Pozostał: ${counter} znak.`;
            break;
          default:
            descriptionCount.innerHTML = `Pozostało: ${counter} znaków.`;
        }
    })

    onBeforeUpdate(() => {
      // grade.date = gradesService().whatsTheDatePlease();
      addNewItem("date");
    })

    //places a new mark, weight, description or date in appropriate place according to the provided index inside newGrades in Vuex
    function addNewItem(gradeProperty){
        
        //e.g    for second component Grade.vue:   store.state.newGrades.grades[1] = 5                           store.state.newGrades.grades=[3,5]
        //e.g    for second component Grade.vue:   store.state.newGrades.weights[1] = 5                          store.state.newGrades.weights=[3,5]
        //e.g    for second component Grade.vue:   store.state.newGrades.descriptions[1] = "Praca domowa"        store.state.newGrades.descriptions=["Kartkówka", "Praca domowa"]
        //e.g    for second component Grade.vue:   store.state.newGrades.dates[1] = "23.08.2020 14:00:00"        store.state.newGrades.dates=["21.08.2020 11:30:00", "23.08.2020 14:00:00"]

        //       store.state.newGrades.marks[1] = grade[mark]
        //       store.state.newGrades.weights[1] = grade[weight]
        //       store.state.newGrades.descriptions[1] = grade[description]
        //       store.state.newGrades.dates[1] = grade[date]

        gradesVuex[gradeProperty+"s"][index]=grade[gradeProperty];

        for(const gradeProperty in gradesVuex){

          if(gradesVuex[gradeProperty][index] === undefined)    gradesVuex[gradeProperty][index]="";

        }

        emit('letMeSave')

    }

    //clears newGrades object in Vuex
    function remove(index){

      for (const gradeProperty in gradesVuex) {
          gradesVuex[gradeProperty][index] = "";
      }
    
      document.querySelectorAll(".addStudentPanelGradesContentSingle")[index].style.display = "none";

    }

    return {
      store,
      characters,
      grade,
      addNewItem,
      remove
    }
  }

});

</script>

<style scoped>

.addStudentPanelGradesContentSingle {
    margin-bottom: 30px;
}


.addStudentPanelGradesContentSingle .row>div{
  display: grid;
  align-content: flex-end;
}


@media (max-width: 768px){
    .addStudentPanelGradesContentSingle{
        width: 100%;
    }
}
</style>
