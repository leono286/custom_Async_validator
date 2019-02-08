import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, FormControl, ValidationErrors } from '@angular/forms';
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


