import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ugc',
  templateUrl: './ugc.component.html',
  styleUrls: ['./ugc.component.css']
})
export class UgcComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) {

  }

  openLg(ugc) {
    this.modalService.open(ugc, { size: 'lg' });
  }

  ngOnInit() {
  }

}
