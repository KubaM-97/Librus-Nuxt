<template>
  <div class="row">
    <div class="addStudentPanelButtons">
    <button
        name="addStudentCancel"
        class="btn btn-danger btn-lg"
        @click="$emit('cancel')"
    >
        {{ $t('cancel') }}
    </button>

    <button
        name="addStudent"
        class="btn btn-primary btn-lg"
        @click="$emit('submit')"
    >
        {{ $t('add_student') }}
    </button>
    </div>
</div>
</template>


<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
    name: 'DialogActions',
})
</script>

<style>

.addStudentPanelButtons {
  width: 90%;
  text-align: right;
  margin-top: 50px;
}
.addStudentPanelButtons button {
  font-size: 14px;
  padding: 8px 12px;
  margin-left: 25px;
}
@media (max-width: 768px) {
    
}
</style>