<template>
  <div>
    <TheHeader v-if="$auth.loggedIn"/>
    <Nuxt />
  </div>
</template>
