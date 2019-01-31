import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { SyncReactiveComponent } from './custom-validators/sync/reactive/sync-reactive.component';
import { SyncTemplateDrivenComponent } from './custom-validators/sync/template-driven/sync-template-driven.component';
import { AsyncReactiveComponent } from './custom-validators/async/reactive/async-reactive.component';
import { AsyncTemplateDrivenComponent } from './custom-validators/async/template-driven/async-template-driven.component';
import { CrossFieldFormComponent } from './cross-field-form/cross-field-form.component';

import { YesNoSyncValidatorDirective } from './custom-validators/directives/yes-no-sync-validator.directive';
import { GithubUsernameValidatorDirective } from './custom-validators/directives/github-username-async-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    SyncReactiveComponent,
    SyncTemplateDrivenComponent,
    AsyncTemplateDrivenComponent,
    AsyncReactiveComponent,
    CrossFieldFormComponent,
    YesNoSyncValidatorDirective,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
