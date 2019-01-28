import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ElementRef
} from "@angular/core";
import { AttendantInformation } from './models/attendant-information.model';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { matchingEmails } from "./validators/validators";

const PHONE_REGEX = /^\+?([0-9]{7,})$/;
const IDNUMBER_REGEX = /^[a-z0-9]+$/i;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: "app-cross-field-form",
  templateUrl: "./cross-field-form.component.html",
  styleUrls: ["./cross-field-form.component.scss"]
})
export class CrossFieldFormComponent implements OnInit {

  attendantInformationForm: FormGroup;
  loading = false;
  attendantInformation: AttendantInformation = new AttendantInformation(
    "",
    "",
    "",
    "",
    ""
  );
  formFields:string[];


  constructor() {}

  ngOnInit(): void {

    this.attendantInformationForm = new FormGroup(
      {
        fullName: new FormControl(this.attendantInformation.customerName, [
          Validators.required
        ]),
        email: new FormControl(this.attendantInformation.email, [
          Validators.required,
          Validators.pattern(EMAIL_REGEX)
        ]),
        emailConfirmation: new FormControl(
          this.attendantInformation.confirmationEmail, [
            Validators.required,
            Validators.pattern(EMAIL_REGEX)
          ]),
        idNumber: new FormControl(this.attendantInformation.customerId, [
          Validators.required,
          Validators.pattern(IDNUMBER_REGEX)
        ]),
        phone: new FormControl(this.attendantInformation.customerPhoneNumber, [
          Validators.required,
          Validators.pattern(PHONE_REGEX)
        ])
      },
      matchingEmails()
    );

    this.formFields = Object.keys(this.attendantInformationForm.controls);
  }

  printFormObject() {
    console.log(this.attendantInformationForm);
  }

  onSubmit() {
    if (this.attendantInformationForm) {
      this.loading = true;
      // this.ticketCheckoutService
      //   .saveCheckout(this.attendantInformation)
      //   .subscribe(
      //     response => {
      //       this.checkoutInformation = response;
      //       this.loading = false;
      //     },
      //     error => {
      //       this.loading = false;
      //       let message = "Technical Error, please try again";
      //       let body;
      //       try {
      //         body = JSON.parse(error._body);
      //       } catch (something) {}
      //       if (body && body.message) {
      //         message = body.message;
      //       }

      //       this.snackbar.open(message, "Close", {
      //         duration: 5000
      //       });
      //     },
      //     () => {
      //       this.loading = false;
      //     }
      //   );
    }
  }
}
