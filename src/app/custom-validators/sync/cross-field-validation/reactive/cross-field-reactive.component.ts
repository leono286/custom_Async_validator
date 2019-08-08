import { Component } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { MatchingEmails } from "../../../validators/matching-emails-sync-validator";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: "app-cross-field-reactive",
  templateUrl: "./cross-field-reactive.component.html",
  styleUrls: ["./cross-field-reactive.component.scss"]
})
export class CrossFieldFormReactiveComponent {

  emailsMatchForm: FormGroup;
  formFields: string[];


  constructor(fb: FormBuilder) {

    let commonValidators = [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)
    ];

    let controlsConfig = {
      email: ['', commonValidators],
      emailConfirmation: ['', commonValidators]
    }

    let optionsConfig = {
      validator: MatchingEmails,
    };

    this.emailsMatchForm =
      fb.group(
        controlsConfig,
        optionsConfig
      );

  }

  get nice():boolean {
    return this.emailsMatchForm.controls['email'].pristine && this.emailsMatchForm.controls['emailConfirmation'].pristine;
  }
  get amazed(): boolean {
    return (this.emailsMatchForm.controls['email'].dirty && this.emailsMatchForm.controls['email'].invalid && this.emailsMatchForm.controls['email'].value.length !== 0 &&this.emailsMatchForm.controls['emailConfirmation'].invalid ) || (this.emailsMatchForm.controls['email'].valid && this.emailsMatchForm.controls['emailConfirmation'].pristine) || (this.emailsMatchForm.controls['emailConfirmation'].invalid && this.emailsMatchForm.controls['emailConfirmation'].dirty && this.emailsMatchForm.controls['email'].invalid && this.emailsMatchForm.controls['email'].dirty)
  }
  get sarcastic(): boolean {
    return (this.emailsMatchForm.controls['email'].valid && (!this.emailsMatchForm.controls['emailConfirmation'].pristine && this.emailsMatchForm.controls['emailConfirmation'].invalid)) || this.emailsMatchForm.controls['emailConfirmation'].valid && (this.emailsMatchForm.controls['email'].dirty && this.emailsMatchForm.controls['email'].invalid)
  }

  get frowning(): boolean {
    return this.emailsMatchForm.controls['email'].invalid && this.emailsMatchForm.controls['email'].value.length === 0 && this.emailsMatchForm.controls['email'].dirty && this.emailsMatchForm.controls['emailConfirmation'].invalid && this.emailsMatchForm.controls['emailConfirmation'].value.length === 0 && this.emailsMatchForm.controls['emailConfirmation'].dirty

  }

  get angry(): boolean {
    return this.emailsMatchForm.controls['email'].valid &&
    this.emailsMatchForm.controls['emailConfirmation'].valid &&
    (this.emailsMatchForm.invalid && this.emailsMatchForm.errors.hasOwnProperty('mismatchedEmails'))
  }

  get happy():boolean {
    return this.emailsMatchForm.valid;
  }
}
