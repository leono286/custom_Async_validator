import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatchYesOrNo } from '../../validators/yes-no-sync-validator';

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
}
