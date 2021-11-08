<template>
  <form action="#" enctype="application/x-www-form-urlencoded" method="post">
     {{fullName}}{{student}}
    <div class="form-group mb-4">
      <label for="name" :class="['mb-2', {'errorDataLabel': v.fullName.$invalid && v.fullName.$dirty }]">
        *{{ $t("firstName_and_lastName") }}:
        <span :class="['fullNameTooltip d-block', {'errorDataLabel': v.fullName.$invalid && v.fullName.$dirty }]">
          {{ $t("double_lastNames_hint") }}
        </span>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        v-model.trim="v.fullName.$model"
        maxlength="30"
        autocomplete="off"
        :class="['text-center', {'errorDataInput': v.fullName.$invalid && v.fullName.$dirty }]"
        @change="showError"
      />
      <transition name="shake">
        <div class="errorFullName d-block text-light" v-if="v.fullName.$invalid && v.fullName.$dirty">
            {{ !v.fullName.required ? $t("fillname") : $t("no_characters")}} 
        </div>
      </transition>
    </div>

    <div class="addStudentPanelNameInfo mb-4">
      {{ $t("additional_info") }}
      <button
        type="button"
        class="showInfo cursor-pointer ml-2"
        @click="showAdditionalDataForm = !showAdditionalDataForm"
      >
        {{ !showAdditionalDataForm ? $t("expand") : $t("collapse") }}
      </button>

      <transition name="showDetailData" mode="out-in">
        <AdditionalDataForm v-if="showAdditionalDataForm" :v="v" :fullName="fullName" :student="student"/>
      </transition>
    </div>
  </form>
</template>

<script>
import { defineComponent, ref, watch , onUpdated} from "@nuxtjs/composition-api";
import AdditionalDataForm from "@/components/addstudent/data/AdditionalDataForm.vue";
export default defineComponent({
  name: "PersonalStudentDataForm",
  components: {
    AdditionalDataForm,
  },
  props: ['v', 'student', 'fullName'],
  setup(props, { root }) {
    const showAdditionalDataForm = ref(false);
    const firstName = ref("");
    const lastName = ref("");
    function capitalize(val) {
      return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    }

    function getFirstAndLastName(fullName) {
      const fullNameArray = fullName.toLowerCase().split(" ");
      firstName.value = capitalize(fullNameArray[0]);
      lastName.value =
        fullNameArray.length > 1 ? capitalize(fullNameArray[1]) : "";
    }
    function showError(){
      // props.form.fullName = fullName.value
      props.v.fullName.$touch()
    }
    watch(
      // () => fullName.value,
      () => props.v.fullName.$model,
      (val) => {
        console.log('podmineniono');
        getFirstAndLastName(val);
        root.$accessor.updateStudentProperty({
          property: "firstName",
          value: firstName.value,
        });
        root.$accessor.updateStudentProperty({
          property: "lastName",
          value: lastName.value,
        });
      }
    );

    return {
      showAdditionalDataForm,
      showError,
    };
  },
});
</script>

<style lang="scss">
.form-group {
  .fullNameTooltip {
    font-size: 9px;
  }
  .errorFullName {
    font-size: 11px;
    text-shadow: 5px 0px 5px #f0351d, -5px 0px 5px #f0351d, 0px 5px 5px #f0351d,
      0px -5px 5px #f0351d;
  }
  input {
    outline: none;
    margin: 10px auto;
    background-color: black;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    text-shadow: none;
    font-size: 12px;
    &:focus {
      border: 2px solid #a5cda5;
      -webkit-box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.9);
      -moz-box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.9);
      box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.9);
    }
  }
}
button.showInfo {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 9px;
}
</style>