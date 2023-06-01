import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detailed1',
  templateUrl: './detailed1.component.html',
  styleUrls: ['./detailed1.component.scss']
})
export class Detailed1Component implements OnInit{

getbyemployeeid:any;
constructor(public service1:ServiceService,private route:ActivatedRoute){}
ngOnInit(): void {
    
  let id=  this.route.snapshot.paramMap.get('id')
  console.log(id)
  this.service1.getEmployeeid(id).subscribe((data)=>{
this.getbyemployeeid=data
console.log(data)
  })
}
}
