import { Component, OnInit } from '@angular/core';
import { IuserSettings } from 'src/app/model/iuser-settings';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css'],
})
export class UserSettingFormComponent implements OnInit {

  originalUserSetting: IuserSettings = {
    name: "",
    emailSpecialOffers: false,
    interfaceStyle: '',
    subscriptionType: '',
    notes: '',
  };

  userSetting: IuserSettings = { ...this.originalUserSetting }  //copy of top level properies using spread operators


  // userSetting: UserSettings = {
  //   name: 'MMR',
  //   emailSpecialOffers: true,
  //   interfaceStyle: 'dark',
  //   subscriptionType: 'annual',
  //   notes: 'my nootes'
  // }

  constructor() { }

  ngOnInit(): void { }
}
