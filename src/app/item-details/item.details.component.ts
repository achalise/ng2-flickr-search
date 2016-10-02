import { Component, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'item-details',
  templateUrl: './item.details.component.html',
  styleUrls: ['./item.details.component.scss']
})

export class ItemDetailsComponent {
    @Input() item: any;

      closeResult: string;

      constructor(private modalService: NgbModal) {}

      open(content) {
        this.modalService.open(content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }

      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }

      highResolutionLink() {
      	return this.item.media.m.replace('_m', '_z');
      }
}
