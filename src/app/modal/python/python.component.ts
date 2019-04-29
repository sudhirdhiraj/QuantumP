import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {

  closeResult: string;
  constructor(private modalService: NgbModal) {
  }
  openLg(python) {
    this.modalService.open(python, { size: 'lg' });
  }

  ngOnInit() {
  }

}
