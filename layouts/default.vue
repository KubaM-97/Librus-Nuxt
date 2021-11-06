<template>
  <div>
    <TheHeader v-if="$auth.loggedIn"/>
    {{$auth.busy}}
    {{$auth.loggedIn}}
    {{$auth.$state.loggedIn}}
    <Nuxt />
  </div>
</template>

