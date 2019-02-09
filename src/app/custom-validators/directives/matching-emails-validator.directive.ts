import { Directive } from '@angular/core';
import { MatchingEmails } from "../validators/matching-emails-sync-validator";
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appMatchingEmailsValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchingEmailsValidatorDirective, multi: true }]
})
export class MatchingEmailsValidatorDirective implements Validator {

  validate = MatchingEmails;

}
