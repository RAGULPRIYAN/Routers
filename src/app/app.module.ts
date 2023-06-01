import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailedComponent } from './detailed/detailed.component';
import { Detailed1Component } from './detailed1/detailed1.component';
import { OfficeComponent } from './office/office.component';
import { Detailed3Component } from './detailed3/detailed3.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    EmployeeComponent,
    DetailedComponent,
    Detailed1Component,
    OfficeComponent,
    Detailed3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
