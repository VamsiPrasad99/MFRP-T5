import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ticketdata } from '../ticketdata';
import { TicketdataService } from '../ticketdata.service';

@Component({
  selector: 'app-bookedtickets',
  templateUrl: './bookedtickets.component.html',
  styleUrls: ['./bookedtickets.component.css']
})
export class BookedticketsComponent implements OnInit {
  public response : Observable<Ticketdata[]> ;
  public ticketsdata : any[] = [];
  public thead = ["Flight ID","Flight Name","Source","Destination","No of Passengers","Passenger 1","Email","Mobile NO","Passenger 2","Passenger 3","Total Fare"]
  constructor(private api:TicketdataService,private http:HttpClient,private route: Router) { 
    this.response = this.api.getticketdataapi();
    this.api.getticketdataapi().subscribe(result =>{
      this.ticketsdata = result;
    })
  }

  ngOnInit(): void {
  }
back(){
  this.route.navigate(['adminui']);
}
}
