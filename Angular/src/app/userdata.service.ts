import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userdata } from './userdata';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url2= "http://localhost:3333/api/userdata"
  constructor(private http:HttpClient) { }
  public getuserdata():Observable<Userdata[]>{
    return this.http.get<Userdata[]>('http://localhost:3333/api/userdata');
  }
  getData(_id:any){
    return this.http.get(`${this.url2}/${_id}`)
 }
}
