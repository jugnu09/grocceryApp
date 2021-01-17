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
          "name": "Vaibhav",
          "text": "I am Replying Ritesh",
          "date": "2020-01-13 11:12:13",
          "replies": [
            {
              "name": "John",
              "text": "I am replying Vaibhav.",
              "date": "2020-01-13 11:12:13",
              "replies": [{
                "name": "Dmitri",
                "text": "I am replying John",
                "date": "2020-01-13 11:12:13",
                "replies": [{
                  "name": "Iryna",
                  "text": "I am replying Dmitri",
                  "date": "2020-01-13 11:12:13",
                  "replies": []
                },
                {
                  "name": "Attila",
                  "text": "I am replying Dmitri",
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
          "name": "Ola",
          "text": "I am replying Ritesh",
          "date": "2020-01-13 11:12:13",
          "replies": [
            {
              "name": "Sandeep",
              "text": "I am replying Ola",
              "date": "2020-01-13 11:12:13",
              "replies": [{
                "name": "George",
                "text": "i am replying Sandeep",
                "date": "2020-01-13 11:12:13",
                "replies": [{
                  "name": "Tom",
                  "text": "I am Replying George",
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
