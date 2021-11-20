<template>
</template>

<script>
import { defineComponent, useRouter } from '@nuxtjs/composition-api';
export default defineComponent({
    setup(_p, {root}) {
        const router = useRouter()
        if(root.$auth.loggedIn) router.push({ path: `group/${root.$auth.user.group}` })
    },
})
</script>
