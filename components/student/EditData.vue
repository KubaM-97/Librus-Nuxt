<template>
  <div class="editStudent wrapper mb-3 pt-4 pb-3 position-absolute"
  >
    <div class="overlay" />
      <form
        action="#"
        enctype="application/x-www-form-urlencoded"
        method="post"
        @submit.prevent="saveChanges"
      >
        <div class="container">
          <div class="row mb-3" v-for="property in orderedStudentProperties" :key="property">
            <div class="col-6">
            <label :for="property">{{ $t(property) }}</label>
            <input
              v-if="typeof student[property] !== 'object' && student[property] !== null"
              type="text"
              :placeholder="$t(property)"
              :name="property"
              :id="property"
              :value="student[property]"
              @change="setStudentState($event.target.value, property)"
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
            <!-- <div class="col-6">
              <span v-html="!Array.isArray(data.value) ? student[data.property] : nestedProperty(data.property)"></span>
              <span>{{ $t(`${property}_${subProperty}_error`) }}</span>
                          :placeholder="$t(`${property}_error`)"
              :placeholder="$t(`${property}_${subProperty}_error`)"

            <div v-if="!Array.isArray(data.value) && $v.$invalid && $v.$dirty">{{data.errorMessage}}</div>
              <span>{{ $t(`${property}_error`) }}</span>
            <div v-else-if="Array.isArray(data.value)">{{student[data.property][subData].errorMessage]}}</div>
            </div> -->
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

    const student = JSON.parse(JSON.stringify(props.student));

    function nestedProperty (property){
      switch(property){
        case 'address': {
          return root.$t('full_address', {
            streetName: student.address.streetName, 
            streetNr: student.address.streetNr, 
            flatNr: student.address.flatNr, 
            postCode: student.address.postCode, 
            city: student.address.city
          })
        }
        case 'mother': {
          return `${student.mother.firstName} ${student.mother.lastName} <br />
          ${student.mother.phone} <br /> ${student.mother.email}`
        }
        case 'father': {
          return `${student.father.firstName} ${student.father.lastName} <br />
          ${student.father.phone} <br /> ${student.father.email}`
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
      subProperty ? student[property][subProperty] = value : student[property] = value
    }
   async function saveChanges() {
      try {
        this.$toast.show(this.$t("successfully_updated_student_data"));
        await axios.put(`/api/students/${student._id}`, {
          student: student,
        });
        await emit('refresh')
        this.$toast.success(this.$t("successfully_updated_student_data"));
      } catch (err) {
        console.error(err);
        this.$toast.error(this.$t("successfully_updated_student_data"));
      }
    }
    return {
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