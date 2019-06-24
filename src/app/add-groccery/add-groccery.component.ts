import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-add-groccery',
  templateUrl: './add-groccery.component.html',
  styleUrls: ['./add-groccery.component.css']
})
export class AddGrocceryComponent implements OnInit {
  grocceryForm : FormGroup;
  constructor(private toastrService: ToastrService,
              private firebaseService : FirebaseService
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
    this.toastrService.success("Item Added Successfully","Success!");
  }

}
