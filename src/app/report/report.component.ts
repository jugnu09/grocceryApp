import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class ReportComponent implements OnInit {
  displayedColumns: string[] = ['item', 'amount'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //dataSource = ELEMENT_DATA;
  expandedElement: PeriodicElement;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  item: string;
  amount: number;
  date: string;
  addedBy: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    item: 'Onion',
    amount: 50,
    date: '12/10/2019',
    addedBy: 'Neha'
  },
  {
    item: 'Besan',
    amount: 45,
    date: '11/12/2019',
    addedBy: 'Ritesh'
  },
  {
    item: 'AllOut Refill',
    amount: 76,
    date: '18/12/2019',
    addedBy: 'Ritesh'
  },
  {
    item: 'Milk',
    amount: 44,
    date: '12/12/2019',
    addedBy: 'Neha'
  },
  {
    item: 'Water',
    amount: 60,
    date: '1/12/2019',
    addedBy: 'Neha'
  },
  {
    item: 'Vegitables',
    amount: 426,
    date: '12/08/2019',
    addedBy: 'Ritesh'
  },
  {
    item: 'Besan',
    amount: 45,
    date: '12/08/2019',
    addedBy: 'Ritesh'
  },
  {
    item: 'AllOut Refill',
    amount: 72,
    date: '12/11/2019',
    addedBy: 'Ritesh'
  },
  {
    item: 'Potato',
    amount: 40,
    date: '10/12/2019',
    addedBy: 'Neha'
  },
  {
    item: 'AllOut Refill',
    amount: 76,
    date: '12/2/2019',
    addedBy: 'Ritesh'
  }
];

