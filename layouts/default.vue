<template>
  <div>
    <!-- <TheHeader v-if="$store.getters.isAuthenticated"/> -->
    <!-- <TheHeader v-if="$auth.loggedIn"/> -->
    LoggedIn: {{$auth.loggedIn}}
    Loggeduser: {{$auth.user}}
    <Nuxt />
  </div>
</template>
