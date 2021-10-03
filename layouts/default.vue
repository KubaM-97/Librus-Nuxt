<template>
  <Nuxt />
</template>
<script>

require('@/assets/css/main.css')
export default {
  layout (context) {
    return context.store.state.isLogged ? 'layoutWithHeader' : 'default'
  },
}
</script>

