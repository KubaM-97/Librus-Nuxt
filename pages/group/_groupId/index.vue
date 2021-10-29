<template>
    <GroupView />
</template>

<script>
import GroupView from '@/views/GroupView.vue';
import { defineComponent, } from '@nuxtjs/composition-api'
export default defineComponent({
    name: 'Group',
    components:{
        GroupView
    },
});
</script>