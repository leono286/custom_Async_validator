import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { SyncReactiveComponent } from './custom-validators/sync/single-input/reactive/sync-reactive.component';
import { SyncTemplateDrivenComponent } from './custom-validators/sync/single-input/template-driven/sync-template-driven.component';
import { AsyncReactiveComponent } from './custom-validators/async/reactive/async-reactive.component';
import { AsyncTemplateDrivenComponent } from './custom-validators/async/template-driven/async-template-driven.component';
import { CrossFieldFormReactiveComponent } from './custom-validators/sync/cross-field-validation/reactive/cross-field-reactive.component';
import { CrossFieldTemplateDrivenComponent } from './custom-validators/sync/cross-field-validation/template-driven/cross-field-template-driven.component';

import { YesNoSyncValidatorDirective } from './custom-validators/directives/yes-no-sync-validator.directive';
import { GithubUsernameValidatorDirective } from './custom-validators/directives/github-username-async-validator.directive';
import { MatchingEmailsValidatorDirective } from './custom-validators/directives/matching-emails-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    SyncReactiveComponent,
    SyncTemplateDrivenComponent,
    AsyncReactiveComponent,
    AsyncTemplateDrivenComponent,
    CrossFieldFormReactiveComponent,
    CrossFieldTemplateDrivenComponent,
    YesNoSyncValidatorDirective,
    GithubUsernameValidatorDirective,
    MatchingEmailsValidatorDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
