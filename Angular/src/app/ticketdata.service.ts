import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticketdata } from './ticketdata';

@Injectable({
  providedIn: 'root'
})
export class TicketdataService {

  url2 ="http://localhost:8099/api/ticket"
  constructor(private http:HttpClient) { }
  public getticketdataapi():Observable<Ticketdata[]>{
    return this.http.get<Ticketdata[]>('http://localhost:8099/api/ticket');
  }
  getticketData(_id:any){
    return this.http.get(`${this.url2}/${_id}`)
 }
}
