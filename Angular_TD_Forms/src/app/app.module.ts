import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSettingFormComponent } from './components/user-setting-form/user-setting-form.component';
import { FormComponent } from './components/form/form.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { RatingModule } from 'ngx-bootstrap/rating';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingFormComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TimepickerModule.forRoot(),
    RatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




//              Validating input in template-driven forms:

//1-add => ngNativeValidate attribute to form to enable HTML5 validation attributes
//2- using css classes:
//= ng-untoutched => will be on the input after component reloading
// & if focus on input then blur it will removed & become => ng-toutched
//= ng-pristine => the value of input start as pristine meaning not modified
// & if we modify the value it will removed & become dirty => ng-dirty
//= ng-valid => will be if using attributes as we type valid data 
// & if we type invalid data it will removed & become invalid => ng-invalid
//


//                     css classes
//      for focus & blur [ng-untoutched & ng-toutched]
//      for modification [ng-pristine & ng-dirty]
//      for valid data   [ng-valid & ng-invalid]


//                Get ngModel properties for validation

//1- we add atemplate  refrence variable using # to input
// & assign ngModel to it => #propertyTest="ngModel" 
//2- we can access properties    
//      {{propertyTest.valid }}
//      {{propertyTest.invalid}}
//      {{propertyTest.touched}}
//      {{propertyTest.untouched}}
//      {{propertyTest.pristine}}
//      {{propertyTest.dirty }}
//


// submit validation 
// remove => ngNativeValidate attribute from form
// add  (ngSubmit)="onSubmit(form)" to form tag
// implement onSubmit(form) function