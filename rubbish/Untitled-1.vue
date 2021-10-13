<template>
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
            <label class="form__label">Name</label>
            <input class="form__input" v-model.trim="$v.name.$model"/>
        </div>

        <div class="error" v-if="!$v.name.required">Field is required</div>
        <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>

        <tree-view :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></tree-view>

        <tree-view :data="$v.age" :options="{rootObjectKey: '$v.age', maxDepth: 2}"></tree-view>
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  
        <div class="form-group">
            <label for="Phone" class="form__label">Telefon:</label>
            <input name="#"  class="form__input" type="text" v-model.trim.lazy="$v.age.$model" autocomplete="off" placeholder="Telefon" />

            <!-- //maska mask jak w vuetify -->
            <div class="error" v-if="!$v.name.required">Field is required</div>

        </div>
            <input name="#"  class="form__input" type="text" v-model.trim.lazy="add.phone" id="Phone" autocomplete="off" placeholder="Telefon"
            @blur="validatorData('Phone', '^([0-9]{7}|[0-9]{9})$', 'Dokładnie 7 lub 9 cyfr.')" />
            <span class="wrongAdditionalInfo" id="wrongPhone"></span>

</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {

  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  },
}
</script>
\