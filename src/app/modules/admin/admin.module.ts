import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeHireComponent } from './Components/employee-hire/employee-hire.component';


@NgModule({
  declarations: [
    DashBoardComponent,
    EmployeeDetailsComponent,
    EmployeeHireComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
