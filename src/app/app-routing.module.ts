import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGrocceryComponent } from './add-groccery/add-groccery.component';
import {ReportComponent} from './report/report.component';
import { AdminComponent } from './admin/admin.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {
    path: 'addgroccery',
    component: AddGrocceryComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'comment',
    component: CommentComponent
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
