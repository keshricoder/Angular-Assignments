import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-address-comp',
  templateUrl: './user-address-comp.component.html',
  styleUrls: ['./user-address-comp.component.css']
})
export class UserAddressCompComponent implements OnInit {
 
  public addresses: any[] = [{
    id: 1,
    address: '',
    street: '',
    city: '',
    country: ''
  }];
  constructor() {

  }

  ngOnInit() {

  }
  address:any;
  addAddress() {
    this.addresses.push({
      id: this.addresses.length + 1,
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }

  logValue(value:any) {
    this.address=this.addresses;
  }

}
