import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrossFieldFormComponent } from './cross-field-form/cross-field-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { CustomAsyncValidatorComponent } from './custom-validators/custom-async-validator/custom-async-validator.component';
import { CustomSyncValidatorComponent } from './custom-validators/custom-sync-validator/custom-sync-validator.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CrossFieldFormComponent,
    CustomAsyncValidatorComponent,
    CustomSyncValidatorComponent
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
