import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { PlacesService } from 'src/app/services/places.service';
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule]
})
export class NewPlaceComponent {
  formulario: FormGroup;

  constructor(
    private placesService: PlacesService
  ) {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl()
    })
  }

  async addPlace() {
    const response = await this.placesService.addPlace(this.formulario.value);
    this.formulario.reset();
  }
}
