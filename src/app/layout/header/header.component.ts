import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 /* public showHidediv: any;
*/
  /*@Output() public sidenavToggle = new EventEmitter();*/

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(public router: Router) {
    console.log(router.url)
  }

  ngOnInit() {
  }

 /* public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }*/



}
