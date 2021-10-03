<template>
    <div class="tableColorsLegend">
      <div class="tableColorsLegendTitle">{{ $t('legend') }}:</div>

      <div class="tableColorsLegendContent">
        <div class="tableColorsLegendSingleContent">
          <div class="gradeWeightColorLegend gradeWeightGreen"></div>
          - {{ $t('grade_with_weight') }} 1
        </div>

        <div class="tableColorsLegendSingleContent">
          <div class="gradeWeightColorLegend gradeWeightYellow"></div>
          - {{ $t('grade_with_weight') }} 2
        </div>

        <div class="tableColorsLegendSingleContent">
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

<style>
.tableColorsLegend .tableColorsLegendTitle {
  font-size: 13.5px;
  margin: 20px 0;
}

.tableColorsLegend .tableColorsLegendContent .tableColorsLegendSingleContent {
  display: inline-block;
  margin-left: 10px;
  margin-right: 40px;
  font-size: 12px;
}

.tableColorsLegend .tableColorsLegendContent .tableColorsLegendSingleContent * {
  vertical-align: middle;
}

@media (max-width: 768px) {
  .tableColorsLegend .tableColorsLegendTitle {
    font-size: 10px;
  }
  .tableColorsLegend .tableColorsLegendContent .tableColorsLegendSingleContent {
    font-size: 9px;
    margin: auto;
    display: block;
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