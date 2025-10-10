import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD-1';
  singleUser : User[] = []
  constructor(private apiservices : ApiService){}




}
