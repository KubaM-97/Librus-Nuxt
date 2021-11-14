<template>
</template>

<script>
import { defineComponent, useRouter, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
    setup(_props, { root }) {
        const router = useRouter()
        console.log('INDEX', root.$auth);
            router.push({ path: root.$auth.loggedIn ? `group/${root.$auth.user.group}` : root.$auth.options.redirect.logout })
        onMounted(()=>{
        })
    },
})
</script>
