import { Component, OnInit, Input } from '@angular/core';

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
        "name": "Ritesh",
        "text": "text1",
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
              "replies": [{
                "name": "Reply1.1.1",
                "text": "Nice to meet you, Mr. Bond",
                "date": "2020-01-13 11:12:13",
                "replies": [{
                  "name": "Reply1.1.1.1",
                  "text": "Nice to meet you, Mr. Bond",
                  "date": "2020-01-13 11:12:13",
                  "replies": []
                },
                {
                  "name": "Reply1.1.1.2",
                  "text": "Nice to meet you, Mr. Bond",
                  "date": "2020-01-13 11:12:13",
                  "replies": []
                }]
              }]
            }
          ]
        }
        ]
      },
      {
        "name": "Ritesh",
        "text": "text1",
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
              "replies": [{
                "name": "Reply1.1.1",
                "text": "Nice to meet you, Mr. Bond",
                "date": "2020-01-13 11:12:13",
                "replies": [{
                  "name": "Reply1.1.1.1",
                  "text": "Nice to meet you, Mr. Bond",
                  "date": "2020-01-13 11:12:13",
                  "replies": []
                }]
              }]
            }
          ]
        }
        ]
      }
    ]

  }

}
