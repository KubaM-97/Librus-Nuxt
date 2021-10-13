<template>
  <div class="showAdditionalDataForm" v-if="showAdditionalDataForm">
    <div class="form-group" v-for="data in form" :key="data.id">
      <label :for="data.id">{{ data.label }}:</label>
      <input
        type="text"
        :id="data.id"
        :name="data.id"
        v-model.trim="$v.form.pesel.$model"
        autocomplete="off"
        :placeholder="data.label"
      />
        <!-- v-model.trim="$v.form.pesel.$model" -->
        {{validate(data.id)}}
      <div class="error" v-if="validate(data.id)">
            {{data.errorMessage}}
      </div>
    </div>
    <!-- <div class="form-group">
      <label for="pesel">PESEL:</label>
      <input
        type="text"
        id="pesel"
        name="pesel"
        v-model.trim="$v.form.pesel.$model"
        autocomplete="off"
        placeholder="PESEL"
      />
      <div class="error" v-if="$v.form.pesel.$invalid && $v.form.pesel.$dirty">
        Dokładnie 11 cyfr
      </div>
      <div class="checkMark" v-else />
    </div>

    <div class="form-group">
      <label>Adres:</label>

      <div class="form-group">
        <input
          type="text"
          id="street"
          name="street"
          v-model.trim="$v.form.address.street.$model"
          autocomplete="off"
          placeholder="ulica"
        />
        <div class="error" v-if="!$v.form.address.street.street">
          Bez znaków specjalnych
        </div>
        <div class="checkMark" v-else />
      </div>

      <div class="form-group">
        <input
          type="text"
          id="house"
          name="house"
          v-model.trim="$v.form.address.streetNr.$model"
          autocomplete="off"
          placeholder="nr_domu"
        />
        <div class="error" v-if="!$v.form.address.streetNr.streetNr">
          Nr, Nr/Nr, Nr Litera <br />
          np. 11 11/13 11A 11A/13B
        </div>
        <div class="checkMark" v-else />
      </div>

      <div class="form-group">
        <input
          type="text"
          id="flat"
          name="flat"
          v-model.trim="$v.form.address.flatNr.$model"
          autocomplete="off"
          placeholder="nr_domu"
        />
        <div class="error" v-if="!$v.form.address.flatNr.flatNr">
          Liczba + ew.litera np.116F
        </div>
        <div class="checkMark" v-else />
      </div>

      //maska _ _ - _ _ _
      <div class="form-group">
        <input
          type="text"
          id="postCode"
          name="postCode"
          v-model.trim="$v.form.address.postCode.$model"
          autocomplete="off"
          placeholder="kod pocztowy"
        />
        <div class="error" v-if="!$v.form.address.postCode.postCode">
          _ _ - _ _ _
        </div>
        <div class="checkMark" v-else />
      </div>

      <div class="form-group">
        <input
          type="text"
          id="city"
          name="city"
          v-model.trim="$v.form.address.city.$model"
          autocomplete="off"
          placeholder="miasto"
        />
        <div class="error" v-if="!$v.form.address.city.city">
          Bez i znaków specjalnych
        </div>
        <div class="checkMark" v-else />
      </div>
    </div>

    <div class="form-group">
      <label for="phone">Telefon:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        v-model.trim="$v.form.phone.$model"
        autocomplete="off"
        placeholder="Telefon"
      />
      <div class="error" v-if="!$v.form.phone.phone">
        Dokładnie 7 lub 9 cyfr
      </div>
      <div class="checkMark" v-else />
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input
        type="text"
        id="email"
        name="pesel"
        v-model.trim="$v.form.email.$model"
        autocomplete="off"
        placeholder="Telefon"
      />
      <div class="error" v-if="!$v.form.email.email">nazwa@domena.pl</div>
      <div class="checkMark" v-else />
    </div>

    <div class="form-group">
      <label>Matka:</label>

      <div class="form-group">
        <label for="mother_firstname">Imię matki:</label>
        <input
          type="text"
          id="mother_firstname"
          name="mother_firstname"
          v-model.trim="$v.form.parent.parentFirstname.$model"
          autocomplete="off"
          placeholder="Imię matki"
        />
        <div
          class="error"
          v-if="!$v.form.parent.parentFirstname.parentFirstname"
        >
          Możliwe drugie imię <br />np. Anna Maria
        </div>
        <div class="checkMark" v-else />
      </div>

      <div class="form-group">
        <label for="mother_lastname">Nazwisko matki:</label>
        <input
          type="text"
          id="mother_lastname"
          name="mother_lastname"
          v-model.trim="$v.form.parent.parentLastname.$model"
          autocomplete="off"
          placeholder="Nazwisko matki"
        />
        <div class="error" v-if="!$v.form.parent.parentLastname">
          'Brak cyfr i znaków specjalnych. <br /><br />Możliwe drugie nazwisko
          po myślniku <br />np. Ćwierć-Parzącha'
        </div>
        <div class="checkMark" v-else />
      </div>

      <div class="form-group">
        <label for="mother_phone">Telefon:</label>
        <input
          type="text"
          id="mother_phone"
          name="mother_phone"
          v-model.trim="$v.form.phone.$model"
          autocomplete="off"
          placeholder="Telefon"
        />
        <div class="error" v-if="!$v.form.phone.phone">
          Dokładnie 7 lub 9 cyfr
        </div>
        <div class="checkMark" v-else />
      </div>

      <div class="form-group">
        <label for="mother_email">Email:</label>
        <input
          type="text"
          id="mother_email"
          name="mother_email"
          v-model.trim="$v.form.email.$model"
          autocomplete="off"
          placeholder="Email"
        />
        <div class="error" v-if="!$v.form.email.email">nazwa@domena.pl</div>
        <div class="checkMark" v-else />
      </div>
    </div>

    <div class="form-group">
      <label>Ojciec:</label>

      <div class="form-group">
        <label for="father_firstname">Imię ojca:</label>
        <input
          type="text"
          id="father_firstname"
          name="father_firstname"
          v-model.trim="$v.form.parent.parentFirstname.$model"
          autocomplete="off"
          placeholder="Imię ojca"
        />
        <div
          class="error"
          v-if="!$v.form.parent.parentFirstname.parentFirstname"
        >
          Możliwe drugie imię <br />np. Jan Maria
        </div>
        <div class="checkMark" v-else />
      </div>

      <div class="form-group">
        <label for="father_lastname">Nazwisko ojca:</label>
        <input
          type="text"
          id="father_lastname"
          name="mother_lastname"
          v-model.trim="$v.form.parent.parentLastname.$model"
          autocomplete="off"
          placeholder="Nazwisko ojca"
        />
        <div
          class="error"
          v-if="!$v.form.parent.parentFirstname.parentFirstname"
        >
          'Brak cyfr i znaków specjalnych. <br /><br />Możliwe drugie nazwisko
          po myślniku <br />np. Ćwierć-Parzącha'
        </div>
        <div class="checkMark" v-else />
      </div>

      <div class="form-group">
        <label for="father_phone">Telefon:</label>
        <input
          type="text"
          id="father_phone"
          name="father_phone"
          v-model.trim="$v.form.phone.$model"
          autocomplete="off"
          placeholder="Telefon"
        />
        <div class="error" v-if="!$v.form.phone.phone">
          Dokładnie 7 lub 9 cyfr
        </div>
        <div class="checkMark" v-else />
      </div>

      <div class="form-group">
        <label for="father_phone">Email:</label>
        <input
          type="text"
          id="father_phone"
          name="father_phone"
          v-model.trim="$v.form.email.$model"
          autocomplete="off"
          placeholder="Email"
        />
        <div class="error" v-if="!$v.form.email.email">nazwa@domena.pl</div>
        <div class="checkMark" v-else />
      </div>
    </div> -->
  </div>
</template>

<script>
import { helpers, required } from "vuelidate/lib/validators";
import { defineComponent, ref } from "@nuxtjs/composition-api";

const parentFirstname = helpers.regex(
  "parentFirstname",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$/
);
const parentLastname = helpers.regex(
  "parentLastname",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$/
);
const pesel = helpers.regex("pesel", /^[0-9]{11}$/);
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
    form: {
      pesel: { required }
      // $each: {
      //   name: {
      //     required,
      //   },
      //   pesel: { pesel },
      //   phone: { phone },
      //   email: { email },
      //   address: {
      //     street: { street },
      //     streetNr: { streetNr },
      //     flatNr: { flatNr },
      //     postCode: { postCode },
      //     city: { city },
      //   },
      //   parent: {
      //     parentFirstname: { parentFirstname },
      //     parentLastname: { parentLastname },
      //   },
      // },
    },
  },
  props: ['showAdditionalDataForm'],
  setup(){
    const form = ref([
      // { id: "phone", label: "Telefon", errorMessage: "dup" },
      { id: "pesel", label: "pesel", errorMessage: "Dokładnie 11 cyfr" },
    ]);
    // const validate = computed(()=> {this.$v.form})
    function validate(data){
      // console.log(this.$v.form, this.$v.form.pesel.$invalid, this.$v.form.pesel.$dirty);
      return this.$v.form.pesel.$invalid && this.$v.form.pesel.$dirty
    }
    function model(data){
      return this.$v.form.pesel.$model
    }
    return {
      form,
      model,
      validate
    }
  }
});
</script>

<style>
</style>