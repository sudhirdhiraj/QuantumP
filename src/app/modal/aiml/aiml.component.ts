import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-aiml',
  templateUrl: './aiml.component.html',
  styleUrls: ['./aiml.component.css']
})
export class AimlComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) {
   
  }

openLg(aiml) {
    this.modalService.open(aiml, { size: 'lg' });
  }

  ngOnInit() {
  }

}
