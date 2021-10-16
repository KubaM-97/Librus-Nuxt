<template>
    <div class="studentsListLegend">
      <div class="studentsListLegend__title">{{ $t('legend') }}:</div>

      <div class="studentsListLegend__content">
        <div class="studentsListLegend__content__grade">
          <div class="gradeWeightColorLegend gradeWeightGreen"></div>
          - {{ $t('grade_with_weight') }} 1
        </div>

        <div class="studentsListLegend__content__grade">
          <div class="gradeWeightColorLegend gradeWeightYellow"></div>
          - {{ $t('grade_with_weight') }} 2
        </div>

        <div class="studentsListLegend__content__grade">
          <div class="gradeWeightColorLegend gradeWeightRed"></div>
          - {{ $t('grade_with_weight') }} 3
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TableHeader'
}
</script>


<style lang="scss">


.studentsListLegend{
  &__title {
    font-size: 13.5px;
    margin: 20px 0; 
  }
  &__content {
    &__grade {
      display: inline-block;
      margin-left: 10px;
      margin-right: 40px;
      font-size: 12px;
    }
  }
}


// .tableColorsLegend .tableColorsLegendContent .tableColorsLegendSingleContent * {
//   vertical-align: middle;
// }

@media (max-width: 768px) {
  .studentsListLegend{
  &__title {
    font-size: 10px; 
  }
  &__content {
    font-size: 9px;
    margin: auto;
    display: block;
    &__grade {
      display: inline-block;
      margin-left: 10px;
      margin-right: 40px;
      font-size: 12px;
    }
  }
}

  .tableColorsLegend
    .tableColorsLegendContent
    .tableColorsLegendSingleContent
    .gradeWeightColorLegend {
    padding: 5px 12px;
    margin: 2px 3px;
  }
}
</style>