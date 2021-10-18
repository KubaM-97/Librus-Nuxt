<template>
  <div class="showAdditionalDataForm" v-if="showAdditionalDataForm">
     <form
        action="#"
        enctype="application/x-www-form-urlencoded"
        method="post"
        @submit.prevent="saveChanges"
      >
        <div class="container">

          <div class="row my-2" v-for="data in formData" :key="data.property">

            <label class="col-12" :for="data.property">{{ $t(data.property) }}</label>
            <input
              v-if="!Array.isArray(data.value)"
              type="text"
              :placeholder="$t(data.errorMessage)"
              :name="data.property"
              :id="data.property"
              v-model.trim="student[data.property]"
              class="col-6 text-center"
            />
            <input
              v-else
              v-for="subData in data.value"
              :key="subData.property"
              type="text"
              :placeholder="$t([data.property][subData.property])"
              :name="[data.property][subData.property]"
              :id="[data.property][subData.property]"
              v-model.trim="student[data.property][subData.property]"
              class="col-7 text-center"
            />
            <!-- {{ !Array.isArray(data.value) ? student[data.property] : nestedProperty(data.property) }} -->
            
             <!-- <div v-if="!Array.isArray(data.value) && $v.$invalid && $v.$dirty">{{data.errorMessage}}</div> -->
            <!--<div v-else-if="Array.isArray(data.value)">{{student[data.property][subData].errorMessage}}</div> -->
            </div>
        </div>
      </form>
  </div>
</template>

<script>
import { helpers } from '@vuelidate/validators'
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
      ]);

onUpdated(()=>{
  const xxx = {...student.value}
  root.$accessor.setStudent(xxx);
})
    return {
      formData,
      student,
      nestedProperty,
    }
  }
});
</script>

<style>
</style>