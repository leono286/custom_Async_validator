import { Directive } from '@angular/core';
import { matchYesOrNo } from "../validators/yes-no-sync-validator";
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[appYesNoSyncValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: YesNoSyncValidatorDirective, multi: true }]
})
export class YesNoSyncValidatorDirective implements Validator {

  validate = matchYesOrNo();

}
