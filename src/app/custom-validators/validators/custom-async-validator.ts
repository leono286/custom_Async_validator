import { Injectable } from "@angular/core";
import { ValidationErrors, AsyncValidator, FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { GithubHelperService } from "../../services/github-helper.service";

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {

  constructor(private githubService: GithubHelperService) {}

  validate(
    inputControl: FormControl
  ): Observable<ValidationErrors | null> {

    let currentUsername: string = inputControl.value;

    return this.githubService.checkGithubUsername(currentUsername).pipe(
      map((data: any) => {
        let usernameTaken = data.items.filter((item) => item.login === currentUsername).length !== 0;
        return usernameTaken ? { UniqueUsername: true, Message: 'Username already taken' } : null
      }),
    );
  }
}
