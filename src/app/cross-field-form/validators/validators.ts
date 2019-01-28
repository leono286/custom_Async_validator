/* Custom email and emialConfirm validator. */

import { FormGroup, ValidatorFn } from '@angular/forms';

// FORM GROUP VALIDATORS
export function matchingEmails(): ValidatorFn  {

  return (group: FormGroup): { [key: string]: any } => {

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
