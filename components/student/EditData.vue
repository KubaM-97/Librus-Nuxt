<template>
  <div class="editStudent wrapper mb-3 pt-4 pb-3 position-absolute"
  >
    <div class="overlay" />
    {{student2.pesel}}
    <input v-model="student2.pesel">
      <form
        action="#"
        enctype="application/x-www-form-urlencoded"
        method="post"
        @submit.prevent="saveChanges"
      >
        <div class="container">
          <div class="row mb-3 d-flex align-items-center" v-for="property in orderedStudentProperties" :key="property">
            <div class="col-6">
            <label :for="property">{{ $t(property) }}</label>
            <input
              v-if="typeof student[property] !== 'object' && student[property] !== null"
              type="text"
              :placeholder="$t(property)"
              :name="property"
              :id="property"
              v-model="student[property]"
            />
            <input
              v-else
              v-for="(_subValue, subProperty) in student[property]"
              :key="subProperty"
              type="text"
              :placeholder="$t(subProperty)"
              :name="property[subProperty]"
              :id="property[subProperty]"
              :value="student[property][subProperty]"
              @change="setStudentState($event.target.value, property, subProperty)"
              class="col-10"
              :class="{'errorDataInput': $v.student[property][subProperty].$invalid && $v.student[property][subProperty].$dirty}"
              autocomplete="off"
            />
            </div>
            <div class="col-6">
              <span v-html="
              (typeof student[property] !== 'object' && student[property] !== null) ? $t(student[property]) : nestedProperty(property)"></span>
              {{$v.student[property].$invalid}}
              <span v-if="$v.student[property].$invalid"> 
                {{ $t(`${property}_error`) }}
              </span>
              <!-- <span>{{ $t(`${property}_${subProperty}_error`) }}</span>

            <div v-if="!Array.isArray(data.value) && $v.$invalid && $v.$dirty">{{data.errorMessage}}</div>
              <span>{{ $t(`${property}_error`) }}</span>
            <div v-else-if="Array.isArray(data.value)">{{student[data.property][subData].errorMessage]}}</div> -->
            </div>
          </div>
        </div>
      </form>
      <button
        class="btn btn-success btn-lg save mr-3"
        :disabled="$v.student.$invalid && $v.student.$anyDirty"
        @click="saveChanges"
      >
        {{ $t("save_changes") }}
      </button>

    <button class="closeEditPanelBtn position-absolute" @click="$emit('close')">
      <img class="closeEditPanelImg w-100" src="@/assets/images/eXit.png" />
    </button>
  </div>
</template>

<script>
import { defineComponent, ref} from "@nuxtjs/composition-api";
import axios from 'axios'
import validations from "@/assets/mixins/validations";

export default defineComponent({
  name: "EditData",
  mixins: [validations],
  props: {
    student: {
      type: Object,
      required: true
    }
  },
  head() {
    return {
      title: this.$t('student_edit_page_title', { student: `${ this.student.lastName } ${ this.student.firstName }` }),
    }
  }, 
  emit: ["close", "refresh"],
  setup(props, {root, emit}) {

    const student = ref(JSON.parse(JSON.stringify(props.student)));
    const student2 = ref(JSON.parse(JSON.stringify(props.student)));
console.log(student);
    function nestedProperty (property){
      switch(property){
        case 'address': {
          return root.$t('full_address', {
            streetName: student.value.address.streetName, 
            streetNr: student.value.address.streetNr, 
            flatNr: student.value.address.flatNr, 
            postCode: student.value.address.postCode, 
            city: student.value.address.city
          })
        }
        case 'mother': {
          return `${student.value.mother.firstName} ${student.value.mother.lastName} <br />
          ${student.value.mother.phone} <br /> ${student.value.mother.email}`
        }
        case 'father': {
          return `${student.value.father.firstName} ${student.value.father.lastName} <br />
          ${student.value.father.phone} <br /> ${student.value.father.email}`
        }
        default: {
          return ''
        }
      }
    }
    const orderedStudentProperties = ref([
      'pesel', 'phone', 'email', 'address', 'mother', 'father'
    ])
      
 function setStudentState(value, property, subProperty){
      this.$v.student.$touch();
      subProperty ? student.value[property][subProperty] = value : student.value[property] = value
    }
   async function saveChanges() {
      try {
        this.$toast.show(this.$t("updating_student_data_in_progress"));
        await root.$accessor.updateStudent({student: student.value})
        await emit('refresh')
        this.$toast.success(this.$t("successfully_updated_student_data"));
      } catch (err) {
        console.error(err);
        this.$toast.error(this.$t("failed_to_update_student_data"));
      }
    }
    return {
      student2,
      saveChanges,
      orderedStudentProperties,
      nestedProperty,
      setStudentState,
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