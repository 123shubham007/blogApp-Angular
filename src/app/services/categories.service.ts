import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private firestore:Firestore ) { }

  loadData():Observable<Category[]>{
    const data = collection(this.firestore, 'categories');
    return collectionData(data, { idField: 'id' }) as Observable<Category[]>
  }

}
