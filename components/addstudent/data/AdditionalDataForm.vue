<template>
  <div class="showAdditionalDataForm" v-if="showAdditionalDataForm">
        <div class="container">
aaa:{{form2}}:bbb
<!-- xxx:{{student.street}}:yyy -->
          <div class="row mt-2 mb-3" v-for="data in formData" :key="data.property">
            <label class="col-12" :class="{'errorDataLabel': v.form.student[data.property].$invalid && v.form.student[data.property].$dirty}">{{ $t(data.property) }}</label>
            <!-- <input
              v-if="!Array.isArray(data.value)"
              type="text"
              :placeholder="data.errorMessage"
              :name="data.property"
              :id="data.property"
              v-model.trim="form.student[data.property]"
              @change="showError($event.target.value, data.property)"
              class="col-10"
              :class="{'errorDataInput': v.form.student[data.property].$invalid && v.form.student[data.property].$dirty}"
              autocomplete="off"
            /> -->
            <input
              v-for="subData in data.value"
              :key="subData.property"
              type="text"
              :placeholder="subData.errorMessage"
              :name="[data.property][subData.property]"
              :id="[data.property][subData.property]"
              v-model="form2.street.name"
              class="col-10"
              :class="{'errorDataInput': v.form.student[data.property][subData.property].$invalid && v.form.student[data.property][subData.property].$dirty}"
              autocomplete="off"
            />
              <!-- @change="showError($event.target.value, [data.property], [subData.property])" -->
        </div>
          </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onUpdated } from "@nuxtjs/composition-api";
export default defineComponent({
  props: ['showAdditionalDataForm', 'v', 'form'],
  setup(props, {root} ){
    const form = {...props.form}
    const form2 = ref({...props.form.student, street: Object.assign({},form.student.street)})
    console.log(form);
    const studentState = computed(() => root.$accessor.student)
    const student = ref({
      street: Object.assign({},form.student.street)
    })
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
        // {
        //   property: "pesel",
        //   value: form.student.pesel,
        //   errorMessage: root.$t('pesel_error'),
        // },
        // {
        //   property: "phone",
        //   value: form.student.phone,
        //   errorMessage: root.$t('phone_error'),
        // },
        // {
        //   property: "email",
        //   value: form.student.email,
        //   errorMessage: root.$t('email_error'),
        // },
        {
          property: "street",
          value: [
            {
              property: "name",
              // value: {...form.student.street.name},
              errorMessage: root.$t('street_name_error'),
            },
          ]
        }
        //     {
        //       property: "nr",
        //       value: form.student.street.nr,
        //       errorMessage: root.$t('street_nr_error'),
        //     },
        //     {
        //       property: "flat",
        //       value: form.student.street.flat,
        //       errorMessage: root.$t('street_flat_error'),
        //     },
        //     {
        //       property: "postcode",
        //       value: form.student.street.postcode,
        //       errorMessage: root.$t('street_postcode_error'),
        //     },
        //     {
        //       property: "city",
        //       value: form.student.street.city,
        //       errorMessage: root.$t('street_city_error'),
        //     },
        //   ],
        // },
        // {
        //   property: "mother",
        //   value: [
        //     {
        //       property: "firstName",
        //       value: form.student.mother.firstName,
        //       errorMessage: root.$t('first_name_error'),
        //     },
        //     {
        //       property: "lastName",
        //       value: form.student.mother.lastName,
        //       errorMessage: root.$t('last_name_error'),
        //     },
        //     {
        //       property: "phone",
        //       value: form.student.mother.phone,
        //       errorMessage: root.$t('phone_error'),
        //     },
        //     {
        //       property: "email",
        //       value: form.student.mother.email,
        //       errorMessage: root.$t('email_error'),
        //     },
        //   ],
        // },
        // {
        //   property: "father",
        //   value: [
        //     {
        //       property: "firstName",
        //       value: form.student.father.firstName,
        //       errorMessage: root.$t('first_name_error'),
        //     },
        //     {
        //       property: "lastName",
        //       value: form.student.father.lastName,
        //       errorMessage: root.$t('last_name_error'),
        //     },
        //     {
        //       property: "phone",
        //       value: form.student.father.phone,
        //       errorMessage: root.$t('phone_error'),
        //     },
        //     {
        //       property: "email",
        //       value: form.student.father.email,
        //       errorMessage: root.$t('email_error'),
        //     },
        //   ],
        // },
      ]);

    onUpdated(()=>{
      console.log(form);
      const clonedStudent = {...form.student}
      root.$accessor.setStudent(clonedStudent);
    })
    function showError(val, data, subData){
      // form.student[data] = val
      // props.v.form.student[data].$touch()
      form.student[data][subData] = val
      props.v.form.student[data].$touch()

      // console.log(data, subData, val);

    //   form.student.pesel = 88
    // form.student.street = {name: 44}
      // if(subData) {
      //   form.student[data][subData] = val
      //   v.form.student[data].$touch()
      // }
      // else{

      //   props.form.student[data] = val
      // props.v.form.student[data].$touch()
      // }
      // if(Array.isArray(props.v.form.student[data].value)) console.log('2222')
      // props.v.form.student[data.property][subData.property].$touch()

    }
    return {
      form2,
      formData,
      nestedProperty,
      showError,
      student,
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