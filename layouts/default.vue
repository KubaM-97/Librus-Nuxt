<template>
  <div>
    <!-- <TheHeader v-if="$store.getters.isAuthenticated"/> -->
    <TheHeader />
    LoggedIn: {{$auth.loggedIn}}
    <Nuxt />
  </div>
</template>
