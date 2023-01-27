import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewPlaceComponent } from './components/new-place/new-place.component';
import { PlacesListComponent } from './components/places-list/places-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, NewPlaceComponent, PlacesListComponent]
})
export class AppComponent {
}
