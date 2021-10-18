<template>
    <div class="legendTable">
      <div class="legendTitle">{{ $t('legend') }}:</div>

      <div class="legendGrades d-block d-md-flex justify-content-center align-items-center mt-3">
        <div class="legendGrade px-3">
          <div class="gradeWeightColorLegend gradeWeightGreen"></div>
          - {{ $t('grade_with_weight') }} 1
        </div>

        <div class="legendGrade px-3">
          <div class="gradeWeightColorLegend gradeWeightYellow"></div>
          - {{ $t('grade_with_weight') }} 2
        </div>

        <div class="legendGrade px-3">
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

.legendTable {

  .legendTitle {
    font-size: 13.5px;
  }
  
  .legendGrades {
    font-size: 12px;

    .gradeWeightColorLegend{
      padding: 6px 13px
    }
  }

}

</style>