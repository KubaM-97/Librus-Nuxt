<template>
  <div>
    <TheHeader v-if="$auth.loggedIn"/>
    {{$auth.loggedIn}}
    <Nuxt />
  </div>
</template>
