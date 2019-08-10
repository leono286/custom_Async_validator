import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';

import { AsyncReactiveComponent } from './custom-validators/async/reactive/async-reactive.component';
import { AsyncTemplateDrivenComponent } from './custom-validators/async/template-driven/async-template-driven.component';

import { GithubUsernameValidatorDirective } from './custom-validators/directives/github-username-async-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    AsyncReactiveComponent,
    AsyncTemplateDrivenComponent,
    GithubUsernameValidatorDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
