import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { SimpleReactiveFormComponent } from './simple-reactive-form/simple-reactive-form.component';
import { ExampleReactiveFormComponent } from './example-reactive-form/example-reactive-form.component';

@NgModule({
  declarations: [SimpleReactiveFormComponent, ExampleReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormRoutingModule
  ]
})
export class ReactiveFormModule { }
