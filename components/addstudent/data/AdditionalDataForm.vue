<template>
  <div class="container">
    <div
      class="row mt-2 mb-3"
      v-for="property in orderedStudentProperties"
      :key="`new_student_property_${property}`"
    >
      <label
        :class="[
          'col-12 d-block small',
          {
            errorDataLabel:
              v.student[property].$invalid && v.student[property].$dirty,
          },
        ]"
        >{{ $t(property) }}</label
      >
      <template
        v-if="
          typeof student[property] !== 'object' && student[property] !== null
        "
      >
        <span
          v-if="v.student[property].$invalid && v.student[property].$dirty"
          class="col-12 d-block small errorDataLabel"
        >
          {{ $t(`${property}_error`) }}
        </span>
        <input
          type="text"
          :placeholder="$t(property)"
          :name="property"
          :id="property"
          :value="student[property]"
          @change="setStudentState($event.target.value, property)"
          class="col-10"
          :class="{
            'errorDataInput':
              v.student[property].$invalid && v.student[property].$dirty,
          }"
          autocomplete="off"
        />
      </template>
      <template v-else
        v-for="(_subValue, subProperty) in student[property]"
      >
      <span
          :key="`new_student_property_error_${subProperty}`"
          v-if="v.student[property][subProperty].$invalid && v.student[property][subProperty].$dirty"
          class="col-12 d-block small errorDataLabel"
        >
          {{ $t(`${property}_${subProperty}_error`) }}
        </span>
      <input
        :key="`new_student_property_input_${subProperty}`"
        type="text"
        :placeholder="$t(`${subProperty}`)"
        :name="property[subProperty]"
        :id="property[subProperty]"
        :value="student[property][subProperty]"
        @change="setStudentState($event.target.value, property, subProperty)"
        class="col-10"
        :class="{
          'errorDataInput':
            v.student[property][subProperty].$invalid &&
            v.student[property][subProperty].$dirty,
        }"
        autocomplete="off"
      />
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  props: {
    v: {
      type: Object,
      required: false,
      default: () => {},
    },
    fullName: {
      type: String,
      required: false,
      default: "",
    },
    student: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  setup(props) {
    const v = props.v;

    const orderedStudentProperties = ref([
      "pesel",
      "phone",
      "email",
      "address",
      "mother",
      "father",
    ]);
    function setStudentState(value, property, subProperty) {
      v.student.$touch();
       store.commit('updateStudentProperty', {
        property,
        value: value.trim(),
        subProperty
      })
    }
    return {
      orderedStudentProperties,
      setStudentState,
    };
  },
});
</script>

<style lang="scss">
.errorDataLabel {
  text-shadow: 5px 0px 20px #f0351d, -5px 0px 20px #f0351d, 0px 5px 20px #f0351d,
    0px -5px 20px #f0351d;
}
.errorDataInput {
  box-shadow: 1px 1px 5px #f0351d, -1px -1px 5px #f0351d, -1px 1px 5px #f0351d,
    1px -1px 5px #f0351d;
  border: 1px solid #f0351d;
}
input:focus {
  border: 2px solid #a5cda5;
  -webkit-box-shadow: 0px 0px 3px 2px rgba(204, 204, 204, 0.9);
  -moz-box-shadow: 0px 0px 3px 2px rgba(204, 204, 204, 0.9);
  box-shadow: 0px 0px 3px 2px rgba(204, 204, 204, 0.9);
}
</style>