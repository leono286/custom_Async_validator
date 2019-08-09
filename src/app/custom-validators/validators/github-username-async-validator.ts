import { Injectable } from "@angular/core";
import { ValidationErrors, AsyncValidator, FormControl } from "@angular/forms";
import { Observable, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { GithubHelperService } from "../../services/github-helper.service";

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {

  constructor(private githubService: GithubHelperService) {}

  validate( inputControl: FormControl ): Observable<ValidationErrors | null> {

    return timer(500).pipe(
      switchMap(() => {
        const currentUsername = inputControl.value;
        return this.githubService
          .getGithubInfoByUsername(currentUsername)
          .pipe(
            map((data: any) => {
              const usernameTaken = data.items.filter(
                (item) => item.login === currentUsername
              ).length !== 0;
              return usernameTaken ? { UniqueUsername: true, Message: 'Username already taken' } : null
            }),
        );
      }),
    );
  }
}
