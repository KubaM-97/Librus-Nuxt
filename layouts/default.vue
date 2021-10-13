<template>
  <div>
    <TheHeader />
    <Nuxt />
  </div>
</template>
<script>

export default {
  layout (context) {
    return context.store.state.isLogged ? 'layoutWithHeader' : 'default'
  },
}
</script>

