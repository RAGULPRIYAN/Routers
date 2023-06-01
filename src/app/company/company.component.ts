import { Component,OnInit } from '@angular/core';
import { ServiceService ,Companyall} from '../service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit{
  submitVisible:boolean=true;
  updateVisible:boolean=false;
  myform:string=''
  name:string=''
  email:string=''
  phone:string=''
  location:string=''
  editCompany:any='';
  districts:any
  getalllist:Companyall[]=[]
  // router: any;
  constructor(public service1:ServiceService,private router: Router){}
  ngOnInit(): void {
    this.getCompanyData()
    this.getDistrict()
   
  }
  getCompanyData(){
    this.service1.getallusers().subscribe((data:Companyall[])=>{
    
      this.getalllist=data
      console.log("sjnsjd",this.getalllist)
    })
  }
  getDistrict(){
    this.service1.getDistrictall().subscribe((data)=>{
      this.districts=data
      console.log(data)
    })
  }
  list(id:number){
    this.router.navigate(['company',id])
  }
  createUser(){
    let payload = {
      name: this.name,
      email: this.email,
      phonenumber: this.phone,
      location: this.location,
    };
    console.log('payload',payload);
this.service1.createNew(payload).subscribe((data)=>{
  this.getCompanyData() 
})
  }
  editUser(id:number){
    this.service1.getcompanyid(id).subscribe((data:any)=>{
     this.name = data[0]['name'];
         this.email = data[0]['email'];
         this.phone = data[0]['phonenumber'];
         this.location = data[0]['location'];
         this.editCompany=id;
         console.log(this.editCompany)
         this.submitVisible = false;
         this.updateVisible = true;
        
      
    })
   
   }

updateUser(){
 
  let payload={
    id:this.editCompany,
    name:this.name,
    email:this.email,
    phonenumber:this.phone,
    location:this.location
  }
  
  this.service1.UpdateCompany(payload).subscribe((data)=>{
    console.log(data)
    this.submitVisible = true;
    this.updateVisible = false;
    this.getCompanyData() 
   
    
   
  })

 
}
// getallusers(){
  
// }

deleteUser(id:number){
  let payload={
    id:id
  }
  this.service1.DeleteCompany(payload).subscribe((data)=>{
    this.getCompanyData() 
    
  })

}
}
