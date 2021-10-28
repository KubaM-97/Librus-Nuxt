<template>
    <GroupView />
</template>

<script>
import GroupView from '@/views/GroupView.vue';
import { defineComponent, useMeta, useRoute } from '@nuxtjs/composition-api'
export default defineComponent({
    name: 'Group',
    components:{
        GroupView
    },
    setup() {
        const route = useRoute();
        const { title } = useMeta()
        
      title.value = this.$t('group_page_title', { class: route.params.group || '3B'})
  }
});
</script>