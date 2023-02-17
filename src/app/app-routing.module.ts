import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'homepage',component:HeaderComponent},
  {path:"signin",component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
