import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { matchYesOrNo } from '../validators/custom-sync-validator';

@Component({
  selector: 'app-custom-sync-validator',
  templateUrl: './custom-sync-validator.component.html',
  styleUrls: ['./custom-sync-validator.component.css']
})
export class CustomSyncValidatorComponent {

  yesNoInput: FormControl;

  constructor(private fb: FormBuilder) {
    this.yesNoInput = fb.control('', [
        Validators.required,
        Validators.minLength(2),
        matchYesOrNo()
      ], );
  }

}
