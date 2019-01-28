import { GithubHelperService } from './../../services/github-helper.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UniqueUsername } from '../validators/custom-async-validator';


@Component({
  selector: 'app-custom-async-validator',
  templateUrl: './custom-async-validator.component.html',
  styleUrls: ['./custom-async-validator.component.css']
})
export class CustomAsyncValidatorComponent {

  username: FormControl;
  existentUser: any = {};
  usernameAvailable: boolean;

  constructor(private fb: FormBuilder, private usernameValidator: UniqueUsername) {
    this.username = fb.control('', [
        Validators.required,
        Validators.minLength(6),
      ],
      [
        this.usernameValidator.validate.bind(this.usernameValidator),
      ]);
  }

}



