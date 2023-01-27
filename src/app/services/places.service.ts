import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Place from '../interfaces/place.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: Firestore) { }

  addPlace(place: Place) {
    const placeRef = collection(this.firestore, 'places');
    return addDoc(placeRef, place);
  }

  getPlaces(): Observable<Place[]> {
    const placeRef = collection(this.firestore, 'places');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Place[]>;
  }

  deletePlace(placeId: string) {
    const placeDocRef = doc(this.firestore, `places/${placeId}`);
    return deleteDoc(placeDocRef);
  }
}
