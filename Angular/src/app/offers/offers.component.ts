import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Data } from '../data';
import { FlightsService } from '../flights.service';
import { FooterService } from '../footer.service';
import { NavbarService } from '../navbar.service';
import { Offers } from '../offers';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  
  public exclusiveDeals : any[] =[];
  public offersData: any[] = [];
  public response: Observable<Offers[]>;
  public response1: Observable<Data[]>;
x:any;
public dataSelected:any;
  constructor(private api: OffersService, private http: HttpClient, private route: Router,private api1: FlightsService, private http1: HttpClient, private route1: Router,public nav : NavbarService,public footer: FooterService) {
    this.nav.show();
    this.footer.show();
    this.response = this.api.getoffersapi();
    this.api.getoffersapi().subscribe(data => {
      console.log(data)
      this.offersData = data;
    })
    console.log(this.response);
    this.response1 = this.api1.getapi();
    this.api1.getapi().subscribe(data => {
      console.log(data)
       for(let i=16 ; i<data.length;i++){
         this.exclusiveDeals.push(data[i]);
       }
    })
  }
  public show:boolean = false;
  public buttonName:any = 'View Offer';
  ngOnInit(): void {
  }
  // toggle(data:any) {
  //   console.log(data)
  //   this.dataSelected = data;
  //   this.show = !this.show;

  //   // CHANGE THE NAME OF THE BUTTON.
  //   if(this.show)  
  //     this.buttonName = "Hide";
  //   else
  //     this.buttonName = "Show";
  // }

}
