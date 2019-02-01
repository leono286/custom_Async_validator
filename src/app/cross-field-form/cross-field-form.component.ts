import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ElementRef
} from "@angular/core";
// import { AttendantInformation } from './models/attendant-information.model';
import { FormControl, Validators, FormGroup, FormBuilder } from "@angular/forms";
import { matchingEmails } from "./validators/validators";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: "app-cross-field-form",
  templateUrl: "./cross-field-form.component.html",
  styleUrls: ["./cross-field-form.component.scss"]
})
export class CrossFieldFormComponent implements OnInit {

  attendantInformationForm: FormGroup;
  formFields:string[];


  constructor( private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.attendantInformationForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
        emailConfirmation: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]]
      },
      {
        validator: matchingEmails(),
      }
    );

  }

}
