import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-async-template-driven',
  templateUrl: './async-template-driven.component.html',
  styleUrls: ['./async-template-driven.component.css']
})
export class AsyncTemplateDrivenComponent {

  username = '';
  showRequiredError = false;

  constructor() { }

  checkRequiredError(): void {
    this.showRequiredError = this.username.length === 0;
  }

}
