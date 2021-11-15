<template>
</template>

<script>
import { defineComponent, useRouter, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
    setup() {
        const store = useStore()
        const router = useRouter()
        router.push({ path: store.getters.isAuthenticated ? `group/${store.getters.loggedInUser.group}` : store.getters.loggedOutPath })
    },
})
</script>
