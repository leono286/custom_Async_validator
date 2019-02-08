
import { Directive } from '@angular/core';
import { MatchYesOrNo } from "../validators/yes-no-sync-validator";
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appYesNoSyncValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: YesNoSyncValidatorDirective, multi: true }]
})
export class YesNoSyncValidatorDirective
implements Validator {

  validate = MatchYesOrNo;

}



