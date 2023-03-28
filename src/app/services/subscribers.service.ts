import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
// import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  email : Array<any> = [];

  constructor( private firestore : Firestore ) { }

  addSubs(subData : any){
    const data = collection(this.firestore, 'Subscribers');
    addDoc(data, subData).then(()=>{
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  

}
