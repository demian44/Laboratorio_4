import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from '../../component/ngbd-modal-content/ngbd-modal-content.component';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    // modalRef.componentInstance.name = 'World';
  }

  ngOnInit() {
  }

}
