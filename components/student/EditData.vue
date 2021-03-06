<template>
  <div class="editStudent wrapper mb-3 pt-4 pb-3 position-absolute">
    <div class="overlay" />

    <form
      action="#"
      enctype="application/x-www-form-urlencoded"
      method="post"
      @submit.prevent="saveChanges"
    >
      <div class="container">
        <div
          class="row mb-3 d-flex align-items-center"
          v-for="property in orderedStudentProperties"
          :key="`edit_student_property_${property}`"
        >
          <div class="col-12 col-md-6">
            <label
              :for="property"
              :class="{ errorDataLabel: $v.student[property].$invalid }"
              >{{ $t(property) }}</label
            >
            <input
              v-if="
                typeof student[property] !== 'object' &&
                student[property] !== null
              "
              type="text"
              :placeholder="$t(property)"
              :name="property"
              :id="property"
              autocomplete="off"
              v-model="student[property]"
              :class="{ errorDataInput: $v.student[property].$invalid }"
            />
            <template
              v-else
              v-for="(_subValue, subProperty) in student[property]"
            >
              <label
                :key="`edit_student_property_label_${subProperty}`"
                :class="{
                  errorDataLabel: $v.student[property][subProperty].$invalid,
                }"
              >
                {{ $t(property[subProperty]) }}
              </label>

              <input
                :key="`edit_student_property_input_${subProperty}`"
                type="text"
                :placeholder="$t(subProperty)"
                :name="property[subProperty]"
                :id="property[subProperty]"
                v-model="student[property][subProperty]"
                class="col-10"
                :class="{
                  errorDataInput: $v.student[property][subProperty].$invalid,
                }"
                autocomplete="off"
              />
            </template>
          </div>

          <div class="col-12 col-md-6">
            <span
              :class="{ errorDataLabel: $v.student[property].$invalid }"
              v-html="
                typeof student[property] !== 'object' &&
                student[property] !== null
                  ? student[property]
                  : nestedProperty(property)
              "
            ></span>
            <span
              v-if="
                typeof student[property] !== 'object' &&
                student[property] !== null &&
                $v.student[property].$invalid
              "
              :class="[
                'd-block small',
                { errorDataLabel: $v.student[property].$invalid },
              ]"
            >
              {{ $t(`${property}_error`) }}
            </span>
            <span v-else-if="$v.student[property].$invalid">
              <span
                v-for="(_subValue, subProperty) in student[property]"
                :key="`edit_student_subProperty_${subProperty}`"
              >
                <span
                  v-if="$v.student[property][subProperty].$invalid"
                  :class="[
                    'd-block small',
                    {
                      errorDataLabel:
                        $v.student[property][subProperty].$invalid,
                    },
                  ]"
                >
                  {{ $t(`${property}_${subProperty}_error`) }}
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </form>
    <button
      class="btn btn-success btn-lg save mr-3 px-2 py-1"
      :disabled="$v.student.$invalid"
      @click="submit()"
    >
      {{ $t("save_changes") }}
    </button>

    <button class="closeEditPanelBtn position-absolute" @click="$emit('close')">
      <img class="closeEditPanelImg w-100" src="~images/eXit.png" />
    </button>
  </div>
</template>

<script>
import { defineComponent, ref, useRoute, useRouter } from "@nuxtjs/composition-api";
import validations from "@/assets/mixins/validations";

export default defineComponent({
  name: "EditData",
  mixins: [validations],
  props: {
    basedStudent: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  head() {
    return {
      title: this.$t("student_edit_page_title", {
        student: `${this.basedStudent.lastName} ${this.basedStudent.firstName}`,
      }),
    };
  },
  setup(props, { root, emit }) {
    const route = useRoute();
    const router = useRouter();
    const basedStudent = props.basedStudent;
    const student = ref(JSON.parse(JSON.stringify(basedStudent)));
    function nestedProperty(property) {
      switch (property) {
        case "address": {
          return root.$t("full_address", {
            streetName: student.value.address.streetName,
            streetNr: student.value.address.streetNr,
            flatNr: student.value.address.flatNr,
            postCode: student.value.address.postCode,
            city: student.value.address.city,
          });
        }
        case "mother": {
          return `${student.value.mother.firstName} ${student.value.mother.lastName} <br />
          ${student.value.mother.phone} <br /> ${student.value.mother.email}`;
        }
        case "father": {
          return `${student.value.father.firstName} ${student.value.father.lastName} <br />
          ${student.value.father.phone} <br /> ${student.value.father.email}`;
        }
        default: {
          return "";
        }
      }
    }
    const orderedStudentProperties = ref([
      "lastName",
      "firstName",
      "pesel",
      "phone",
      "email",
      "address",
      "mother",
      "father",
    ]);

    function submit() {
      const { lastName, firstName } = basedStudent;
      if(lastName !== student.value.lastName || firstName !== student.value.firstName){

        const fullPath = route.value.fullPath;
        const originalUrl = fullPath.substring(0, fullPath.lastIndexOf("/"));
        router.push({
          path: `${originalUrl}/${encodeURIComponent(`${student.value.lastName} ${student.value.firstName}`)}`,
        });
      }
      emit('submit', student.value)
    }
    return {
      orderedStudentProperties,
      nestedProperty,
      student,
      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
div.editStudent {
  background-color: black;
  .overlay {
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 10px;
  }
  font-size: 13px;
  top: 20%;
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
      z-index: 100;
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