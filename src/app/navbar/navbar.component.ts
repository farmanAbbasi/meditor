import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  scrollTop = 0;
  hideNav = false;
  currentComponent : string="home";
  
  
  constructor() { }

  ngOnInit() {
  }

  onScroll(event) {
    this.hideNav = this.scrollTop < event.target.scrollTop;
    this.scrollTop = event.target.scrollTop;
  }

  setComponent(value){
     this.currentComponent=value;
  }

}
