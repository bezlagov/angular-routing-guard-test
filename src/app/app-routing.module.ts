import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginService } from './main-page/login.service';
import { MainPageComponent } from './main-page/main-page.component';
import { PhonesComponent } from './phones/phones.component';

const routes: Routes = [
  {path:"", component:MainPageComponent},
  {path:"phones", component:PhonesComponent},
  {path:"admin",canActivate:[LoginService] , component:AdminPanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
