<template>
  <!-- <teleport to="body"> -->
  <div class="confirm py-4 text-center" v-show="showPrompt">
    <p class="mb-4">{{ $t("close_warning") }}</p>
    <div class="d-flex justify-content-around">
      <button class="px-3 py-1" name="showConfirmStay" @click="stay">
        {{ $t("close_stay") }}!
      </button>
      <button class="px-3 py-1" name="showConfirmQuit" @click="quit">
        {{ $t("close_quit") }}!
      </button>
    </div>
  </div>
  <!-- </teleport> -->
</template>

<script>
import { defineComponent, useRouter, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "ClosePrompt",
  setup() {
    const router = useRouter();
    const path = ref("");
    const showPrompt = ref(false);
    function quit() {
      router.push({ path: path.value.path });
    }
    function stay() {
      showPrompt.value = false;
    }
    function preventLeaving(to) {
      showPrompt.value = true;
      path.value = to;
    }
    return {
      showPrompt,
      quit,
      stay,
      preventLeaving,
    };
  },
});
</script>

<style lang="scss">
.confirm {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  width: 500px;
  max-width: 80%;
  height: 200px;
  background-color: rgb(14, 13, 13);
  box-shadow: 3px 3px 30px 5px #00c3ff;
  button {
    color: #faf5f5;
    border-radius: 10px;
    &:first-of-type {
      background-color: rgb(255, 49, 49);
    }
    &:last-of-type {
      background-color: rgb(5, 161, 5);
    }
  }
}
@media (max-width: 768px) {
  .confirm button {
    margin: 0 20px;
  }
}
</style>