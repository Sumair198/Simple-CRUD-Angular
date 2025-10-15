import { Component } from '@angular/core';
import {ApiService} from '../services/api.service'
import { User } from '../models/user';
import {Router, Route} from '@angular/router'

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {

  allUsers : User[] = []
  singleUser? : User
  editUser?: User;
    constructor(private apiservice : ApiService , private _router : Router){}

    ngOnInit()
    {
      this.apiservice.getAllUsers().subscribe((res : any)=>
      {
        this.allUsers = res.users
      })
    }

    getSingleUser(id : number)
    {
      this.apiservice.getUserById(id).subscribe((res : any)=>
      {
        // console.log(res)
        this.singleUser = res
      
      })

    }

    editBtn(user : User)
    {

      if(user)
      {
        this._router.navigateByUrl('edituser')
        localStorage.setItem('edituser' , JSON.stringify(user))
      }
    }
    deleteBtn(id : any)
    {
      this.apiservice.deleteUser(id).subscribe((res : any)=>
      {
        console.log(res)
      })
    }

}
