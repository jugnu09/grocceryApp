import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { FirebaseService } from '../services/firebase.service';

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
  dataSource = new MatTableDataSource([]);
  expandedElement: PeriodicElement;
  data: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.data = this.firebaseService.getGrocceryItems();
    this.data.subscribe(grocceryDetailsArray => {
      this.dataSource = new MatTableDataSource(grocceryDetailsArray);
      this.dataSource.paginator = this.paginator;
    });
  }
}

export interface PeriodicElement {
  item: string;
  amount: number;
  date: string;
  addedBy: string;
}

