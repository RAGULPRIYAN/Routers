import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routers';
constructor(private router:Router){}
dropChange(selectedOption: string) {
  if (selectedOption === 'employee') {
    this.router.navigateByUrl('/employee');
  } else if (selectedOption === 'company') {
    this.router.navigateByUrl('/company');
  } else if (selectedOption === 'office') {
    this.router.navigateByUrl('/office');
  }
}
}
