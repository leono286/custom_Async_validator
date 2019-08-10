import { Component } from '@angular/core';
import { GithubHelperService } from './../../../services/github-helper.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UniqueUsername } from '../../validators/github-username-async-validator';

@Component({
  selector: 'app-async-reactive',
  templateUrl: './async-reactive.component.html',
  styleUrls: ['./async-reactive.component.css']
})
export class AsyncReactiveComponent {

  username: FormControl;
  showRequiredError = false;

  constructor(
    private fb: FormBuilder,
    private usernameValidator: UniqueUsername,
    private githubService: GithubHelperService
  ){
    this.username = fb.control('', [
      Validators.required,
      Validators.minLength(6),
    ],
      [
        (control: FormControl) => this.usernameValidator.validate(control),
      ]);

  }

  checkRequiredError(): void {
    this.showRequiredError = this.username.value.length === 0;
  }

  get warningStateWrongLength(): boolean {
    return !this.username.pristine && this.username.hasError('minlength') && !this.showRequiredError;
  }

  get processingState(): boolean {
    return !this.username.errors && this.username.pending ;
  }

  get usernameTakenState(): boolean {
    return this.username.hasError('UniqueUsername') ;
  }

  get validState(): boolean {
    return this.username.valid ;
  }
}
