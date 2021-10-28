<template>
  <div>
    <div id="Error404">
      <img src="../assets/images/Error404.png" alt="Error404">
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: "errorPage",
  head() {
    return{
      title: this.$t('error_page_title'),
    }
  }
})
</script>

<style lang="css" scoped>
div#Error404{
  position: absolute;
  left: 40%;
  transform: translateX(-50%);
  margin: 100px 0
}
img{
  width: 100%;
}
@media (max-width: 768px){
  div#Error404{
    left: 50%;
    transform: translateX(-50%);
  }
  img{
    width: 100vw;
  }
}
</style>
