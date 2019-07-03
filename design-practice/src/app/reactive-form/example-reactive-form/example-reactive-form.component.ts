import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-example-reactive-form',
  templateUrl: './example-reactive-form.component.html',
  styleUrls: ['./example-reactive-form.component.css']
})
export class ExampleReactiveFormComponent {

  hideSubmitMessage = true;

    profileForm = this.fb.group( {
    firstName: ['', Validators.required],
    lastName: [],
    address: this.fb.group({
      street: [],
      city: [],
      state: [],
      zip: []
    }),
    aliases: this.fb.array([
      this.fb.control('Crazy man')
    ])
  })

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.hideSubmitMessage = false;
    setTimeout(() => {
      this.hideSubmitMessage = true;
    }, 5000);
  }

  updateNameAndCity() {
    this.profileForm.patchValue({
      firstName: 'Jay',
      lastName: 'Prock',
      address: {
        city: 'No Where'
      }
    })
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
