<template>
<GroupView />
</template>

<script>
import { defineComponent, useStore, useRouter } from '@nuxtjs/composition-api';
import GroupView from '@/views/GroupView'
export default defineComponent({
    components: {GroupView},
    setup(_p, {root}) {
        const store = useStore()
        const router = useRouter()
        // if(store.getters.isAuthenticated) router.push({ path: `group/${store.getters.loggedInUser.group}` })
    },
})
</script>
