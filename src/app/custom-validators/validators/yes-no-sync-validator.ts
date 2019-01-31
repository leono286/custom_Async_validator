import { FormControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function matchYesOrNo(): ValidatorFn {

  return (control: FormControl):  ValidationErrors | null => {
    if (control.value) {
      let currentAnswer = control.value.toLowerCase();
      if (currentAnswer == "yes" || currentAnswer == "no") {
        return null;
      } else {
        return {
          wrongAnswer: {
            value: control.value,
            message: "Answer must be Yes or No"
          }
        };
      }
    }
  }

}
