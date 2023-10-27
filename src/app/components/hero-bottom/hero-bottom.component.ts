import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hero-bottom",
  templateUrl: "./hero-bottom.component.html",
})
export class HeroBottomComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ShowCreate = true;
  ShowForm = false;
  ShowSend = false;

  ShowCreateTopico() {
    this.ShowCreate = true;
    this.ShowForm = false;
    this.ShowSend = false;
  }

  ShowFormTopico() {
    this.ShowCreate = false;
    this.ShowForm = true;
    this.ShowSend = false;
  }

  ShowSendTopico() {
    this.ShowCreate = false;
    this.ShowForm = false;
    this.ShowSend = true;
  }
}
