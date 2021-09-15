import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CategoryComponent } from './Components/category/category.component';
import { FilterComponent } from './Components/filter/filter.component';
import { DetailsComponent } from './Components/details/details.component';


@NgModule({
  declarations: [
    CategoryComponent,
    FilterComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
