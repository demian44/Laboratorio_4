import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-content',
  templateUrl: './ngbd-modal-content.component.html',
  styleUrls: ['./ngbd-modal-content.component.css'],

})
export class NgbdModalContentComponent implements OnInit {

  // @Input() name;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}

