import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import Place from 'src/app/interfaces/place.interface';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage]
})
export class PlacesListComponent {
  places: Place[] = [];

  constructor(
    private placesService: PlacesService
  ) {}

  ngOnInit(): void {
    this.getPlaces();
  }

  getPlaces() {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    });
  }

  async deletePlace(placeId: string) {
    const response = await this.placesService.deletePlace(placeId);
    console.log(response);
  }
}
