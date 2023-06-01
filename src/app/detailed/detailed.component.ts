import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit{


  getbyid:any;
constructor(public service1:ServiceService,private route:ActivatedRoute){}
  ngOnInit(): void {
    
    let id=  this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.service1.getcompanyid(id).subscribe((data:any)=>{
this.getbyid=data[0]
console.log(data)
    })
  }
}
