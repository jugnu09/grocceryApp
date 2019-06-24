import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList, AngularFireObject} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  usersRef: AngularFireList<any>;  
  userRef: AngularFireObject<any>;  
  constructor(private db : AngularFireDatabase) { }
  createEntry(item: any){
    return this.usersRef.push({
      item: item.description,
      amount: item.amount
    });
  }
}
