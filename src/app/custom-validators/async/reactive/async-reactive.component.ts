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
  existentUser: any = {};
  usernameAvailable: boolean;

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
}
