import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template:
   `<div style="text-align:center">
     <app-popup></app-popup>
   </div>`,
})
export class AppComponent implements OnInit {
  accordianData = {};
  showModal: boolean;

  constructor() {}
  ngOnInit() {}

  showCookieBanner(event): void {
    this.showModal = true;
  }
}
