import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { UserSettingFormComponent } from './components/user-setting-form/user-setting-form.component';


const routes: Routes = [
  { path: "", component: UserSettingFormComponent },
  { path: "firstForm", component: UserSettingFormComponent },
  { path: "secondForm", component: FormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
