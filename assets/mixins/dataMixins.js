import { useRoute, useStore } from '@nuxtjs/composition-api'

export default function mainMixin(){

    const route = useRoute();
    const store = useStore();

    //regular expressions
    function validatorData(Data, RegularExpression, Format) {
      
      //gets inserted value
      const insertedData = document.querySelector("#"+Data).value;

      //gets regular expression
      const reg = new RegExp(RegularExpression);
      const span = document.querySelector("#wrong"+Data);

      if((insertedData !== '') && (reg.test(insertedData)==false)){
          span.innerHTML = `${this.$t('enter_correct_format')} :<br /> ${Format}`;
          span.style.marginBottom = "10px";
          this.possibleSave = false;
      }
      else{
           span.innerHTML = ``;
           span.style.marginBottom = "0";
           this.possibleSave = true;
      }

      //prevents unlocking disabling button
      const allSpansContainingErrorTooltips = document.querySelectorAll("span[class^='wrongAdditionalInfo']")

       for(let i=0; i<allSpansContainingErrorTooltips.length; i++){

         if(allSpansContainingErrorTooltips[i].innerHTML !== ""){
           this.possibleSave = false;
           break;
        }
         else{
           this.possibleSave = true;
        }

      }

    }

    //saves changes
    function saveChanges(ourStudent, showGreenCheckMark, hideCheckMarkWithLayer){

      const fromParams = route.params;
      const fromState = store.state.students[fromParams.id-1];
      
      for(const category in ourStudent){

        if(fromParams[category]!=ourStudent[category]){

          fromParams[category] = ourStudent[category];
          fromState[category] = ourStudent[category];

          if(showGreenCheckMark){
            
            switch(ourStudent[category]){
              case ourStudent.streetName:
              case ourStudent.streetNr:
              case ourStudent.streetFlat:
              case ourStudent.streetPostcode:
              case ourStudent.streetCity:
                showGreenCheckMark.street = true;
                setTimeout(()=>{hideCheckMarkWithLayer.street = false},1);
                break;
              
              case ourStudent.motherFirstName:
              case ourStudent.motherLastName:
              case ourStudent.motherPhone:
              case ourStudent.motherEmail:
                showGreenCheckMark.mother = true;
                setTimeout(()=>{hideCheckMarkWithLayer.mother = false},1);
                break;
              
              case ourStudent.fatherFirstName:
              case ourStudent.fatherLastName:
              case ourStudent.fatherPhone:
              case ourStudent.fatherEmail:
                showGreenCheckMark.father = true;
                setTimeout(()=>{hideCheckMarkWithLayer.father = false},1);
                break;
              
              default: 
              showGreenCheckMark[category] = true
              setTimeout(()=>{hideCheckMarkWithLayer[category] = false},1);
              break;
              
            }
            
          }
        }
        }
        
      this.gradesLength = 0;
      this.possibleSave = false;
      
    }

    return{
      validatorData,
      saveChanges
    }

}