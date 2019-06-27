import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-groccery',
  templateUrl: './add-groccery.component.html',
  styleUrls: ['./add-groccery.component.css']
})
export class AddGrocceryComponent implements OnInit {
  grocceryForm : FormGroup;
  constructor(private firebaseService : FirebaseService
            ) { }

  ngOnInit() {
    this.grocceryForm = new FormGroup({
      description : new FormControl(''),
      amount: new FormControl('')
    })
  }

  onSubmit() {
      let item = this.grocceryForm.value;
      this.firebaseService.createEntry(item);
  }

}
