import { Directive } from '@angular/core';
import { AsyncValidator, FormControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { UniqueUsername } from '../validators/github-username-async-validator';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appGithubUsernameValidator]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: GithubUsernameValidatorDirective, multi: true }]
})
export class GithubUsernameValidatorDirective implements AsyncValidator {

  constructor( private usernameValidator: UniqueUsername ) { }

  validate = (control:FormControl):Observable<ValidationErrors | null> => this.usernameValidator.validate(control);

}


