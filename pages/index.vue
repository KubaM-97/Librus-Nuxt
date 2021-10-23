<template>
  <div>
    Strona główna
    {{student}}
    {{student2}}
    <input type="text"  v-model="student.pesel" @change="xxx($event.target.value)">
    <input type="text"  v-model="student.street.name" @change="xxx($event.target.value)">
  </div>
</template>


<script>
import { defineComponent, computed, ref, onUpdated, watch, watchEffect } from '@nuxtjs/composition-api'

export default defineComponent({
  // beforeRouteEnter(to, from, next) {
  //   console.log(3425)
  //   next()
  // },
  // beforeRouteLeave(to, from, next) {
  //   console.log(34234425)
  //   next()
  // },
  setup(props, {root}){
    const student = Object.assign({},root.$accessor.student)
    const student2 = computed(()=>root.$accessor.student)
  function xxx(val, data, subData){
    // root.$accessor('setStudent', val)
  }
    return {
      student, 
      student2, 
      xxx,
    
    }
  }
})
</script>
