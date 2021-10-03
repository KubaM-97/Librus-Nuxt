<template>

  <div class="ourStudentPanel" ref="editDataPanel">
    <div class="container">
       <form action="#" enctype="application/x-www-form-urlencoded" method="post" @submit.prevent="saveChanges">
          <div class="form-group">
            <div class="row">
              <div class="col-10">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6 offset-md-2">
                      <label for="FirstName">{{ $t('firstname') }}</label>
                      <input name="#" type="text" autocomplete="off" id="FirstName" v-model="ourStudent.firstName" @keyup="validatorData('FirstName', '^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$', 'Brak cyfr i znaków specjalnych. <br /><br /> Możliwe drugie imię <br />np. Anna Maria')">
                      <span class="wrongAdditionalInfo" id="wrongFirstName"></span>
                    </div>
                    <div class="col-md-4">
                      {{ourStudent.firstName}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2" v-if="showGreenCheckMark.firstName">
                <img class="greenCheckMark" src="../assets/images/greenCheckMark.png" alt="green check mark">
                <transition name="showGreenMark">
                  <div class="blackLayer" v-if="hideCheckMarkWithLayer.firstName" key="1">

                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-10">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6 offset-md-2">
                      <label for="LastName">{{ $t('lastname') }}</label>
                      <input name="#" type="text" autocomplete="off" id="LastName" v-model="ourStudent.lastName" @keyup="validatorData('LastName', '^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$', 'Brak cyfr i znaków specjalnych. <br /><br />Możliwe drugie nazwisko po myślniku <br />np. Ćwierć-Parzącha')">
                      <span class="wrongAdditionalInfo" id="wrongLastName"></span>
                    </div>
                    <div class="col-md-4">
                      {{ourStudent.lastName}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2" v-if="showGreenCheckMark.lastName">
                  <img class="greenCheckMark" src="../assets/images/greenCheckMark.png" alt="green check mark">
                  <transition name="showGreenMark">
                    <div class="blackLayer" v-if="hideCheckMarkWithLayer.lastName" key="2">

                    </div>
                  </transition>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-10">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6 offset-md-2">
                      <label for="Pesel">PESEL</label>
                      <input name="#" type="text" autocomplete="off" id="Pesel" v-model="ourStudent.pesel" @keyup="validatorData('Pesel', '^[0-9]{11}$', 'Dokładnie 11 cyfr')">
                      <span class="wrongAdditionalInfo" id="wrongPesel"></span>
                    </div>
                    <div class="col-md-4">
                      {{ourStudent.pesel}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2" v-if="showGreenCheckMark.pesel">
                  <img class="greenCheckMark" src="../assets/images/greenCheckMark.png" alt="green check mark">
                  <transition name="showGreenMark">
                    <div class="blackLayer" v-if="hideCheckMarkWithLayer.pesel" key="3">

                    </div>
                  </transition>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-10">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6 offset-md-2">
                      <label>{{ $t('address') }}:</label>

                      <input name="#" type="text" autocomplete="off" v-model="ourStudent.streetName" id="Street" placeholder="ulica" @keyup="validatorData('Street', '^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$', 'Bez znaków specjalnych.')">
                      <span class="wrongAdditionalInfo" id="wrongStreet"></span>

                      <input name="#" type="text" autocomplete="off" v-model="ourStudent.streetNr" id="HouseNr" placeholder="nr_domu" @keyup="validatorData('HouseNr', '^[0-9]+[a-zA-Z]?(/?[0-9]*[a-zA-Z]?)?$', 'Nr, Nr/Nr, Nr Litera <br /> np. 11 11/13 11A')">
                      <span class="wrongAdditionalInfo" id="wrongHouseNr"></span>

                      <input name="#" type="text" autocomplete="off" v-model="ourStudent.streetFlat" id="FlatNr" placeholder="nr_mieszkania" @keyup="validatorData('FlatNr', '^[0-9]+[a-zA-Z]?$', 'Liczba + ew.litera np.116F')">
                      <span class="wrongAdditionalInfo" id="wrongFlatNr"></span>

                      <input name="#" type="text" autocomplete="off" v-model="ourStudent.streetPostcode" id="PostCode" placeholder="kod pocztowy" @keyup="validatorData('PostCode', '^[0-9]{2}-[0-9]{3}$', '_ _ - _ _ _')">
                      <span class="wrongAdditionalInfo" id="wrongPostCode"></span>

                      <input name="#" type="text" autocomplete="off" v-model="ourStudent.streetCity" id="City" placeholder="miasto" @keyup="validatorData('City', '^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( (- )?[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)*$', 'Brak Cyfr i znaków specjalnych. <br />')">
                      <span class="wrongAdditionalInfo" id="wrongCity"></span>
                    </div>
                    <div class="col-md-4">
                      ul.{{ourStudent.streetName}} {{ourStudent.streetNr}} m.{{ourStudent.streetFlat}} <br />  {{ourStudent.streetPostcode}} {{ourStudent.streetCity}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2" v-if="showGreenCheckMark.street">
                  <img class="greenCheckMark" src="../assets/images/greenCheckMark.png" alt="green check mark">
                  <transition name="showGreenMark">
                    <div class="blackLayer" v-if="hideCheckMarkWithLayer.street" key="4">

                    </div>
                  </transition>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-10">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6 offset-md-2">
                      <label for="Phone">{{ $t('phone') }}</label>
                      <input name="#" type="text" autocomplete="off" id="Phone" v-model="ourStudent.phone" @keyup="validatorData('Phone', '^([0-9]{7}|[0-9]{9})$', 'Dokładnie 7 lub 9 cyfr.')">
                      <span class="wrongAdditionalInfo" id="wrongPhone"></span>
                    </div>
                    <div class="col-md-4">
                      {{ourStudent.phone}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2" v-if="showGreenCheckMark.phone">
                  <img class="greenCheckMark" src="../assets/images/greenCheckMark.png" alt="green check mark">
                  <transition name="showGreenMark">
                    <div class="blackLayer" v-if="hideCheckMarkWithLayer.phone" key="5">

                    </div>
                  </transition>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-10">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6 offset-md-2">
                      <label for="Email">{{ $t('email') }}</label>
                      <input name="#" type="text" autocomplete="off" id="Email" v-model="ourStudent.email" @keyup="validatorData('Email', '^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-]+\.[a-z]+$', 'nazwa@domena.pl')">
                      <span class="wrongAdditionalInfo" id="wrongEmail"></span>
                    </div>
                    <div class="col-md-4">
                      {{ourStudent.email}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2" v-if="showGreenCheckMark.email">
                  <img class="greenCheckMark" src="../assets/images/greenCheckMark.png" alt="green check mark">
                  <transition name="showGreenMark">
                    <div class="blackLayer" v-if="hideCheckMarkWithLayer.email" key="6">

                    </div>
                  </transition>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-10">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6 offset-md-2">
                      <label>{{ $t('mother') }}</label>
                      <input name="#" type="text" autocomplete="off" id="MothersFirstName" v-model="ourStudent.motherFirstName" @keyup="validatorData('MothersFirstName', '^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$', 'Brak cyfr i znaków specjalnych. <br /><br /> Możliwe drugie imię <br />np. Anna Maria')">
                      <span class="wrongAdditionalInfo" id="wrongMothersFirstName"></span>

                      <input name="#" type="text" autocomplete="off" id="MothersLastName" v-model="ourStudent.motherLastName" @keyup="validatorData('MothersLastName', '^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$', 'Brak cyfr i znaków specjalnych. <br /><br />Możliwe drugie nazwisko po myślniku <br />np. Ćwierć-Parzącha')">
                      <span class="wrongAdditionalInfo" id="wrongMothersLastName"></span>

                      <input name="#" type="text" autocomplete="off" id="Mothersphone" v-model="ourStudent.motherPhone" @keyup="validatorData('Mothersphone', '^[0-9]{7}([0-9]{2})?$', 'Dokładnie 7 lub 9 cyfr.')">
                      <span class="wrongAdditionalInfo" id="wrongMothersphone"></span>

                      <input name="#" type="text" autocomplete="off" id="MothersEmail" v-model="ourStudent.motherEmail" @keyup="validatorData('MothersEmail', '^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-]+\.[a-z]+$', 'nazwa@domena.pl')">
                      <span class="wrongAdditionalInfo" id="wrongMothersEmail"></span>

                    </div>
                    <div class="col-md-4">
                      {{ourStudent.motherFirstName}}<br />{{ourStudent.motherLastName}}<br />{{ourStudent.motherPhone}}<br />{{ourStudent.motherEmail}}<br />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2" v-if="showGreenCheckMark.mother">
                  <img class="greenCheckMark" src="../assets/images/greenCheckMark.png" alt="green check mark">
                  <transition name="showGreenMark">
                    <div class="blackLayer" v-if="hideCheckMarkWithLayer.mother" key="7">

                    </div>
                  </transition>
              </div>
            </div>
          </div>
          <div class="form-group">
        <div class="row">
          <div class="col-10">
            <div class="container">
              <div class="row">
                <div class="col-md-6 offset-md-2">
                  <label>{{ $t('father') }}</label>
                  <input name="#" type="text" autocomplete="off" id="FathersFirstName" v-model="ourStudent.fatherFirstName" @keyup="validatorData('FathersFirstName', '^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$', 'Brak cyfr i znaków specjalnych. <br /><br /> Możliwe drugie imię <br />np. Jan Maria')">
                  <span class="wrongAdditionalInfo" id="wrongFathersFirstName"></span>

                  <input name="#" type="text" autocomplete="off" id="FathersLastName" v-model="ourStudent.fatherLastName" @keyup="validatorData('FathersLastName', '^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)?$', 'Brak cyfr i znaków specjalnych. <br /><br />Możliwe drugie nazwisko po myślniku <br />np. Ćwierć-Parzącha')">
                  <span class="wrongAdditionalInfo" id="wrongFathersLastName"></span>

                  <input name="#" type="text" autocomplete="off" id="Fathersphone" v-model="ourStudent.fatherPhone" @keyup="validatorData('Fathersphone', '^[0-9]{7}([0-9]{2})?$', 'Dokładnie 7 lub 9 cyfr.')">
                  <span class="wrongAdditionalInfo" id="wrongFathersphone"></span>

                  <input name="#" type="text" autocomplete="off" id="FathersEmail" v-model="ourStudent.fatherEmail" @keyup="validatorData('FathersEmail', '^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-]+\.[a-z]+$', 'nazwa@domena.pl')">
                  <span class="wrongAdditionalInfo" id="wrongFathersEmail"></span>

                </div>
                <div class="col-md-4">
                  {{ourStudent.fatherFirstName}}<br />{{ourStudent.fatherLastName}}<br />{{ourStudent.fatherPhone}}<br />{{ourStudent.fatherEmail}}<br />
                </div>
              </div>
            </div>
          </div>
          <div class="col-2" v-if="showGreenCheckMark.father">
              <img class="greenCheckMark" src="../assets/images/greenCheckMark.png" alt="green check mark">
              <transition name="showGreenMark">
                <div class="blackLayer" v-if="hideCheckMarkWithLayer.father" key="8">

                </div>
              </transition>
          </div>
        </div>
      </div>
      </form>
      <button name="possibleSaveData" v-if="possibleSave" @click="saveChanges(ourStudent, showGreenCheckMark, hideCheckMarkWithLayer)" class="btn btn-success btn-lg save">{{ $t('save_changes') }}</button>
      <button name="impossibleSaveData" v-else class="btn btn-success btn-lg save" disabled>{{ $t('save_changes') }}</button>
    </div>

    <button name="closeTheDataPanel" @click="closeThePanel()"><img class="closeThePanel" src="../assets/images/eXit.png"/></button>

  </div>

</template>

<script>
import dataService from "../assets/mixins/dataMixins.js"
import{ ref } from "vue";
import{ useRoute, useRouter } from "vue-router";
export default {
  name: 'EditData',
  setup(_, { emit }){
    const route = useRoute()
    const router = useRouter()
    const ourStudent = ref(Object.assign({}, route.params)).value
    
    delete ourStudent.marks
    delete ourStudent.weights
    delete ourStudent.descriptions
    delete ourStudent.dates
    const showGreenCheckMark = ref({
      firstName: false,
      lastName: false,
      pesel: true,
      street: false,
      phone: false,
      email: false,
      mother: false,
      father: true
    })
    const hideCheckMarkWithLayer = ref({
      firstName: true,
      lastName: true,
      pesel: true,
      street: true,
      phone: true,
      email: true,
      mother: true,
      father: true
    })
    const possibleSave = ref(true);
    function closeThePanel(){
      router.push({name: "Student", params: route.params})
      emit("update:showDataEditionRouterView", false);
    }
    return{
      ourStudent,
      showGreenCheckMark,
      hideCheckMarkWithLayer,
      possibleSave,
      closeThePanel,
    ...dataService()
    }
  }
}
</script>

<style lang="css" scoped>
div.ourStudentPanel{
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
.row div[class^="col"]{
  display: grid;
  align-content: center
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
button[name="closeTheDataPanel"]{
  position: absolute;
  top: -10px;
  right: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  outline: none;
}
img.closeThePanel{
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 2px 2px 10px 2px #d54545;
  -moz-box-shadow: 2px 2px 10px 2px #d54545;
  box-shadow: 2px 2px 10px 2px #d54545;
  border-radius: 50px;
}
button.save{
  font-size: 15px;
  padding: 8px 12px;
  opacity: 1;
  float: right;
}
button.save[disabled]{
  background-color: red;
  cursor: not-allowed;
}
img.greenCheckMark{
  width: 27px;
  height: 27px;
  margin: auto;
  -webkit-box-shadow: 2px 2px 10px 2px #199c05;
  -moz-box-shadow: 2px 2px 10px 2px #199c05;
  box-shadow: 2px 2px 10px 2px #199c05;
  opacity: 0.8;
}
div.blackLayer{
  background-color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
}
@media (max-width: 768px){
  div.ourStudentPanel{
    top: 95%;
  }
  .row div[class^="col"]{
    display: grid;
    align-content: center
  }
  span.wrongAdditionalInfo{
    font-size: 10px;
  }
  img.greenCheckMark{
    width: 22px;
    height: 22px;
  }
  button.save{
    font-size: 11px;
  }
  img.closeThePanel{
    width: 30px;
    height: 30px;
  }
}
@media (max-width: 500px){
  input{
    width: 100%;
  }
}
</style>