import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup(_props, { root }) {

    //colors grade
    function gradeColor(weight) {
      switch (weight) {
        case 1:
          return 'gradeWeightGreen'
        case 2:
          return 'gradeWeightYellow'
        case 3:
          return 'gradeWeightRed'
        default:
          return ''
      }
    }

    // draws grade detail info
    function showGradeDetails(e, grade) {

      if (grade.score && grade.weight) {

        const canvas = document.createElement("CANVAS");
        e.target.appendChild(canvas);

        const canv = document.querySelector("canvas");
        const ctx = canv.getContext("2d");

        canvas.style.zIndex = '2';
        canvas.style.position = 'absolute';
        canvas.style.padding = '0';
        canvas.style.border = '0';

        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.lineTo(25, 15);
        ctx.lineTo(220, 15);
        ctx.lineTo(220, 115);
        ctx.lineTo(25, 115);
        ctx.lineTo(25, 40);
        ctx.lineTo(0, 10);
        ctx.stroke();
        ctx.fillStyle = "#ffeab0";
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.font = "700 12px Arial";

        ctx.fillText(`${root.$t('grade_score')}: ${grade.score}`, 40, 40);
        ctx.fillText(`${root.$t('grade_weight')}: ${grade.weight} `, 40, 60);

        if (grade.description === '' || grade.description.toUpperCase() === `${root.$t('no_description')}`) {
          ctx.fillText(`${root.$t('description')}:`, 40, 80);
          ctx.font = "italic 700 12px Arial";
          ctx.fillText(`${root.$t('no_description')}`, 77, 80);
          ctx.font = "700 12px Arial";
        }
        else {
          ctx.fillText(`${root.$t('description')}: ${grade.description} `, 40, 80);
        }

        ctx.fillText(`${root.$t('description')}: ${grade.date}`, 40, 100);

      }

    }

    // hides grade detail info
    function hideGradeDetails(e) {
      const canvas = e.target.querySelector('canvas')
      canvas?.parentNode?.removeChild(canvas);
    }

    //returns grades' average
    function calculateAvgGrade(grades)  {

      let gradesSuperValue = 0;
      let weightSum = 0;

      grades.map(grade => {
        if (grade.score && grade.weight) {
          gradesSuperValue += grade.score * grade.weight;
          weightSum += grade.weight;
        }
      })

      const avgValue = gradesSuperValue / weightSum;

      const roundedAvgValue = (Math.round(avgValue * 100) / 100).toFixed(2)
      let finalAvgValue = isNaN(+roundedAvgValue) ? '' : roundedAvgValue;

      return finalAvgValue;

    }

    // returns current Date in an Array
    function getCurrentDate() {

      const now = new Date();
      const currentYear = now.getFullYear();

      let currentMonth  = now.getMonth() + 1;
      let currentDay = now.getDate();
      let currentHours  = now.getHours();
      let currentMinutes  = now.getMinutes();
      let currentSeconds  = now.getSeconds();

      if (currentMonth < 10) {
        currentMonth = `0${currentMonth}`;
      }
      if (currentDay < 10) {
        currentDay = `0${currentDay}`;
      }
      if (currentHours < 10) {
        currentHours = `0${currentHours}`;
      }
      if (currentMinutes < 10) {
        currentMinutes = `0${currentMinutes}`;
      }
      if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
      }

      // [DD.MM.YYYY]
      const dateSubArrayDDMMYYYY = [currentDay, currentMonth, currentYear].join(".");

      // [HH:MM:SS]
      const dateSubArrayHHMMSS = [currentHours, currentMinutes, currentSeconds].join(":");

      // [["DD.MM.YYYY"] ["HH:MM:SS"]]
      const dateFull = [];
      dateFull.push(dateSubArrayDDMMYYYY, dateSubArrayHHMMSS)

      // DD.MM.YYYY HH:MM:SS
      const dateFullStr = dateFull.join(" ")

      return dateFullStr;

    }

    return {
      gradeColor,
      showGradeDetails,
      hideGradeDetails,
      calculateAvgGrade,
      getCurrentDate,
    }
  }
})
