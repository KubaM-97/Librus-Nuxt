<template>
  <div>
    Strona główna
  </div>
</template>

<script>
import { defineComponent, useMeta, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  // You need to define an empty head to activate this functionality
  head(context) {
    console.log(context);
    console.log(this, this.rrr, this.ttt);
    // console.log(rrr, ttt);
    return{

      title: 'My page2',
      // titleTemplate: 'xxx'
    }
  },
  setup() {
    // This will allow you to set the title in head - but won't allow you to read its state outside of this component.
    const { title } = useMeta()
    const rrr = ref('rrr');
    const ttt = 'ttt';
    // title.value = 'My page'

  },
})
</script>
