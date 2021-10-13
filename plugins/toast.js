import Toasted from 'vue-toasted';
Vue.use(Toasted);

// Lets Register a Global Error Notification Toast.
Vue.toasted.register('my_app_error', 'Oops.. Something Went Wrong..', {
    type : 'error',
    icon : 'error_outline'
})