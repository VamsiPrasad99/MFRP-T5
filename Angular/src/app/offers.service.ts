import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offers } from './offers';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  url2 ="http://localhost:9999/api/offers"
  constructor(private http:HttpClient) { }
  public getoffersapi():Observable<Offers[]>{
    return this.http.get<Offers[]>('http://localhost:9999/api/offers');
  }
  offergetData(_id:any){
    return this.http.get(`${this.url2}/${_id}`)
 }
}
