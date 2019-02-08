import { FormControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export const MatchYesOrNo: ValidatorFn =
   (control: FormControl): ValidationErrors | null => {
      if (control.value) {
        let currentAnswer = control.value.toLowerCase();
        if (currentAnswer == "yes" ||currentAnswer == "no") {
          return null;
        } else {
          return {'wrongAnswer':"Answer must be Yes or No"}
        }
      }
    }
