import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './emplist/employeelist.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [

  { path:'', component: EmployeelistComponent},
  { path:'newemployee', component: AddEmployeeComponent},
  { path:'editemployee', component: AddEmployeeComponent},

  { path:'employees', component: EmployeelistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
