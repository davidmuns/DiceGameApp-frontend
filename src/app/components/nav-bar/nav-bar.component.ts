import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {


  constructor(private router: Router) {
  }


  public goTemplateForm() {
    this.router.navigate(['template-form'], { queryParams: { email: 'dgmuns@gmail.com' } })
  }

}
