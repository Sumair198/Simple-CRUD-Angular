import { Component } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {

  result? : User

  constructor(private apiservice : ApiService , private _router : Router){}

  ngOnInit()
  {
    const data = localStorage.getItem('edituser')

    if(data)
    {
      const editdata = JSON.parse(data)
      // console.log(editdata)
       this.result = editdata
    }
    
  }

  updateUser()
  {
    this.apiservice.editUser(this.result!.id! , this.result!).subscribe((res  :any)=>{
      console.log(res)
      if(res)
      {
        localStorage.removeItem('edituser')
        this._router.navigateByUrl('allusers')
      }
    })
  }
}
