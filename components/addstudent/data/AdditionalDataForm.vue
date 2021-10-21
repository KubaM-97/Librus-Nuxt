<template>
  <div class="showAdditionalDataForm" v-if="showAdditionalDataForm">
        <div class="container">

          <div class="row mt-2 mb-3" v-for="data in formData" :key="data.property">
            <label class="col-12" :class="{'errorDataLabel': v.form.student[data.property].$dirty && v.form.student[data.property]}">{{ $t(data.property) }}</label>
            <input
              v-if="!Array.isArray(data.value)"
              type="text"
              :placeholder="data.errorMessage"
              :name="data.property"
              :id="data.property"
              v-model.trim="student[data.property]"
              @change="v.form.student[data.property].$touch()"
              class="col-10"
              :class="{'errorDataInput': v.form.student[data.property].$dirty && v.form.student[data.property]}"
              autocomplete="off"
            />
            <input
              v-else
              v-for="subData in data.value"
              :key="subData.property"
              type="text"
              :placeholder="subData.errorMessage"
              :name="[data.property][subData.property]"
              :id="[data.property][subData.property]"
              v-model.trim.lazy="student[data.property][subData.property]"
              @change="v.form.student[data.property][subData.property].$touch()"
              class="col-10"
              :class="{'errorDataInput': v.form.student[data.property].$invalid && v.form.student[data.property].$dirty}"
              autocomplete="off"
            />
        </div>
          </div>
        </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onUpdated } from "@nuxtjs/composition-api";
export default defineComponent({
  props: ['showAdditionalDataForm', 'v'],
  setup(props, {root} ){
    const studentState = computed(() => root.$accessor.student)
    const student = ref(Object.assign({}, studentState.value))
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
input:focus {
        border: 2px solid #a5cda5;
        -webkit-box-shadow: 0px 0px 3px 2px rgba(204, 204, 204, 0.9);
        -moz-box-shadow: 0px 0px 3px 2px rgba(204, 204, 204, 0.9);
        box-shadow: 0px 0px 3px 2px rgba(204, 204, 204, 0.9);
    
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