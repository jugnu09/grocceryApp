import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList, AngularFireObject} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  itemList: AngularFireList<any>;  
  //userRef: AngularFireObject<any>;  
  constructor(private db : AngularFireDatabase) { }

  createEntry(item: any){
    let date = new Date(Date.now()).toLocaleString();
    this.itemList = this.db.list('/grocerry');
    return this.itemList.push({
      item: item.description,
      amount: item.amount,
      date: date,
      addedBy: "Ritesh"
    });
  }

  getGrocceryItems(){
    this.itemList = this.db.list('/grocerry');
    return this.itemList.valueChanges();
  }
}
