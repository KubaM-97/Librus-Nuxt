import { defineComponent } from "@nuxtjs/composition-api";
import { SingleGrade } from '@/store/models/store.models'

export default defineComponent({
  setup(_props, {root}){

    //colors
    function gradeColor(weight: number): string {
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
    function showGradeDetails(e: { target: HTMLDivElement; }, grade: SingleGrade){

      const canvas = document.createElement("CANVAS");
      e.target!.appendChild(canvas);

      const canv = document.querySelector("canvas") as HTMLCanvasElement;
      const ctx = canv.getContext("2d") as CanvasRenderingContext2D ;

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

      if ( !grade.description || grade.description === `${root.$t('no_description')}`) {
        ctx.fillText(`${root.$t('no_description')}:`, 40, 80);
        ctx.font = "italic 700 12px Arial";
        ctx.fillText(`${grade.description}`, 77, 80);
        ctx.font = "700 12px Arial";
      }
      else {
        ctx.fillText(`${root.$t('description')}: ${grade.description} `, 40, 80);
      }

      ctx.fillText(`${root.$t('description')}: ${grade.date}`, 40, 100);


    }

    // hides grade detail info
    function hideGradeDetails(e: { target: HTMLDivElement; }){
      const canvas = e.target.querySelector('canvas')
      canvas?.parentNode?.removeChild(canvas);
    }
      
  //returns grades' average
  function calculateAvgGrade(grades: SingleGrade[]): number | string {

    let gradesSuperValue = 0;
    let weightSum = 0;

    grades.map(grade => {
      if (grade.score && grade.weight){
        gradesSuperValue += grade.score * grade.weight;
        weightSum += grade.weight;
      }
    })

    //round avg to 2 decimal places
    const avgValue = gradesSuperValue / weightSum;

    let roundedAvgValue: number = +(Math.round(avgValue * 100) / 100).toFixed(2);

    return roundedAvgValue;
    
  }
  
  
  // returns current Date in an Array
  function getCurrentDate(): string {

    const today: Date = new Date();
    const currentYear: number = today.getFullYear();

    let currentMonth: number | string = today.getMonth() + 1;
    let currentDay: number | string = today.getDate();
    let currentHours: number | string = today.getHours();
    let currentMinutes: number | string = today.getMinutes();
    let currentSeconds: number | string = today.getSeconds();

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
    showGradeDetails,
    hideGradeDetails,
    calculateAvgGrade,
    getCurrentDate,
    gradeColor
  }
}
})
