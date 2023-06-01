import { Injectable } from '@angular/core';
import{HttpClient} from  '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
// geturl="http://localhost:3001/getcompany/:id"
getall="http://localhost:3001/getall"
compupdateurl="http://localhost:3001/update/company"
delcompanyurl="http://localhost:3001/delete/company"
getallemployee="http://localhost:3001/getallemployee"
empdelete="http://localhost:3001/delete/employee"
getalloffice="http://localhost:3001/getofficeall"
posturl="http://localhost:3001/insert"
empposturl="http://localhost:3001/insert/employee"
empupdate="http://localhost:3001/update/employee"
offposturl="http://localhost:3001/insert/office"
offupdate="http://localhost:3001/update/office"

offdelete="http://localhost:3001/delete/office"
districtall="http://localhost:3001/getdistrictall"
salaryall="http://localhost:3001/getsalaryall"
  constructor(private http:HttpClient) { }
  getallusers(){
    return this.http.get<Companyall[]>(this.getall)
  }
  getcompanyid(id:any){
// return this.http.get('http://localhost:3001/getcompany/${id}')
return this.http.get(`http://localhost:3001/getcompany/${id}`)
  }
  
  getEmployee(){
    return this.http.get<Employeeall[]>(this.getallemployee)
  }
  getEmployeeid(id:any){
    return this.http.get(`http://localhost:3001/getemployee/${id}`)
  }
  getOfficeall(){
    return this.http.get<Officeall[]>(this.getalloffice)
  }
  getOfficeid(id:any){
    return this.http.get(`http://localhost:3001/getoffice/${id}`)
  }
  createNew(body:any){
    return this.http.post(this.posturl,body)
  }
  createNewEmp(body:any){
    return this.http.post(this.empposturl,body)
  }
  createNewOff(body:any){
    return this.http.post(this.offposturl,body)
  }

  UpdateCompany(body:any){
    return this.http.put(this.compupdateurl,body)
  }
  UpdateOffice(body:any){
return this.http.put(this.offupdate,body)
  }
  UpdateEmployee(body:any){
    return this.http.put(this.empupdate,body)
  }
  DeleteCompany(body:any){
    return this.http.put(this.delcompanyurl,body)
  }
  DeleteOffice(body:any){
    return this.http.put(this.offdelete,body)
  }
  DeleteEmployee(body:any){
    return this.http.put(this.empdelete,body)
  }
getDistrictall(){
  return this.http.get(this.districtall)

}
getSalaryall(){
  return this.http.get(this.salaryall)
}
}
export interface Companyall{
  id:number;
  name:string;
  email:string;
  phonenumber:number;
  location:string;
}
export interface Employeeall{
  id:number;
  name:string;
  age:number;
  gender:string;
}
export interface Officeall{
  id:number;
  ownername:string;
  age:number;
  salary:number;
  location:string
}
