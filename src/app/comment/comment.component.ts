import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  jsonData: Array<{}>;
  constructor() { }

  ngOnInit(): void {
    this.jsonData = [
      {
        "name": "James Bond",
        "text": "My name is Bond, James Bond!",
        "date": "2020-01-13 11:11:11",
        "replies": [{
          "name": "Reply1",
          "text": "Nice to meet you, Mr. Bond",
          "date": "2020-01-13 11:12:13",
          "replies": [
            {
              "name": "Reply1.1",
              "text": "Nice to meet you, Mr. Bond",
              "date": "2020-01-13 11:12:13",
              "replies": []
            }
          ]
        },
        {
          "name": "Reply2",
          "text": "Nice to meet you, Mr. Bond",
          "date": "2020-01-13 11:12:13"
        }
        ]
      },
      {
        "name": "Ritesh",
        "text": "My name is Ritesh, Ritesh Singh!",
        "date": "2020-01-13 11:11:11",
        "replies": [{
          "name": "Vaibhav",
          "text": "Nice to meet you, Mr. Ritesh. I am your big fan!",
          "date": "2020-01-13 11:12:13",
          "replies": []
        }]
      }
    ]

  }

  countChildren(obj) {
      var count = obj.replies.length;
      for (let i = 0; i < obj.replies.length; i++) {
          count += this.countChildren(obj.replies[i]);
      }
      return count;
  }

}
