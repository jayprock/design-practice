import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-reactive-form',
  templateUrl: './simple-reactive-form.component.html',
  styleUrls: ['./simple-reactive-form.component.css']
})
export class SimpleReactiveFormComponent {

  name = new FormControl('');

  clearForm() {
    this.name.setValue("");
  }
}
