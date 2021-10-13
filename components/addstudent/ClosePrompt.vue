<template>
   <!-- <teleport to="body"> -->
      <div class="confirm" v-show="showPrompt">
        <p>Na pewno? Dane zostaną utracone...</p>
        <button name="showConfirmQuit" @click="quit">
          Wychodzę
        </button>
        <button name="showConfirmStay" @click="stay">
          Racja, zostaję!
        </button>
      </div>
    <!-- </teleport> -->
</template>

<script>
import { defineComponent, useRouter } from '@nuxtjs/composition-api'
export default defineComponent({
    name: 'ClosePrompt',
    props: {
      showPrompt: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    setup(props, { emit }){
      const router = useRouter()
      function quit(){
        console.log(router);
        router.go(1)
      }
      function stay(){
        emit('update:showPrompt', false);
      }
      return {
        quit,
        stay
      }
    }
})
</script>

<style>
.confirm {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  width: 500px;
  max-width: 80%;
  height: 200px;
  padding-top: 50px;
  background-color: black;
  box-shadow: 3px 3px 30px 5px #00c3ff;
  text-align: center;
}
.confirm p {
  margin-bottom: 50px;
}
.confirm button {
  padding: 10px;
  color: white;
  margin: 0 30px;
  border-radius: 10px;
}
.confirm button:first-of-type {
  background-color: red;
}
.confirm button:last-of-type {
  background-color: green;
}
@media (max-width: 768px) {

  .confirm button {
    margin: 0 20px;
  }
}
</style>