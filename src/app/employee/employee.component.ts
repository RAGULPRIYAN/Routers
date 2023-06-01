import { Component } from '@angular/core';
import { ServiceService ,Employeeall} from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  submitVisible:boolean=true;
  updateVisible:boolean=false;
  name:string=''
  age:string=''
  gender:string=''

editEmployee:any;
  getallemployee:Employeeall[]=[]
  constructor(public service1:ServiceService,private router: Router){}
  ngOnInit(): void {
    this.getEmployeedata()
  }
  getEmployeedata(){
    this.service1.getEmployee().subscribe((data:Employeeall[])=>{
      
      this.getallemployee=data
      console.log(data)
    })
  }
  listview(id:number){
    console.log(id)
    this.router.navigate(['employee',id])


  }
  createUser(){
    let payload={
      name: this.name,
      age: this.age,
      gender: this.gender,
      
    }
    this.service1.createNewEmp(payload).subscribe((data)=>{
      this.getEmployeedata()
      
    })

  }
  editUser(id:number){
    this.service1.getEmployeeid(id).subscribe((data:any)=>{
     this.name = data[0]['name'];
         this.age = data[0]['age'];
         this.gender = data[0]['gender'];
        
         this.editEmployee=id;
         console.log(this.editEmployee)
         this.submitVisible = false;
         this.updateVisible = true;
   
    })
   
   }

  
  deleteUser(id:number){
    let payload={
      id:id
    }
    this.service1.DeleteEmployee(payload).subscribe((data)=>{
      this.getEmployeedata()
      
    })

  }
  updateUser(){
    let payload={
      id:this.editEmployee,
      name: this.name,
      age: this.age,
      gender: this.gender,
      
    }
    this.service1.UpdateEmployee(payload).subscribe((data)=>{
      this.getEmployeedata()
      
    })

  }

}
