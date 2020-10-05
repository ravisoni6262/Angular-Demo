import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { NgbAccordion } from "@ng-bootstrap/ng-bootstrap";
import { Accordian, Plugins } from "../shared/accordian-data.model";

@Component({
  selector: "app-accordian",
  templateUrl: "./accordian.component.html",
})
export class AccordianComponent implements OnInit {
  @ViewChild("accordian") accordionComponent: NgbAccordion;
  @ViewChild("headerSwitch") headerSwitch: any;
  @ViewChild("childPlugin") childPlugin: any;
  @Input() accordianData: Accordian[];
  isSelected: boolean;
  constructor() {}

  ngOnInit() {}

  // Opening accordian's Panels Id wise
  toggle(id: string): void {
    this.accordionComponent.toggle(id);
  }

  // Check Header-Switch on checking Plugin switch
  turnOnHeaderSwitch(event: Event, data: Accordian, childData: Plugins) {
    if(this.uncheckHeaderBox(childData) === false) {
      return data.BlockingEnabled = false;
    }
    data.BlockingEnabled = childData.map((childItem: any) => {
      return childItem.BlockingEnabled;
    });
  }

  // Uncheck Header switch if Plugins switch are off
  uncheckHeaderBox(childData: Plugins) {
    for (let i = 0; i < childData.length; i++) {
    const pluginChecked:boolean = childData[i].BlockingEnabled;
    if(!pluginChecked) return false;
    return true;
    }
   
  }

  // Check Plugins Checkbox when Header Checkbox is checked
  turnOnChildSwitch(data: Accordian) {
    for (let i = 0; i < data.PluginList.length; i++) {
      data.PluginList[i].BlockingEnabled = data.BlockingEnabled;
    }
  }
}

