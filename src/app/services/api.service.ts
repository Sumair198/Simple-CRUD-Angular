import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  apiUrl = "https://dummyjson.com/users"
  apiUrlId = "https://dummyjson.com/users"
  apiUrlAddUser = "https://dummyjson.com/users/add"

  getAllUsers()
  {
    return this.http.get(this.apiUrl)
  }
  getUserById(id : number)
  {
    return this.http.get(`${this.apiUrlId}/${id}`)
  }
  addUser(data : User)
  {
    return this.http.post(this.apiUrlAddUser , data)
  }

}
