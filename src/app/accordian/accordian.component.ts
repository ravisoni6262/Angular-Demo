import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {NgbAccordion} from '@ng-bootstrap/ng-bootstrap';
import { Accordian } from '../popup/accordian-data.model';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html'
})
export class AccordianComponent implements OnInit {
  @ViewChild('accordian') accordionComponent: NgbAccordion;
  @ViewChild('abc') abc: any;
  @Input() accordianData : Accordian[];
  isChecked : Boolean;
  constructor() {
  this.isChecked = false;
  }

  ngOnInit() {
    // console.log(this.accordianData);
  }
  ngAfterViewInit(){
    console.log(this.abc.nativeElement.value);
  }

  toggle(id:string): void {
    this.accordionComponent.toggle(id);
  }

  checkPluginSwitch(event: Event) {
    console.log((<HTMLInputElement>event.target));
    console.log(this.abc.nativeElement.value);

    // const forCategary = document.getElementById('switch').value()
    if((<HTMLInputElement>event.target).checked === true && (<HTMLInputElement>event.target).parentElement.accessKey === this.abc.nativeElement.value) {
      this.isChecked = true;
    }
    else {
      this.isChecked = false;
    }
  }

}
