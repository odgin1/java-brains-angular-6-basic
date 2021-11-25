import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css'],
})
export class AddressCardComponent implements OnInit {
  user: any;
  isCollapsed: boolean;
  defaultText: string = 'Show phone numbers';
  buttonText: string;

  @Input('user') userObj: User;

  constructor() {
    this.buttonText = this.defaultText;
    this.isCollapsed = true;
  }

  ngOnInit() {
    this.user = {
      name: this.userObj.name,
      title: this.userObj.designation,
      address: this.userObj.address,
      phone: this.userObj.phone,
    };
  }

  onButtonClickEvent() {
    if (this.isCollapsed) {
      this.isCollapsed = false;
      this.buttonText = 'Hide phone numbers';
    } else {
      this.isCollapsed = true;
      this.buttonText = this.defaultText;
    }
  }
}
