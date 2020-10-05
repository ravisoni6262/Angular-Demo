import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Data } from "../shared/accordian-data.model";
import { map } from "rxjs/operators";
import { apiEndPoint } from "../shared/api-endpoint";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
})
export class PopupComponent {
  bannerData: any;
  closeResult: string;
  public isCollapsed = false;
  isFetching: Boolean = false;
  errorMessage: String = null;
  constructor(private modalService: NgbModal, private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "cookieBannerLabel" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  private fetchData() {
    this.isFetching = true;
    this.http
      .get<Data>(
        apiEndPoint
      )
      .pipe(
        map((resData) => {
          const accordianArray = [];
          for (const key in resData.accordian) {
            if (resData.accordian.hasOwnProperty(key)) {
              accordianArray.push({
                ...resData.accordian[key],
                BlockingEnabled: false,
              });
            }
          }
          return accordianArray;
        })
      )
      .subscribe(
        (res) => {
          this.isFetching = false;
          this.bannerData = res;
        },
        (error) => {
          this.errorMessage = error.message;
        }
      );
  }
}
