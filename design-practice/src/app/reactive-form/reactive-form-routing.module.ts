import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleReactiveFormComponent } from './simple-reactive-form/simple-reactive-form.component';
import { ExampleReactiveFormComponent } from './example-reactive-form/example-reactive-form.component';

const routes: Routes = [
  { path: 'simple-reactive-form', component: SimpleReactiveFormComponent },
  { path: 'example-reactive-form', component: ExampleReactiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
