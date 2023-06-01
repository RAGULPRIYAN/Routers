import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed3',
  templateUrl: './detailed3.component.html',
  styleUrls: ['./detailed3.component.scss']
})
export class Detailed3Component implements OnInit{
  officeid:any;
  constructor(public service1:ServiceService,private route:ActivatedRoute){}
  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id')
    this.service1.getOfficeid(id).subscribe((data)=>{
      this.officeid=data
      console.log(data)
    })
    
  }

}
