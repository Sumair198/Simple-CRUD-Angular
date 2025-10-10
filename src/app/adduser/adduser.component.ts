import { Component } from '@angular/core';
import { User } from '../models/user';
import {ApiService} from '../services/api.service'

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

simpleUser : User = {firstName : '' , lastName : '' , age : 0 , email : ''}

constructor(private apiservice : ApiService){}
  addUser(evt : User)
  {
    this.simpleUser = evt
    this.apiservice.addUser(this.simpleUser).subscribe((res : any)=>
    {
      console.log(res)
    })
  }

}
