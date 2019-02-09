/* Custom email and emialConfirm validator. */

import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';

export const MatchingEmails: ValidatorFn =

  (group: FormGroup): ValidationErrors | null => {

    if (group.controls['email'] && group.controls['emailConfirmation']) {
      let emailControl = group.controls['email'];
      let confirmEmailControl = group.controls['emailConfirmation'];

      if (emailControl.value !== confirmEmailControl.value) {
        return { 'mismatchedEmails': true };
      } else {
        return null
      }
    }
  }

