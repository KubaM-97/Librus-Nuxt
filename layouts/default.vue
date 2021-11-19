<template>
  <div>
    <!-- <TheHeader v-if="$store.getters.isAuthenticated"/> -->
    <!-- <TheHeader /> -->
    LoggedIn: {{$auth.loggedIn}}
    <!-- Loggeduser: {{$auth.user}} -->
    <Nuxt />
  </div>
</template>
