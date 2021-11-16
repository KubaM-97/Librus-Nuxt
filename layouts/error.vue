<template>
  <div>
    <div id="error404">
      <img src="~images/error404.png" alt="error404" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "Error",
  head() {
    return {
      title: this.$t("error_page_title"),
    };
  },
});
</script>

<style lang="scss" scoped>
div#error404 {
  position: absolute;
  left: 40%;
  transform: translateX(-50%);
  margin: 100px 0;
  img {
    width: 100%;
  }
}
@media (max-width: 768px) {
  div#error404 {
    left: 50%;
    img {
      width: 100vw;
    }
  }
}
</style>
