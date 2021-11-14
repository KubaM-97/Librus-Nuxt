<template>
  <!-- <LoggedOutView /> -->
  <form action="" @submit.prevent="xxx">
    
    <button>loguj</button>
  </form>
</template>

<script>
// import LoggedOutView from '@/views/LoggedOutView.vue';
// import { defineComponent } from '@nuxtjs/composition-api'
export default {
  name: 'Login',
  components: {
    // LoggedOutView,
  },
  methods: {
    async xxx(){
      await this.$auth.loginWith("local", {
          data: {
            username: 'sgdfg',
            password: '123',
          },
        });
        console.log(this.$auth);
    }
  }
};
</script>
