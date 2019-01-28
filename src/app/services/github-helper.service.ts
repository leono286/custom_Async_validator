import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GithubHelperService {

  githubUsernameCheckUrl = 'https://api.github.com/search/users?q=';

  constructor(private http: HttpClient) { }

  checkGithubUsername(username: string):any {
    let customUrl = this.githubUsernameCheckUrl + username;
    return this.http.get(customUrl);
  }
}
