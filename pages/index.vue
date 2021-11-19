<template>
<div>INDEX
    <GroupView />
</div>
</template>

<script>
import { defineComponent, useRouter, useStore } from '@nuxtjs/composition-api'
import GroupView from "@/views/GroupView.vue";

export default defineComponent({
    components:{
        GroupView,
    },
    setup() {
        const store = useStore()
        const router = useRouter()
        // if(store.getters.isAuthenticated) router.push({ path: `group/${store.getters.loggedInUser.group}` })
    },
})
</script>
