import { Component } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {

  result? : User

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
}
