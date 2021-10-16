<template>
  <div class="showAdditionalDataForm" v-if="showAdditionalDataForm">
    <div class="form-group" v-for="data in formData" :key="data.id">
      <label :for="data.id">{{ data.label }}:</label>
      <input
        type="text"
        :id="data.id"
        :name="data.id"
        autocomplete="off"
        v-model.trim.lazy="form[data.id]"
        :placeholder="data.label"
        @change="touch(data.id)"
      />
      <!-- <div v-if="$v[data.id].$invalid && $v[data.id].$dirty">{{ data.errorMessage }}</div> -->
    {{$v[data.id]}}
    </div>
  </div>
</template>

<script>
import { helpers, required } from "vuelidate/lib/validators";
import { defineComponent, ref } from "@nuxtjs/composition-api";
const alpha = helpers.regex('alpha', /^[a-zA-Z]*$/)
const parentFirstname = helpers.regex(
  "parentFirstname",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$/
);
const parentLastname = helpers.regex(
  "parentLastname",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$/
);
const pesel = helpers.regex("pesel", /^[0-9]{2}$/);
const phone = helpers.regex("phone", /^([0-9]{7}|[0-9]{9})$/);
const email = helpers.regex(
  "email",
  /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-]+\.[a-z]+$/
);
const street = helpers.regex("street", /^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$/);
const streetNr = helpers.regex(
  "streetNr",
  /^[0-9]+[a-zA-Z]?(\/?[0-9]*[a-zA-Z]?)?$/
);
const flatNr = helpers.regex("flatNr", /^[0-9]+[a-zA-Z]?$/);
const postCode = helpers.regex("postCode", /^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$/);
const city = helpers.regex(
  "city",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( (- )?[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)*$/
);
export default defineComponent({
  validations: {
    // form: {
      pesel: { required },
      // phone: { phone },
      // email: { email },
      // address: {
      //   street: { street },
      //   streetNr: { streetNr },
      //   flatNr: { flatNr },
      //   postCode: { postCode },
      //   city: { city },
      // },
      //   parent: {
      //     parentFirstname: { parentFirstname },
      //     parentLastname: { parentLastname },
      //   },
      // },
    // },
  },
  props: ['showAdditionalDataForm'],
  setup(_props, {root} ){
    const formData = ref([
      { id: "pesel", label: "Pesel", errorMessage: root.$t('pesel_error') },
      { id: "phone", label: "Telefon", errorMessage: root.$t('phone_error') },
      { id: "email", label: "Email", errorMessage: root.$t('email_error') },
      // { id: "address.street", label: "Telefon", errorMessage: root.$t('street_error') },
      // { id: "address.streetNr", label: "Telefon", errorMessage: root.$t('streetNr_error')  },
      // { id: "address.flatNr", label: "Telefon", errorMessage: root.$t('flatNr_error') },
      // { id: "address.postCode", label: "Telefon", errorMessage: root.$t('postCode_error') },
      // { id: "address.city", label: "Telefon", errorMessage: root.$t('city_error') },
    ]);
    const form = ref({
      pesel: '',
      phone: '',
      email: '',
      address: {
        street: '',
        streetNr: '',
        flatNr: '',
        postCode: '',
        city: '',
      },
      parent: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      }
    })
    // onUpdated(()=>{
    //    root.$accessor.updateStudent({ property: "grades", value: clonedGrades });
    // })
    function touch(data){
      this.$v[data].$touch()
    }

    return {
      formData,
      form,
      pesel,
      phone,
      email,
      touch
    }
  }
});
</script>

<style>
</style>