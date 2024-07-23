import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
  MinValidator,
} from '@angular/forms';
import { TownsService } from '../../towns.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'town-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './town-form.component.html',
  styleUrl: './town-form.component.scss',
})
export class TownFormComponent {
  cityForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    population: new FormControl(0, [Validators.required, Validators.min(1)]),
    latitude: new FormControl(0.0, [Validators.required]),
    longitude: new FormControl(0.0, [Validators.required]),
  });

  errorMessage: string = '';

  constructor(public townService: TownsService) {}

  onSubmit() {
    if (this.cityForm.valid) {
      console.log('Bravo !');
    } else {
      console.log('Malheureusement, non');
      console.log(this.cityForm);
    }
  }
}
