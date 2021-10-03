mounted() {
    console.log(this.$t("home"));
    this.$toast.success('loading_in');
    // axios.post("/api/users", {
    //     params: {
    //       login: "Login1",
    //       password: "Password1",
    //     },
    //   })
    //   .then((data) => console.log("data", data));
    // axios.get('/api/students').then(data=>console.log('data', data))
    // console.log(axios.get('/api/users').then(data=>console.log('data', data)))
  },
  // async asyncData({ $http }) {
  //   await $http.$post('/api/users')

  //   return {
  //     // test
  //   };
  // },