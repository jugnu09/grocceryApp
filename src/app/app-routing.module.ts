import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGrocceryComponent } from './add-groccery/add-groccery.component';
import {ReportComponent} from "./report/report.component";

const routes: Routes = [
  {
    path: 'addgroccery',
    component: AddGrocceryComponent
  },
  {
    path: 'report',
    //loadChildren: './report/report.module#ReportModule'
    component: ReportComponent
  },
  {
    path: '',
    redirectTo: 'addgroccery',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
