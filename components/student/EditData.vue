<template>
  <div class="ourStudentPanel" ref="editDataPanel">
      <form
        action="#"
        enctype="application/x-www-form-urlencoded"
        method="post"
        @submit.prevent="saveChanges"
      >
        <div class="container">
          <div class="row mb-3" v-for="data in formData" :key="data.property">
            <div class="col-6">

            <label :for="data.property">{{ $t(data.property) }}</label>
            <input
              v-if="!Array.isArray(data.value)"
              type="text"
              :name="data.property"
              :id="data.property"
              v-model.trim="$v.student[data.property].$model"
            />
            <input
              v-else
              v-for="subData in data.value"
              :key="subData.property"
              type="text"
              :name="[data.property][subData.property]"
              :id="[data.property][subData.property]"
              v-model.trim="$v.student[data.property][subData.property].$model"
            />
            </div>
            <div class="col-6">
              <span v-html="!Array.isArray(data.value) ? student[data.property] : nestedProperty(data.property)"></span>
              <!-- <span>{{ $t(`${property}_${subProperty}_error`) }}</span> -->
            
            <div v-if="!Array.isArray(data.value) && $v.$invalid && $v.$dirty">{{data.errorMessage}}</div>
              <span>{{ $t(`${property}_error`) }}</span>
            <!-- <div v-else-if="Array.isArray(data.value)">{{student[data.property][subData].errorMessage]}}</div> -->
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

    <button name="closeTheDataPanel" @click="$router.go(-1)">
      <img class="closeThePanel" src="@/assets/images/eXit.png" />
    </button>
  </div>
</template>

<script>
import { defineComponent, ref, useMeta} from "@nuxtjs/composition-api";
import axios from 'axios'
import { helpers } from "vuelidate/lib/validators";
const firstName = helpers.regex(
  "firstName",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$/
);
const lastName = helpers.regex(
  "lastName",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$/
);
const pesel = helpers.regex("pesel", /^[0-9]{11}$/);
const phone = helpers.regex("phone", /^([0-9]{7}|[0-9]{9})$/);
const email = helpers.regex(
  "email",
  /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-]+\.[a-z]+$/
);
const streetName = helpers.regex("streetName", /^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$/);
const streetNr = helpers.regex(
  "streetNr",
  /^[0-9]+[a-zA-Z]?(\/?[0-9]*[a-zA-Z]?)?$/
);
const flat = helpers.regex("flat", /^[0-9]+[a-zA-Z]?$/);
const postCode = helpers.regex("postCode", /^[0-9]{2}-[0-9]{3}$/);
const city = helpers.regex(
  "city",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( (- )?[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)*$/
);
export default defineComponent({
  name: "EditData",
  validations:{
    student: {
      firstName: { firstName },
      lastName: { lastName },
      pesel: { pesel },
      phone: { phone },
      email: { email },
      street: {
        name: { streetName },
        nr: { streetNr },
        flat: { flat },
        postcode: { postCode },
        city: { city },
      },
      mother: {
        firstName: { firstName }, 
        lastName: { lastName }, 
        phone: { phone }, 
        email: { email }, 
      },
      father: {
        firstName: { firstName }, 
        lastName: { lastName }, 
        phone: { phone }, 
        email: { email }, 
      },
    },
  },
  props: {
    student: {
      type: Object,
      required: true
    }
  },
  setup(props, {root}) {

    const isPossibleSave = ref(true);
    const student = props.student;
    const saved = ref(false);
    const formData = ref([]);
    
    const { title } = useMeta()
    
  title.value = this.$t('student_edit_page_title', { student: `${ student.lastName } ${ student.firstName }` }),
    function nestedProperty (property){
      switch(property){
        case 'street': {
          return root.$t('full_address', {
            streetName: student.street.name, 
            streetNr: student.street.nr, 
            streetFlat: student.street.flat, 
            streetPostCode: student.street.postode, 
            streetCity: student.street.city
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
      formData.value = [
        {
          property: "firstName",
          value: student.firstName,
          errorMessage: root.$t('first_name_error'),
        },
        {
          property: "lastName",
          value: student.lastName,
          errorMessage: root.$t('last_name_error'),
        },
        {
          property: "pesel",
          value: student.pesel,
          errorMessage: root.$t('pesel_error'),
        },
        {
          property: "phone",
          value: student.phone,
          errorMessage: root.$t('phone_error'),
        },
        {
          property: "email",
          value: student.email,
          errorMessage: root.$t('email_error'),
        },
        {
          property: "street",
          value: [
            {
              property: "name",
              value: student.street.name,
              errorMessage: root.$t('street_name_error'),
            },
            {
              property: "nr",
              value: student.street.nr,
              errorMessage: root.$t('street_nr_error'),
            },
            {
              property: "flat",
              value: student.street.flat,
              errorMessage: root.$t('street_flat_error'),
            },
            {
              property: "postcode",
              value: student.street.postcode,
              errorMessage: root.$t('street_postcode_error'),
            },
            {
              property: "city",
              value: student.street.city,
              errorMessage: root.$t('street_city_error'),
            },
          ],
        },
        {
          property: "mother",
          value: [
            {
              property: "firstName",
              value: student.mother.firstName,
              errorMessage: root.$t('firstName_error'),
            },
            {
              property: "lastName",
              value: student.mother.lastName,
              errorMessage: root.$t('lastName_error'),
            },
            {
              property: "phone",
              value: student.mother.phone,
              errorMessage: root.$t('phone_error'),
            },
            {
              property: "email",
              value: student.mother.email,
              errorMessage: root.$t('email_error'),
            },
          ],
        },
        {
          property: "father",
          value: [
            {
              property: "firstName",
              value: student.father.firstName,
              errorMessage: root.$t('first_name_error'),
            },
            {
              property: "lastName",
              value: student.father.lastName,
              errorMessage: root.$t('last_name_error'),
            },
            {
              property: "phone",
              value: student.father.phone,
              errorMessage: root.$t('phone_error'),
            },
            {
              property: "email",
              value: student.father.email,
              errorMessage: root.$t('email_error'),
            },
          ],
        },
      ];

    function saveChanges() {
      
      try {
        axios.put(`/api/students/${student._id}`, {
          student: student,
        });
        this.$toast.success(this.$t("successfully_updated_student_data"));
      } catch (err) {
        console.error(err);
        this.$toast.error(this.$t("successfully_updated_student_data"));
      }
    }
    return {
      saveChanges,
      isPossibleSave,
      formData,
      saved,
      nestedProperty,
    };
  },
});
</script>

<style lang="css" scoped>
div.ourStudentPanel {
  width: 90%;
  max-width: 1400px;
  margin: 100px auto;
  -webkit-box-shadow: 3px 3px 30px 5px #00c3ff;
  -moz-box-shadow: 3px 3px 30px 5px #00c3ff;
  box-shadow: 3px 3px 30px 5px #00c3ff;
  background-color: rgba(0, 0, 0, 1);
  text-align: center;
  font-size: 13px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -47%);
  padding: 70px 0 40px;
}
.row div[class^="col"] {
  display: grid;
  align-content: center;
}
label {
  display: block;
  font-size: 12px;
  margin-bottom: 0;
}
input {
  outline: none;
  display: block;
  margin: 5px auto;
  width: 65%;
  font-size: 12px;
  text-align: center;
  background-color: black;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  text-shadow: none;
}
button[name="closeTheDataPanel"] {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  outline: none;
}
img.closeThePanel {
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 2px 2px 10px 2px #d54545;
  -moz-box-shadow: 2px 2px 10px 2px #d54545;
  box-shadow: 2px 2px 10px 2px #d54545;
  border-radius: 50px;
}
button.save {
  font-size: 15px;
  padding: 8px 12px;
  opacity: 1;
  float: right;
}
button.save[disabled] {
  background-color: red;
  cursor: not-allowed;
}
img.greenCheckMark {
  width: 27px;
  height: 27px;
  margin: auto;
  -webkit-box-shadow: 2px 2px 10px 2px #199c05;
  -moz-box-shadow: 2px 2px 10px 2px #199c05;
  box-shadow: 2px 2px 10px 2px #199c05;
  opacity: 0.8;
}
div.blackLayer {
  background-color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
}
@media (max-width: 768px) {
  div.ourStudentPanel {
    top: 95%;
  }
  .row div[class^="col"] {
    display: grid;
    align-content: center;
  }
  span.wrongAdditionalInfo {
    font-size: 10px;
  }
  img.greenCheckMark {
    width: 22px;
    height: 22px;
  }
  button.save {
    font-size: 11px;
  }
  img.closeThePanel {
    width: 30px;
    height: 30px;
  }
}
@media (max-width: 500px) {
  input {
    width: 100%;
  }
}
</style>