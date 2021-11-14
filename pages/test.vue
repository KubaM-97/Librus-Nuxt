<template>
  <div>
    <ClosePrompt ref="ClosePrompt"/>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AddStudenta',
  setup(_p, {root}){
    console.log('ssss', root)
  }
});
</script>
