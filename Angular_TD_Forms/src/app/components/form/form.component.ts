import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { IuserSettings } from 'src/app/model/iuser-settings';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  error: boolean = false;
  errorMsg: string = "";
  subscriptionTypes: string[] = [];
  singleModel = "on";
  Date: Date;
  mytime: Date = new Date();
  meridians = ['AM(Midnight to Noon)', 'PM(Noon to Midnight)'];
  //rating
  max: number = 10;
  rate = 7;
  isReadonly = false;
  overStar: number | undefined;
  percent = 0;
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  resetStar(): void {
    this.overStar = void 0;
  }

  originalUserSetting: IuserSettings = {
    name: "",
    emailSpecialOffers: false,
    interfaceStyle: '',
    subscriptionType: '',
    notes: '',
  };

  constructor(private dataService: DataService) {
    this.Date = new Date();
  }

  ngOnInit(): void {
    this.dataService.getSubscriptions().subscribe({
      next: data => this.subscriptionTypes = data, error: e => console.log(e)
    });
  }
  userSetting: IuserSettings = { ...this.originalUserSetting }  //copy of top level properies using spread operators

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log("form valdation: " + form.valid)
      this.dataService.postUserSettingsForm(this.userSetting).subscribe({
        next: result => console.log("data" + JSON.stringify(result)),
        error: err => this.httpErrors(err)
        // 
      });
    }
    else {
      this.error = true;
      this.errorMsg = "Please Fix The Above Errors"
    }
  }

  onBlure(par: NgModel) {
    console.log(par.valid)
  }

  httpErrors(par: any): void {
    console.log(par);
    this.error = true;
    this.errorMsg = par;
  }
}



