import { Component } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';
import { getDocs, query, where } from '@firebase/firestore';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {

  isErrorEmail : boolean = false
  isSubscribed : boolean = false

  constructor( private sub : SubscribersService, private firestore : Firestore ){}

  async onSubmit(formValue:any){
    const subData: Sub={
      name: formValue.name,
      email: formValue.email
    }
    const q = query(collection(this.firestore, "Subscribers"), where("email", "==", subData.email));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.empty){
      this.sub.addSubs(subData)
      this.isErrorEmail = false;
      this.isSubscribed = true;
    }
    else{
      this.isErrorEmail = true;
    }
  }

}
