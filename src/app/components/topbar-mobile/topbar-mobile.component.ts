import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-topbar-mobile",
  templateUrl: "./topbar-mobile.component.html",
})
export class TopbarMobileComponent implements OnInit {
  isOpen: boolean = false;

  MobileMenu() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}
