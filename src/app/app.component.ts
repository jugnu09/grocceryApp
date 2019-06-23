import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'groccery';

  navLinks =[
    {
      label: 'Add Groccery',
      path: './addgroccery',
      index: 0
    }, {
      label: 'Monthly Report',
      path: './report',
      index: 1
    }
  ];
}
