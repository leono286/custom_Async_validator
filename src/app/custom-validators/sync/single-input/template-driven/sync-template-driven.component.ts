import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sync-template-driven',
  templateUrl: './sync-template-driven.component.html',
  styleUrls: ['./sync-template-driven.component.css']
})
export class SyncTemplateDrivenComponent {

  yesNoInput: string;

  constructor() { }


  nice(control: FormControl):boolean {
    return control && control.pristine;
  }

  amazed(control: FormControl):boolean {
    return control && control.errors && control.errors.hasOwnProperty('minlength');
  }

  sarcastic(control: FormControl):boolean {
    return control && control.errors && control.value && control.value.length < 3 && !control.errors.hasOwnProperty('minlength') && control.errors.hasOwnProperty('wrongAnswer');
  }

  angry(control: FormControl):boolean {
    return control && control.errors && control.value && control.value.length >= 3 && control.errors.hasOwnProperty('wrongAnswer');
  }

  frowning(control: FormControl):boolean {
    return control && control.errors && control.dirty && control.errors.hasOwnProperty('required');
  }

  happy(control: FormControl):boolean {
    return control && control.valid;
  }
}



