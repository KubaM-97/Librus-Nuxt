<template>
  
</template>

<script>
import { defineComponent, useRouter } from '@nuxtjs/composition-api'
export default defineComponent({
    props: {
        property: {
            type: String,
            required: true,
        }
    },
    setup(props){
        const router = useRouter();
        props.property ? router.push({ path: `edit${props.property}`, append: true }) : router.go(-1) 
    }
})
</script>

<style>

</style>