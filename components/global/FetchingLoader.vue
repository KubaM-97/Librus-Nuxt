<template>
  <div v-if="fetchState.error" class="mt-4">
    {{ $t("failed_to_fetch_students_list") }}
    <button
      class="ml-3 px-1 py-1 btn btn-small refreshBtn"
      @click="emit('fetch')"
    >
      {{ $t("try_again") }}
    </button>
  </div>
  <div class="image" v-else-if="fetchState.pending">
    <img src="~images/loader.gif" alt="loading..." />
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    fetchState: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
});
</script>
