<template>
  <div class="form-group">
    <label
      for="name"
      :class="[
        'mb-2',
        { errorDataLabel: v.fullName.$invalid && v.fullName.$dirty },
      ]"
    >
      *{{ $t("firstName_and_lastName") }}:
      <span
        :class="[
          'fullNameTooltip d-block',
          { errorDataLabel: v.fullName.$invalid && v.fullName.$dirty },
        ]"
      >
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
      :class="[
        'text-center',
        { errorDataInput: v.fullName.$invalid && v.fullName.$dirty },
      ]"
      @change="showError"
    />
  </div>
</template>

<script>
import { defineComponent, ref, watch, useStore } from "@nuxtjs/composition-api";

export default defineComponent({
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
  setup(props) {
    const store = useStore();

    const firstName = ref("");
    const lastName = ref("");
    function capitalize(val) {
      return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    }

    function getFirstAndLastName(fullName) {
      const fullNamePart = fullName.toLowerCase().split(" ");
      firstName.value = capitalize(fullNamePart[0]);
      let lastNamePart
      if(fullNamePart.length > 1) lastNamePart = fullNamePart[1].split("-");
      lastName.value =
        fullNamePart.length > 1 
            ? lastNamePart.length > 1 
                ? `${capitalize(lastNamePart[0])}-${capitalize(lastNamePart[1])}`
                : capitalize(fullNamePart[1])
            : "";
    }
    function showError() {
      props.v.fullName.$touch();
    }
    watch(
      () => props.v.fullName.$model,
      (val) => {
        getFirstAndLastName(val);
        store.commit("updateStudentProperty", {
          property: "firstName",
          value: firstName.value,
        });
        store.commit("updateStudentProperty", {
          property: "lastName",
          value: lastName.value,
        });
      }
    );
    return {
      showError,
    };
  },
});
</script>

<style>
</style>