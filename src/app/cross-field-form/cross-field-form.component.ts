import { Component } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { MatchingEmails } from "./validators/validators";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: "app-cross-field-form",
  templateUrl: "./cross-field-form.component.html",
  styleUrls: ["./cross-field-form.component.scss"]
})
export class CrossFieldFormComponent {

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
}