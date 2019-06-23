import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-groccery',
  templateUrl: './add-groccery.component.html',
  styleUrls: ['./add-groccery.component.css']
})
export class AddGrocceryComponent implements OnInit {
  grocceryForm : FormGroup;
  constructor(private toastrService: ToastrService) { }

  ngOnInit() {
    this.grocceryForm = new FormGroup({
      description : new FormControl(''),
      amount: new FormControl('')
    })
  }

  onSubmit() {
    let item = this.grocceryForm.value;
    console.log(item);
    this.toastrService.success("Item Added Successfully","Success!");
  }

}
