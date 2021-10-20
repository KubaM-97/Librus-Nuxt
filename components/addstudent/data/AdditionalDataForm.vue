<template>
  <div class="showAdditionalDataForm" v-if="showAdditionalDataForm">
     <form
        action="#"
        enctype="application/x-www-form-urlencoded"
        method="post"
        @submit.prevent="saveChanges"
      >
        <div class="container">

          <div class="row mt-2 mb-3" v-for="data in formData" :key="data.property">
            <label class="col-12" :for="data.property" :class="{'errorDataLabel': $v.student[data.property].$invalid}">{{ $t(data.property) }}</label>
            <input
              v-if="!Array.isArray(data.value)"
              type="text"
              :placeholder="$t(data.errorMessage)"
              :name="data.property"
              :id="data.property"
              v-model.trim.lazy="$v.student[data.property].$model"
              class="col-10"
              :class="{'errorDataInput': $v.student[data.property].$invalid}"
              autocomplete="off"
            />
            <input
              v-else
              v-for="subData in data.value"
              :key="subData.property"
              type="text"
              :placeholder="$t(subData.errorMessage)"
              :name="[data.property][subData.property]"
              :id="[data.property][subData.property]"
              v-model.trim.lazy="student[data.property][subData.property]"
              class="col-10"
              autocomplete="off"
            />
            </div>
        </div>
      </form>
  </div>
</template>

<script>
import { helpers } from 'vuelidate/lib/validators'
import { defineComponent, ref, computed, onUpdated, watchEffect } from "@nuxtjs/composition-api";
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
export default defineComponent({
 validations () {
    return {
      student: {
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
    }
    },
  props: ['showAdditionalDataForm'],
  setup(_props, {root} ){
    const studentState = computed(() => root.$accessor.student)
    const student =  ref(Object.assign({}, studentState.value))
    
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
    const formData = ref([
        {
          property: "pesel",
          value: student.pesel,
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
              errorMessage: root.$t('first_name_error'),
            },
            {
              property: "lastName",
              value: student.value.mother.lastName,
              errorMessage: root.$t('last_name_error'),
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
              errorMessage: root.$t('first_name_error'),
            },
            {
              property: "lastName",
              value: student.value.father.lastName,
              errorMessage: root.$t('last_name_error'),
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
      ]);

onUpdated(()=>{
  const clonedStudent = {...student.value}
  root.$accessor.setStudent(clonedStudent);
})
    return {
      formData,
      student,
      nestedProperty,
    }
  }
});
</script>

<style lang="scss">

.errorDataLabel{
  text-shadow: 5px 0px 20px  #f0351d, -5px 0px 20px  #f0351d, 0px 5px 20px  #f0351d, 0px -5px 20px  #f0351d;
}
.errorDataInput{
  box-shadow: 1px 1px 5px #f0351d, -1px -1px 5px #f0351d, -1px 1px 5px #f0351d, 1px -1px 5px #f0351d;
  border: 1px solid #f0351d;
  
}
// ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
//     font-size: 80%;
//     text-shadow: 5px 0px 20px  #f0351d, -5px 0px 20px  #f0351d, 0px 5px 20px  #f0351d, 0px -5px 20px  #f0351d;
// }

// :-ms-input-placeholder { /* Internet Explorer 10-11 */
//     font-size: 80%;
//     text-shadow: 5px 0px 20px  #f0351d, -5px 0px 20px  #f0351d, 0px 5px 20px  #f0351d, 0px -5px 20px  #f0351d;
// }

// ::-ms-input-placeholder { /* Microsoft Edge */
//       font-size: 80%;
//     text-shadow: 5px 0px 20px  #f0351d, -5px 0px 20px  #f0351d, 0px 5px 20px  #f0351d, 0px -5px 20px  #f0351d;
// }

</style>