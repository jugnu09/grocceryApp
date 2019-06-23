import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { RouterModule, Routes} from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: ReportComponent
  }]
@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ReportModule { }
