<template>
  <div class="ourStudentPanel" ref="editDataPanel">
      {{$v.$invalid}}
      <!-- {{student}} -->
      <form
        action="#"
        enctype="application/x-www-form-urlencoded"
        method="post"
        @submit.prevent="saveChanges"
      >
        <div class="container">
          <div class="row" v-for="data in formData" :key="data.property">
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
            {{ !Array.isArray(data.value) ? student[data.property] : nestedProperty(data.property) }}
            
            <div v-if="!Array.isArray(data.value) && $v.$invalid && $v.$dirty">{{data.errorMessage}}</div>
            <!-- <div v-else-if="Array.isArray(data.value)">{{student[data.property][subData].errorMessage]}}</div> -->
            </div>
          </div>
        </div>
      </form>
      <button
        name="possibleSaveData"
        class="btn btn-success btn-lg save"
        :class="{ 'btn-primary': $v.student.$invalid && $v.student.$anyDirty }"
        :disabled="!isPossibleSave"
        @click="saved = !saved"
      >
        {{ $t("save_changes") }}
      </button>

    <button name="closeTheDataPanel" @click="$router.go(-1)">
      <img class="closeThePanel" src="@/assets/images/eXit.png" />
    </button>
  </div>
</template>

<script>
import { useRoute, ref, useContext, useFetch, onUpdated } from "@nuxtjs/composition-api";
import { helpers } from "vuelidate/lib/validators";
const firstName = helpers.regex(
  "firstName",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$/
);
const lastName = helpers.regex(
  "lastName",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$/
);
const pesel = helpers.regex("pesel", /^[0-9]{2}$/);
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
const postCode = helpers.regex("postCode", /^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$/);
const city = helpers.regex(
  "city",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( (- )?[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)*$/
);
export default {
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
  setup(p, {root}) {
    const route = useRoute();
    const id = route.value.params.id;

    const isPossibleSave = ref(true);
    const student = ref("");
    const saved = ref(false);
    const formData = ref([]);
    const { $http } = useContext();
    // const address = computed(()=>this.$t('full_address', student.address))
    function nestedProperty (property){
      switch(property){
        case 'street': {
          return `ul. ${student.value.street.name} ${student.value.street.nr} m.${student.value.street.flat} 
          
          ${student.value.street.postcode} ${student.value.street.city}`
        }
        case 'mother': {
          return `${student.value.mother.firstName} ${student.value.mother.lastName} ${student.value.mother.phone} ${student.value.mother.email}`
        }
        case 'father': {
          return `${student.value.father.firstName} ${student.value.father.lastName} ${student.value.father.phone} ${student.value.father.email}`
        }
        default: {
          return ''
        }
      }
    }
    function setFormData() {
      formData.value = [
        {
          property: "firstName",
          value: student.value.firstName,
          errorMessage: root.$t('first_name_error'),
        },
        {
          property: "lastName",
          value: student.value.lastName,
          errorMessage: root.$t('last_name_error'),
        },
        {
          property: "pesel",
          value: student.value.pesel,
          errorMessage: root.$t('pesel_error'),
        },
        {
          property: "phone",
          value: student.value.phone,
          errorMessage: root.$t('phone_error'),
        },
        {
          property: "email",
          value: student.value.email,
          errorMessage: root.$t('email_error'),
        },
        {
          property: "street",
          value: [
            {
              property: "name",
              value: student.value.street.name,
              errorMessage: root.$t('street_name_error'),
            },
            {
              property: "nr",
              value: student.value.street.nr,
              errorMessage: root.$t('street_nr_error'),
            },
            {
              property: "flat",
              value: student.value.street.flat,
              errorMessage: root.$t('street_flat_error'),
            },
            {
              property: "postcode",
              value: student.value.street.postcode,
              errorMessage: root.$t('street_postcode_error'),
            },
            {
              property: "city",
              value: student.value.street.city,
              errorMessage: root.$t('street_city_error'),
            },
          ],
        },
        {
          property: "mother",
          value: [
            {
              property: "firstName",
              value: student.value.mother.firstName,
              errorMessage: root.$t('firstName_error'),
            },
            {
              property: "lastName",
              value: student.value.mother.lastName,
              errorMessage: root.$t('lastName_error'),
            },
            {
              property: "phone",
              value: student.value.mother.phone,
              errorMessage: root.$t('phone_error'),
            },
            {
              property: "email",
              value: student.value.mother.email,
              errorMessage: root.$t('email_error'),
            },
          ],
        },
        {
          property: "father",
          value: [
            {
              property: "firstName",
              value: student.value.father.firstName,
              errorMessage: root.$t('firstName_error'),
            },
            {
              property: "lastName",
              value: student.value.father.lastName,
              errorMessage: root.$t('lastName_error'),
            },
            {
              property: "phone",
              value: student.value.father.phone,
              errorMessage: root.$t('phone_error'),
            },
            {
              property: "email",
              value: student.value.father.email,
              errorMessage: root.$t('email_error'),
            },
          ],
        },
      ];
    }
    function touch(){
      setTimeout(()=>{

        console.log(root, this)
      },2000)  
      // this.$v[data].$touch()
    }
    touch()
    onUpdated(()=>{
      console.log(root, this)
    })
    useFetch(async () => {
      student.value = await $http.$get(`api/students/${id}`);
      setFormData();
    });
    function validatorData() {}

    function saveChanges() {
      saved.value = true;
      try {
        axios.put(`api/students/${id}`, {
          student,
        });
        this.$toast.success(this.$t("successfully_updated_student_data"));
      } catch (err) {
        console.error(err);
        this.$toast.success(this.$t("successfully_updated_student_data"));
      }
    }
    return {
      student,
      validatorData,
      saveChanges,
      isPossibleSave,
      formData,
      saved,
      nestedProperty,
    };
  },
};
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