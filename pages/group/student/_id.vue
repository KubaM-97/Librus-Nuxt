<template>
  <div class="editStudentPanel" ref="editStudentPanel">
    <!-- <div class="editStudentPanelMain">
      <div class="editStudentPanelNameTitle">
        <span>{{ $t('students_first_and_lastname') }}</span>
      </div>
      <div class="editStudentPanelNameValue">
        {{ fullName }}
      </div>

      <div class="editStudentPanelNameDetailData">
        <div class="form-group">
          <span class="title">PESEL:</span>
          <span class="data">{{ pesel }}</span>
        </div>

        <div class="form-group">
          <span class="title">{{ $t('address') }}:</span>
          <span class="data"
            >ul.{{ streetName }} {{ streetNr }} m.{{ streetFlat }}
            <br />
            {{ streetPostcode }} {{ streetCity }}</span
          >
        </div>

        <div class="form-group">
          <span class="title">{{ $t('phone') }}:</span>
          <span class="data">{{ phone }}</span>
        </div>

        <div class="form-group">
          <span class="title">{{ $t('email') }}:</span>
          <span class="data">{{ email }}</span>
        </div>

        <div class="form-group">
          <span class="title">{{ $t('mother') }}:</span>
          <span class="data"
            >{{ motherFirstName }} {{ motherLastName }} <br />
            {{ motherPhone }} <br />
            {{ motherEmail }}
          </span>
        </div>

        <div class="form-group">
          <span class="title">{{ $t('father') }}:</span>
          <span class="data"
            >{{ fatherFirstName }} {{ fatherLastName }} <br />
            {{ fatherPhone }} <br />
            {{ fatherEmail }}</span
          >
        </div>
      </div>

      <div class="editStudentPanelNameButtons">
        <button
          name="showEditStudentDataPanel"
          @click="showEditStudentDataPanel()"
        >
          {{ $t('edit_data') }}
        </button>
      </div>

      <div class="editStudentPanelGradesTitle">
        <span>{{ $t('grades') }}</span>
      </div>

      <div
        class="editStudentPanelGradesValue"
        v-html="gradeWeightColor(gradesMarks, gradesWeights)"
      ></div>

      <div class="editStudentPanelGradesButtons">
        <button
          name="showEditStudentGradesPanel"
          @click="showEditStudentGradesPanel()"
        >
          {{ $t('edit_remove_grade') }}
        </button>
      </div>
  
      <div class="editStudentPanelAvgTitle">
        <span>{{ $t('avg') }}</span>
      </div>

      <div class="editStudentPanelAvgValue">
        {{ avg(gradesMarks, gradesWeights) }}
      </div>

      <div class="editStudentPanelThreatnessTitle">
        <span>{{ $t('at_risk') }}</span>
      </div>

      <div
        class="editStudentPanelThreatnessValue"
        v-html="threatness(avg(gradesMarks, gradesWeights))"
      ></div>
    </div>
    <router-view
      v-slot="{ Component }"
      v-model:showDataEditionRouterView="showDataEditionRouterView"
    >
      <transition name="EditStudentDataPanel" mode="out-in">
        <component :is="Component" v-if="showDataEditionRouterView" />
      </transition>
    </router-view>

    <div></div>
    <router-view
      v-slot="{ Component }"
      v-model:showGradesEditionRouterView="showGradesEditionRouterView"
    >
      <transition name="EditStudentDataPanel" mode="out-in">
        <component :is="Component" v-if="showGradesEditionRouterView" />
      </transition>
    </router-view> -->
  </div>
</template>

<script>
// import gradesService from "../assets/mixins/gradesMixins.js";
import { defineComponent, useStore, useRoute, useRouter, ref, computed, onMounted, onUpdated } from '@nuxtjs/composition-api';

export default defineComponent({
  name: "Student",
  props: {
    // student: {
    //   type: Object,
    //   required: true
    // }
  },
  setup(props) {
    const route = useRoute()
    console.log(route, props)
    // const editStudentPanel = ref(null);
    // const route = useRoute();
    // const router = useRouter();
    // const store = useStore();
    // const showDataEditionRouterView = ref(false);
    // const showGradesEditionRouterView = ref(false);
    // const fullName = computed(() => store.getters.fullNameGetters(route.params));
    // function showEditStudentDataPanel() {
    //   router.push({ name: "EditData", params: route.params });
    //   showDataEditionRouterView.value = true;
    // }
    // function showEditStudentGradesPanel() {
    //   router.push({ name: "EditGrades", params: route.params });
    //   showGradesEditionRouterView.value = true;
    // }
    // onMounted(() => {
    //   // gradesService().showTooltip(editStudentPanel.value, route.params);
    // });
    // onUpdated(() => {
    //   // gradesService().showTooltip(editStudentPanel.value, route.params);
    // });
    // const pesel = computed(() => route.params.pesel);
    // const streetName = computed(() => route.params.streetName);
    // const streetNr = computed(() => route.params.streetNr);
    // const streetFlat = computed(() => route.params.streetFlat);
    // const streetPostcode = computed(() => route.params.streetPostcode);
    // const streetCity = computed(() => route.params.streetCity);
    // const phone = computed(() => route.params.phone);
    // const email = computed(() => route.params.email);
    // const motherFirstName = computed(() => route.params.motherFirstName);
    // const motherLastName = computed(() => route.params.motherLastName);
    // const motherPhone = computed(() => route.params.motherPhone);
    // const motherEmail = computed(() => route.params.motherEmail);
    // const fatherFirstName = computed(() => route.params.fatherFirstName);
    // const fatherLastName = computed(() => route.params.fatherLastName);
    // const fatherPhone = computed(() => route.params.fatherPhone);
    // const fatherEmail = computed(() => route.params.fatherEmail);
    // const gradesMarks = computed( () =>route.params.marks.map((el) => parseInt(el)) );
    // const gradesWeights = computed( () => route.params.weights.map((el) => parseInt(el) )
    // );
    // return {
    //   route,
    //   editStudentPanel,
    //   pesel,
    //   streetName,
    //   streetNr,
    //   streetFlat,
    //   streetPostcode,
    //   streetCity,
    //   phone,
    //   email,
    //   motherFirstName,
    //   motherLastName,
    //   motherPhone,
    //   motherEmail,
    //   fatherFirstName,
    //   fatherLastName,
    //   fatherPhone,
    //   fatherEmail,
    //   gradesMarks,
    //   gradesWeights,
    //   showDataEditionRouterView,
    //   showGradesEditionRouterView,
    //   fullName,
    //   showEditStudentDataPanel,
    //   showEditStudentGradesPanel,
    //   // ...gradesService(),
    // };
  },
});
</script>


<style scoped>
.editStudentPanel {
  width: 90%;
  max-width: 1400px;
  margin: 100px auto;
  -webkit-box-shadow: 3px 3px 30px 5px #00c3ff;
  -moz-box-shadow: 3px 3px 30px 5px #00c3ff;
  box-shadow: 3px 3px 30px 5px #00c3ff;
  background-color: rgba(0, 0, 0, 0.55);
  text-align: center;
  position: relative;
  font-size: 13px;
}
.editStudentPanelMain {
  padding: 20px;
  display: grid;
  grid-template-columns: [startName]5fr [startGrades]5fr [startAvg]3fr [startThreatness]3fr;
  grid-template-rows: [startTitle]100px [startStudentData]100px [startStudentDetailData]auto [startStudentDetailDataButton]100px;
  align-items: center;
}
div[class^="editStudentPanelName"] {
  grid-column: startName / startGrades;
}
.editStudentPanelNameTitle {
  grid-row: startTitle / startStudentData;
}
.editStudentPanelNameValue {
  grid-row: startStudentData / startStudentDetailData;
}
.editStudentPanelNameDetailData {
  grid-row: startStudentDetailData / startStudentDetailDataButton;
}
.editStudentPanelNameButtons {
  grid-row: startStudentDetailDataButton;
  margin-left: 10px;
  text-align: center;
}
.editStudentPanelGradesTitle {
  grid-row: startTitle / startStudentData;
}
.editStudentPanelGradesValue {
  grid-row: startStudentData / startStudentDetailData;
  margin: auto;
}
.editStudentPanelGradesButtons {
  grid-row: startStudentDetailDataButton;
}
div[class^="editStudentPanelAvg"] {
  grid-column: startAvg / startThreatness;
}
.editStudentPanelAvgTitle {
  grid-row: startTitle / startStudentData;
}
.editStudentPanelAvgValue {
  grid-row: startStudentData / startStudentDetailData;
}
div[class^="editStudentPanelThreatness"] {
  grid-column: startThreatness;
}
.editStudentPanelThreatnessTitle {
  grid-row: startTitle / startStudentData;
}
.editStudentPanelThreatnessValue {
  grid-row: startStudentData / startStudentDetailData;
}
.editStudentPanelGradesButtons {
  /* background-color: green; */
  grid-column: startGrades / startThreatness;
}
.editStudentPanelNameDetailData {
  margin: 20px 0;
  float: left;
}
.editStudentPanelNameDetailData .form-group {
  display: block;
  margin: auto;
  margin-bottom: 25px;
  padding-left: 45px;
  font-size: 11px;
}
.editStudentPanelNameDetailData .form-group span.title {
  display: inline-block;
  width: 30%;
  font-size: 12.5px;
  text-align: left;
  vertical-align: middle;
}
.editStudentPanelNameDetailData .form-group span.data {
  text-align: left;
  display: inline-block;
  width: 60%;
  margin-left: 5px;
  vertical-align: middle;
}
.editStudentPanelMain button {
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
  .editStudentPanelMain {
    /* width: 95%; */
    text-shadow: 5px 0px 10px #00c3ff, -5px 0px 10px #00c3ff,
      0px 5px 10px #00c3ff, 0px -5px 10px #00c3ff;
  }
  .editStudentPanelMain {
    font-size: 10px;
  }
  .editStudentPanelMain {
    padding: 3px;
    grid-template-rows: [startTitle]50px [startStudentData]50px [startStudentDetailData]auto [startStudentDetailDataButton]50px;
  }
  .editStudentPanelNameDetailData .form-group span.title {
    font-size: 10px;
  }
  .editStudentPanelNameDetailData .form-group {
    padding-left: 3px;
    font-size: 9px;
  }
  .editStudentPanelMain button {
    font-size: 9px;
    padding: 5px;
  }
}
</style>