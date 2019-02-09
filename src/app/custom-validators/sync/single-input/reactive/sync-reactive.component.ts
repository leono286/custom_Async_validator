import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatchYesOrNo } from '../../../validators/yes-no-sync-validator';

@Component({
  selector: 'app-sync-reactive',
  templateUrl: './sync-reactive.component.html',
  styleUrls: ['./sync-reactive.component.css']
})
export class SyncReactiveComponent {

  yesNoInput: FormControl;

  constructor(fb: FormBuilder) {

    let validators = [
      Validators.required,
      Validators.minLength(2),
      MatchYesOrNo
    ];

    this.yesNoInput =
      fb.control('', validators,);
  }


  get nice():boolean {
    return this.yesNoInput.pristine;
  }
  get amazed():boolean {
    return this.yesNoInput.errors && this.yesNoInput.errors.hasOwnProperty('minlength');
  }
  get sarcastic():boolean {
    return this.yesNoInput.errors && this.yesNoInput.value.length < 3 && !this.yesNoInput.errors.hasOwnProperty('minlength') && this.yesNoInput.errors.hasOwnProperty('wrongAnswer');
  }
  get angry():boolean {
    return this.yesNoInput.errors && this.yesNoInput.value.length >= 3 && this.yesNoInput.errors.hasOwnProperty('wrongAnswer');
  }
  get frowning():boolean {
    return this.yesNoInput.errors && this.yesNoInput.dirty && this.yesNoInput.errors.hasOwnProperty('required');
  }
  get happy():boolean {
    return this.yesNoInput.valid;
  }
}
