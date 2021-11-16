<template>
  <div class="newStudentPanelButtons mt-4 text-right">
    <button
      type="button"
      name="addStudentCancel"
      class="btn btn-lg ml-2 px-2 py-1 cancel"
      @click="$emit('cancel')"
    >
      {{ $t("cancel") }}
    </button>

    <button
      name="addStudent"
      class="btn btn-lg ml-2 px-2 py-1 font-weight-bold submit"
      @click="$emit('submit')"
    >
      {{ $t("add_student") }}
    </button>
  </div>
</template>


<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "FormActions",
});
</script>

<style lang="scss">
.newStudentPanelButtons {
  width: 90%;
  button {
    font-size: 14px;
    color: whitesmoke;
    &.submit {
      background-color: #067bdb;
      &:hover {
        -webkit-box-shadow: 0.3px 0.3px 1px 5px #02457c;
        -moz-box-shadow: 0.3px 0.3px 1px 5px #02457c;
        box-shadow: 0.3px 0.3px 1px 5px #02457c;
      }
    }
    &.cancel {
      background-color: #db1526;
      &:hover {
        -webkit-box-shadow: 0.3px 0.3px 1px 5px #77131c;
        -moz-box-shadow: 0.3px 0.3px 1px 5px #77131c;
        box-shadow: 0.3px 0.3px 1px 5px #77131c;
      }
    }
  }
}
</style>