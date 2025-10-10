import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './allusers/allusers.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  {path : 'allusers' , component : AllusersComponent},
  {path : 'adduser' , component : AdduserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
