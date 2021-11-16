<template>
  <form action="#" enctype="application/x-www-form-urlencoded" method="post">
    <div class="form-group mb-4">
      <FullName :v="v" :student="student" />
      <transition name="shake">
        <div
          class="errorFullName d-block text-light"
          v-if="v.fullName.$invalid && v.fullName.$dirty"
        >
          {{ !v.fullName.required ? $t("fillname") : $t("no_characters") }}
        </div>
      </transition>
    </div>

    <div class="newStudentPanelNameInfo mb-4">
      {{ $t("additional_info") }}
      <button
        type="button"
        class="showInfo cursor-pointer ml-2"
        @click="showAdditionalDataForm = !showAdditionalDataForm"
      >
        {{ !showAdditionalDataForm ? $t("expand") : $t("collapse") }}
      </button>

      <transition name="showDetailData" mode="out-in">
        <AdditionalDataForm
          v-if="showAdditionalDataForm"
          :v="v"
          :student="student"
        />
      </transition>
    </div>
  </form>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import FullName from "@/components/addstudent/data/FullName.vue";
import AdditionalDataForm from "@/components/addstudent/data/AdditionalDataForm.vue";
export default defineComponent({
  name: "PersonalStudentDataForm",
  components: {
    FullName,
    AdditionalDataForm,
  },
  props: {
    v: {
      type: Object,
      required: false,
      default: () => {},
    },
    student: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  setup() {
    const showAdditionalDataForm = ref(false);
    
    return {
      showAdditionalDataForm,
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