import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './Components/filter/filter.component';
import { CategoryComponent } from './Components/category/category.component';
import { DetailsComponent } from './Components/details/details.component';
const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
