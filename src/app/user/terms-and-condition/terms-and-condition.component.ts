import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.css']
})
export class TermsAndConditionComponent implements OnInit {
  responsive = true;
  cols = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
