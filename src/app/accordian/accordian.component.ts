import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { NgbAccordion } from "@ng-bootstrap/ng-bootstrap";
import { Accordian } from "../shared/accordian-data.model";
import {IndeterminateDirective} from "../shared/indeterminate.directive";


@Component({
  selector: "app-accordian",
  templateUrl: "./accordian.component.html",
})
export class AccordianComponent implements OnInit {
  @ViewChild("accordian") accordionComponent: NgbAccordion;
  @ViewChild("headerSwitch") headerSwitch: any;
  @ViewChild("childPlugin") childPlugin: any;
  @Input() accordianData: Accordian[];
  isChecked: Boolean;
  constructor(private elem: ElementRef) {}

  ngOnInit() {
    console.log(this.accordianData);
  }
  ngAfterViewInit() {
    let elements = this.elem.nativeElement.querySelectorAll(".parent-checkbox");
  }

  // Opening accordian's Panels Id wise
  toggle(id: string): void {
    this.accordionComponent.toggle(id);
  }

  // Check Header-Switch on checking Plugin switch
  turnOnHeaderSwitch(event: Event, headerSwitchId: String) {
    if (this.arePluginsChecked) {
      this.isChecked = true;
    }
    else {
      this.isChecked = false;
    }
  }

  arePluginsChecked(id: String) {
    if (this.childPlugin.nativeElement.checked == true)
      return this.childPlugin.nativeElement.checked;

    return false;
  }
}

