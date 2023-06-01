import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { DetailedComponent } from './detailed/detailed.component';
import { Detailed1Component } from './detailed1/detailed1.component';
import { OfficeComponent } from './office/office.component';
import { Detailed3Component } from './detailed3/detailed3.component';

const routes: Routes = [{path:'company',component:CompanyComponent},
{path:'employee',component:EmployeeComponent},
{path:'company/:id',component:DetailedComponent},
{path:'employee/:id',component:Detailed1Component},
{path:'office',component:OfficeComponent},
{path:'office/:id',component:Detailed3Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
