<template>
  <div>
    <TheHeader v-if="$store.getters.isAuthenticated"/>
    <Nuxt />
  </div>
</template>
