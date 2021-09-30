<template>
  <Tutorial/>
</template>

<script>
import axios from 'axios'
export default {
  mounted(){
    console.log(this.$t('home'));
    // console.log(axios.get('/api/users').then(data=>console.log('data', data)))
  },
  async asyncData ({ $http }) {
    console.log('asyncData');
    const test = await $http.$get('/api/users').then(data=>console.log('data', data))
    return {
      test
    }
  }
}
</script>
