<template>
<div>INDEX, {{$auth.loggedIn}}}}{{$auth.user}}</div>
</template>

<script>
import { defineComponent, useRouter, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
    setup() {
        const store = useStore()
        const router = useRouter()
        // if(store.getters.isAuthenticated) router.push({ path: `group/${store.getters.loggedInUser.group}` })
    },
})
</script>
