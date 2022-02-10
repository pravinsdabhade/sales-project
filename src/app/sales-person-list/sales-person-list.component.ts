import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of object.
  salesPersonList : SalesPerson[] = [
    new SalesPerson("Ram","Sundar",10000),
    new SalesPerson("Sham","Varma",4000),
    new SalesPerson("Yusuf","Khan",7000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
