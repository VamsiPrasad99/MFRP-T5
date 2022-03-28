import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data';


@Injectable({
  providedIn: 'root'
})
export class FlightsService {
url = 'http://localhost:9099/api/deleteFlights';
url1 = 'http://localhost:9099/api/updateFlights';
url2 = 'http://localhost:9099/api/flights';
  constructor(private http:HttpClient) { }
  public getapi():Observable<Data[]>{
    return this.http.get<Data[]>('http://localhost:9099/api/flights');
  }
  deleteData(flightID: any){
    return this.http.delete(`${this.url}/${flightID}`)
  }
  getData(_id:any){
     return this.http.get(`${this.url2}/${_id}`)
  }
  updateData(_id:any,data:any){
    return this.http.put(`${this.url1}/${_id}`,data)
  }
}