import { Component,OnInit } from '@angular/core';
import { ServiceService,Officeall } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit{
  submitVisible:boolean=true;
  updateVisible:boolean=false;
  name:string=''
  age:string=''
  salary:string=''
  location:string=''
  officelist:Officeall[]=[]
  editOffice:any;
  districts:any;
  salaries:any;
  constructor(public service1:ServiceService,private router: Router){}
ngOnInit(): void {
this.getOfficedata()
this.getDistrict()
this.getSalary()
  
}
getOfficedata(){
  this.service1.getOfficeall().subscribe((data)=>{
    this.officelist=data
  })

}
getDistrict(){
  this.service1.getDistrictall().subscribe((data)=>{
    this.districts=data
    console.log(data)
  })
}
getSalary(){
  this.service1.getSalaryall().subscribe((data)=>{
    this.salaries=data
  })
}
lister(id:number){
  this.router.navigate(['office',id])

}
createUser(){
  let payload={
    ownername: this.name,
    age: this.age,
    salary: this.salary,
    location: this.location,

  }
  this.service1.createNewOff(payload).subscribe((data)=>{
    this.getOfficedata()
  })

}
editUser(id:number){
  this.service1.getOfficeid(id).subscribe((data:any)=>{
    this.name = data[0]['ownername'];
    this.age = data[0]['age'];
    this.salary = data[0]['salary'];
    this.location = data[0]['location'];
    this.editOffice=id;
    console.log(this.editOffice)
    this.submitVisible = false;
    this.updateVisible = true;
  })
}
deleteUser(id:number){
  console.log(id)
  let payload={id:id}
  this.service1.DeleteOffice(payload).subscribe((data)=>{
    this.getOfficedata()
  })
}
updateUser(){
  let payload={
    id:this.editOffice,
    ownername:this.name,
    age:this.age,
    salary: this.salary,
    location:this.location
  }
  this.service1.UpdateOffice(payload).subscribe((data)=>{
    this.getOfficedata()
  })

}
}
