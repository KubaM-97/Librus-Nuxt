<template>
  <form action="#" enctype="application/x-www-form-urlencoded" method="post">
    <div class="addStudentPanelName">
      <label for="name">
        *{{ $t('firstName_and_lastName') }}:
        <span class="nameTooltip">
          {{ $t('double_lastNames_hint') }}
        </span>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        v-model.trim="$v.fullName.$model"
        maxlength="30"
        autocomplete="off"
      />
      <transition name="bounce">
        <div
          class="error"
          ref="errorFullname"
          v-if="!$v.fullName.required && $v.fullName.$dirty"
        >
          {{ $t('fillname') }}
        </div>
        <div
          class="error"
          ref="errorFullname"
          v-else-if="!$v.fullName.fullname"
        >
          {{ $t('no_characters') }}
        </div>
      </transition>
    </div>

    <div class="addStudentPanelNameInfo">
      {{ $t('additional_info') }}
      <span
        class="showInfo"
        @click="showAdditionalDataForm = !showAdditionalDataForm"
        >{{ !showAdditionalDataForm ? $t('expand') : $t('collapse')}}</span
      >

      <transition @enter="enter" @leave="leave" :css="false">
        <AdditionalDataForm :showAdditionalDataForm="showAdditionalDataForm"/>
      </transition>
    </div>
  </form>
</template>

<script>
import { defineComponent, ref, watch } from "@nuxtjs/composition-api";
import { helpers, required } from "vuelidate/lib/validators";
import AdditionalDataForm from "@/components/addstudent/data/AdditionalDataForm.vue";
const fullname = helpers.regex(
  "fullname",
  /^[A-ZĄĆĘŁŃÓŚŹŻ]?[a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ]?[a-ząćęłńóśźż]*)+(-[A-ZĄĆĘŁŃÓŚŹŻ]?[a-ząćęłńóśźż]+)?$/
);
export default defineComponent({
  name: "PersonalStudentDataForm",
  components: {
    AdditionalDataForm,
  },
  validations: {
    fullName: {
      required,
      fullname
    },
  },
  setup(_, { root }) {
    const fullName = ref("");
    const showAdditionalDataForm = ref(false);
    const firstName = ref("");
    const lastName = ref("");

    function capitalize(val) {
      return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    }

    function getFirstAndLastName(fullName) {
      const fullNameArray = fullName.toLowerCase().split(" ");

      firstName.value = capitalize(fullNameArray[0]);
      lastName.value = fullNameArray.length > 1 ? capitalize(fullNameArray[1]) : "";
    }
    //starts animation of Student's detail data
    function enter(el, done) {
      el.addEventListener("animationend", function () {
        el.style = "";
        done();
      });
      el.style.animation = "showDetailData 1s";
    }
    //ends animation of Student's detail data
    function leave(el, done) {
      el.addEventListener("animationend", function () {
        el.style = "";
        done();
      });
      el.style.animationName = "showDetailData";
      el.style.animationDuration = "1s";
      el.style.animationDirection = "reverse";
    }

    watch(()=>fullName.value, (val)=>{
      getFirstAndLastName(val);
      root.$accessor.updateStudent({
        property: "firstName",
        value: firstName.value,
      });
      root.$accessor.updateStudent({
        property: "lastName",
        value: lastName.value,
      });
    })

    return {
      fullName,
      showAdditionalDataForm,
      enter,
      leave,
    };
  },
});
</script>

<style>
.addStudentPanelName input {
  outline: none;
  display: block;
  margin: 10px auto;
  text-align: center;
  background-color: black;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  text-shadow: none;
  width: 65%;
  font-size: 12px;
}
.addStudentPanelName input:focus {
  border: 2px solid #a5cda5;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.9);
  -moz-box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.9);
  box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.9);
}
.addStudentPanelName span.nameTooltip {
  font-size: 9px;
  display: block;
}
.addStudentPanelName span.required {
  display: block;
  font-size: 11px;
  color: white;
  text-shadow: 5px 0px 5px #f0351d, -5px 0px 5px #f0351d, 0px 5px 5px #f0351d,
    0px -5px 5px #f0351d;
}
.addStudentPanelNameInfo {
  margin-bottom: 50px;
}
.addStudentPanelNameInfo span.showInfo {
  cursor: pointer;
  font-size: 9px;
  margin-left: 25px;
}
.addStudentPanelNameInfo div.info {
  margin-top: 50px;
}
.addStudentPanelNameInfo .form-group {
  width: 100%;
  display: inline-block;
  vertical-align: top;
}
.addStudentPanelNameInfo label {
  float: left;
  padding-left: 25px;
  margin-top: 15px;
  font-size: 12px;
}
.addStudentPanelNameInfo input {
  display: block;
  float: right;
  width: 50%;
  margin-right: 50px;
  background-color: black;
  border: 0.2px solid white;
  border-top: none;
  border-left: none;
  border-right: none;
  box-shadow: 2px 2px 0px 0px white;
  text-align: left;
  padding-left: 15px;
  text-shadow: none;
  font-size: 12px;
}
.addStudentPanelNameInfo span[class^="wrong"] {
  font-size: 11.5px;
  display: block;
  width: 60%;
  float: right;
  margin-right: 30px;
  margin-top: 11px;
}
@media (max-width: 768px) {
  .addStudentPanelName {
    margin-bottom: 0px;
  }
  .addStudentPanelName span.required {
    height: 40px;
  }
  .addStudentPanelNameInfo input {
    margin-right: 0px;
  }
  .addStudentPanelNameInfo span[class^="wrong"] {
    margin-right: 0px;
  }
}
</style>