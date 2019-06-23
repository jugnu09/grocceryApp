import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  displayedColumns: string[] = ['item', 'amount'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
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
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    item: 'Onion',
    amount: 50,
    date: '12/10/2019'
  },
  {
    item: 'Besan',
    amount: 45,
    date: '11/12/2019'
  },
  {
    item: 'AllOut Refill',
    amount: 76,
    date: '18/12/2019'
  },
  {
    item: 'Milk',
    amount: 44,
    date: '12/12/2019'
  },
  {
    item: 'Water',
    amount: 60,
    date: '1/12/2019'
  },
  {
    item: 'Vegitables',
    amount: 426,
    date: '12/08/2019'
  },
  {
    item: 'Besan',
    amount: 45,
    date: '12/08/2019'
  },
  {
    item: 'AllOut Refill',
    amount: 72,
    date: '12/11/2019'
  },
  {
    item: 'Potato',
    amount: 40,
    date: '10/12/2019'
  },
  {
    item: 'AllOut Refill',
    amount: 76,
    date: '12/2/2019'
  }
];

