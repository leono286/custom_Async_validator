import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { matchYesOrNo } from '../../validators/yes-no-sync-validator';

@Component({
  selector: 'app-sync-reactive',
  templateUrl: './sync-reactive.component.html',
  styleUrls: ['./sync-reactive.component.css']
})
export class SyncReactiveComponent {

  yesNoInput: FormControl;

  constructor(private fb: FormBuilder) {
    this.yesNoInput = fb.control('', [
        Validators.required,
        Validators.minLength(2),
        matchYesOrNo()
      ], );
  }
}
