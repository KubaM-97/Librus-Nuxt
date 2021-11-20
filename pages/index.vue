<template>
</template>

<script>
import { defineComponent, useStore, useRouter } from '@nuxtjs/composition-api';
export default defineComponent({
    setup(_p, {root}) {
        const store = useStore()
        const router = useRouter()
        if(store.getters.isAuthenticated) router.push({ path: `group/${root.$auth.user.group}` })
    },
})
</script>
