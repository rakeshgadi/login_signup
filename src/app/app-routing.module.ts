import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { LoginComponent } from './login/login.component';
import { ShopdashComponent } from './shopdash/shopdash.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashComponent } from './userdash/userdash.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'admindash', component:AdmindashComponent
  },
  {
    path:'customerdash', component:UserdashComponent
  },
  {
    path:'shopdash', component:ShopdashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
