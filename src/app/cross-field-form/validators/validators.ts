/* Custom email and emialConfirm validator. */

import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';

export function matchingEmails(): ValidatorFn  {

  return (group: FormGroup): ValidationErrors | null => {


    let emailControl = group.controls['email'];
    let confirmEmailControl = group.controls['emailConfirmation'];

    if (emailControl.value !== confirmEmailControl.value) {
      if (confirmEmailControl.errors == null) {
        confirmEmailControl.setErrors({ 'mismatchedEmails': true })
      }
      return { 'mismatchedEmails': true };
    } else {
      return null
    }

  }

}
