import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  jsonData: Array<any>;
  constructor(private _commonServices: CommonService) { }

  ngOnInit(): void {
    this._commonServices.getComments().subscribe(data => {
      this.jsonData = data;
      });
  }
}
