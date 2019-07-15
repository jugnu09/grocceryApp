import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList, AngularFireObject} from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  itemList: AngularFireList<any>;
  constructor(private db: AngularFireDatabase, private toastrService: ToastrService) { }

  createEntry(item: any) {
    const date = new Date(Date.now()).toLocaleString();
    this.itemList = this.db.list('/grocerry');
    this.toastrService.success('Item Added Successfully', 'Success!');
    return this.itemList.push ({
      item: item.description,
      amount: item.amount,
      date: date,
      addedBy: 'Ritesh'
    });
  }

  getGrocceryItems() {
    this.itemList = this.db.list('/grocerry');
    return this.itemList.valueChanges();
  }
}
