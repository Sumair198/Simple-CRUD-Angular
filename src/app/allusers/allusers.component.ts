import { Component } from '@angular/core';
import {ApiService} from '../services/api.service'
import { User } from '../models/user';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {

  allUsers : User[] = []
  singleUser? : User
    constructor(private apiservice : ApiService){}

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

}
