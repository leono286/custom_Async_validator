import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cross-field-template-driven',
  templateUrl: './cross-field-template-driven.component.html',
  styleUrls: ['./cross-field-template-driven.component.css']
})
export class CrossFieldTemplateDrivenComponent {

  readonly EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  emailsMatchForm = {
    email: '',
    emailConfirmation: '',
  };

}
