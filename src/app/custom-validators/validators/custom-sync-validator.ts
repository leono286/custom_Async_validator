import { AbstractControl, ValidatorFn } from "@angular/forms";

export function matchYesOrNo():ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let currentAnswer = control.value.toLowerCase();
    if (currentAnswer == 'yes' || currentAnswer == 'no') {
      return null
    } else {
      return {'wrongAnswer': {value: control.value, message: 'Answer must be Yes or No'}};
    }
  }
}
