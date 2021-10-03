// import { computed, useStore } from "@nuxtjs/composition-api";

export default function gradesMixins(){
  
    // const store = useStore();
    // console.log(3453)
    // const students = computed(() => store.state.students);
    // const marks = computed(() => store.state.newGrades.marks);
    // const weights = computed(() => store.state.newGrades.weights);
    // const descriptions = computed(() => store.state.newGrades.descriptions);
    // const dates = computed(() => store.state.newGrades.dates);


    //colors grades
    function gradeWeightColor(oneStudentMarks, oneStudentsWeights) {
      
      // //adds new classes to divs with grades, what causes coloring them on green, yellow or red
      // let content = "";
      // console.log(345456223)
      // for (let i = 0; i < oneStudentMarks.length; i++) {
      //   console.log(345999223)
      //   if (oneStudentMarks[i] !== "") {
      //     if (oneStudentsWeights[i] === 1) {
      //       content += `<div class="gradeWeightColor gradeWeightGreen">${oneStudentMarks[i]}</div>`
      //     } else if (oneStudentsWeights[i] === 2) {
      //       content += `<div class="gradeWeightColor gradeWeightYellow">${oneStudentMarks[i]}</div>`
      //     } else if (oneStudentsWeights[i] === 3) {
      //       content += `<div class="gradeWeightColor gradeWeightRed">${oneStudentMarks[i]}</div>`
      //     }
      //     else if (oneStudentsWeights[i] === "") {
      //       content += `<div class="gradeWeightColor">${oneStudentMarks[i]}</div>`
      //     }
      //   }
      //   else if (oneStudentMarks[i] === "") {
      //     if (oneStudentsWeights[i] === 1) {
      //       content += `<div class="gradeWeightColor gradeWeightGreen" style="width: 30px; height: 36px;"> </div>`
      //     }
      //     else if (oneStudentsWeights[i] === 2) {
      //       content += `<div class="gradeWeightColor gradeWeightYellow" style="width: 30px; height: 36px"> </div>`
      //     }
      //     else if (oneStudentsWeights[i] === 3) {
      //       content += `<div class="gradeWeightColor gradeWeightRed" style="width: 30px; height: 36px;"> </div>`
      //     }
      //   }
      // }

      // return content

    }

    //show tooltip after hovering on every grade
    function showTooltip(RootElement, SingleStudent) {
      
      // const gradesInDiv = RootElement.querySelectorAll(".gradeWeightColor");


      // const SingleStudentMarks = SingleStudent.marks
      // const SingleStudentWeights = SingleStudent.weights
      // const SingleStudentDescriptions = SingleStudent.descriptions
      // const SingleStudentDates = SingleStudent.dates

      // for (let i = 0; i < SingleStudentMarks.length; i++) {
        
      //   if (SingleStudentDescriptions[i] === "") {
      //     SingleStudentDescriptions[i] = "BRAK OPISU"
      //   }

      //   for(const gradeProperty in store.state.newGrades){
      //     SingleStudent[gradeProperty].map((el)=>{ SingleStudent.marks[el] !== "" && SingleStudent.weights[el] !== "" })
      //   }
        
        
      // }
      

      // for (let i = 0; i < gradesInDiv.length; i++) {

      //   if ((SingleStudentMarks[i] !== undefined) || (SingleStudentWeights[i] !== undefined)) {

      //     //draws tooltip after hovering
      //     gradesInDiv[i].addEventListener("mouseenter", function () {
      //       canvas(SingleStudentMarks[i], SingleStudentWeights[i], SingleStudentDescriptions[i], SingleStudentDates[i], gradesInDiv[i])
      //     }.bind(this), false);


      //     //destroyes tooltip after leaving
      //     gradesInDiv[i].addEventListener("mouseleave", function () {
      //       const canv = RootElement.querySelector("canvas");
      //       canv.parentNode.removeChild(canv);
      //     });
      //   }

      // }
    }

    //draws tooltip
    function canvas(SingleGrade, SingleWeight, SingleDescription, SingleDate, anotherDivWithGrade) {

      const canvas = document.createElement("CANVAS");
      anotherDivWithGrade.appendChild(canvas);

      const canv = document.querySelector("canvas");
      const ctx = canv.getContext("2d");

      canvas.style['z-index'] = 2;
      canvas.style.position = 'absolute';
      canvas.style.padding = 0;
      canvas.style.border = 0;

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

      ctx.fillText(`Ocena: ${SingleGrade}`, 40, 40);
      ctx.fillText(`Waga: ${SingleWeight} `, 40, 60);

      if (SingleDescription == this.$t('no_description')) {
        ctx.fillText(`${this.description}:`, 40, 80);
        ctx.font = "italic 700 12px Arial";
        ctx.fillText(`${SingleDescription}`, 77, 80);
        ctx.font = "700 12px Arial";
      }
      else {
        ctx.fillText(`${this.description}: ${SingleDescription} `, 40, 80);
      }

      ctx.fillText(`${this.date}: ${SingleDate}`, 40, 100);

    }

    //returns grades' average
    function avg(oneStudentMarksArray, oneStudentWeightsArray) {

      // let MarksSuperValue = 0;
      // let weightSum = 0;

      // for (let i = 0; i < oneStudentMarksArray.length; i++) {
      //   if ((oneStudentMarksArray[i] !== "") && (oneStudentWeightsArray[i] !== "")) {
      //     MarksSuperValue += oneStudentMarksArray[i] * oneStudentWeightsArray[i];
      //     weightSum += oneStudentWeightsArray[i]
      //   }
      // }

      // //round avg to 2 decimal places
      // const average = MarksSuperValue / weightSum;
      // let averageRounded = (Math.round(average * 100) / 100).toFixed(2);
      // if (isNaN(averageRounded)) {
      //   averageRounded = ""
      // }

      // return averageRounded;

    }

    //decides if student is threated
    function threatness(myAVG) {
      // if ((myAVG < 2) && (myAVG != "")) {
      //   return "<span class='fire'>this.$t('at_risk').toUpperCase()</span>"
      // } else {
      //   return ""
      // }
    }

    //returns current Date in an Array
    function whatsTheDatePlease() {
      // const today = new Date();
      // const currentYear = today.getFullYear();
      // let currentMonth = today.getMonth() + 1;
      // let currentDay = today.getDate();
      // let currentHours = today.getHours();
      // let currentMinutes = today.getMinutes();
      // let currentSeconds = today.getSeconds();
      // if (currentMonth < 10) {
      //   currentMonth = `0${currentMonth}`;
      // }
      // if (currentDay < 10) {
      //   currentDay = `0${currentDay}`;
      // }
      // if (currentHours < 10) {
      //   currentHours = `0${currentHours}`;
      // }
      // if (currentMinutes < 10) {
      //   currentMinutes = `0${currentMinutes}`;
      // }
      // if (currentSeconds < 10) {
      //   currentSeconds = `0${currentSeconds}`;
      // }

      // // [DD.MM.YYYY]
      // const dateSubArrayDDMMYYYY = [currentDay, currentMonth, currentYear].join(".");

      // // [HH:MM:SS]
      // const dateSubArrayHHMMSS = [currentHours, currentMinutes, currentSeconds].join(":");

      // // [["DD.MM.YYYY"] ["HH:MM:SS"]]
      // const dateFull = [];
      // dateFull.push(dateSubArrayDDMMYYYY, dateSubArrayHHMMSS)

      // // DD.MM.YYYY HH:MM:SS
      // const dateFullStr = dateFull.join(" ")

      // // [DD.MM.YYYY HH:MM:SS]
      // const dateFullArray = [];
      // dateFullArray.push(dateFullStr);

      // return dateFullStr;

    }
   
    // return {
    //   students,
    //   marks,
    //   weights,
    //   descriptions,
    //   dates,
    //   gradeWeightColor,
    //   showTooltip,
    //   canvas,
    //   avg,
    //   threatness,
    //   whatsTheDatePlease           
    // }
  
}