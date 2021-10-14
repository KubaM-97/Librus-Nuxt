<template>
  <div class="ourStudentPanel" ref="editDataPanel">
    <div class="container">
      <form
        action="#"
        enctype="application/x-www-form-urlencoded"
        method="post"
        @submit.prevent="saveChanges"
      >
        <div class="form-group">
          <div class="row">
            <div class="col-10">
              <div class="container">
                <div class="row">
                  <div class="col-md-6 offset-md-2">
                    <label for="firstname">{{ $t("firstname") }}</label>
                    <input
                      name="#"
                      type="text"
                      autocomplete="off"
                      id="firstname"
                      v-model="student.firstName"
                    />
                  </div>
                  <div class="col-md-4">
                    {{ student.firstName }}
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-2" v-if="showGreenCheckMark.firstName">
                <img class="greenCheckMark" src="@/assets/images/greenCheckMark.png" alt="green check mark"> 
                <transition name="showGreenMark">
                  <div class="blackLayer" v-if="hideCheckMarkWithLayer.firstName" key="1">

                  </div>
                </transition>
              </div> -->
          </div>
        </div>
      </form>
      <button
        name="possibleSaveData"
        class="btn btn-success btn-lg save"
        :disabled="!isPossibleSave"
      >
        {{ $t("save_changes") }}
      </button>
    </div>

    <button name="closeTheDataPanel" @click="$router.go(-1)">
      <img class="closeThePanel" src="@/assets/images/eXit.png" />
    </button>
  </div>
</template>

<script>
import { useRoute, ref, useContext, useFetch } from "@nuxtjs/composition-api";
export default {
  name: "EditData",
  setup() {
    const route = useRoute();
    const id = route.value.params.id;

    const isPossibleSave = ref(true);
    const student = ref("");
    const { $http } = useContext();

    useFetch(async () => {
      student.value = await $http.$get(`api/students/${id}`);
    });
    function validatorData() {}

    function saveChanges() {
      try {
        axios.post("api/students");
      } catch (err) {
        console.error(err);
      }
    }
    return {
      student,
      validatorData,
      saveChanges,
      isPossibleSave,
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