import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Data } from '../data';
import { FlightsService } from '../flights.service';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NavbarService } from '../navbar.service';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  public  sampleData: any[] = [];
  
  show = 10;
  
  public response: Observable<Data[]>;
x:any;
  constructor(private api: FlightsService, private http: HttpClient, private route: Router,public nav : NavbarService,public footer:FooterService) {
    this.nav.show();
    this.footer.show();
    this.response = this.api.getapi();
    this.api.getapi().subscribe(data => {
      console.log(data)
      this.sampleData = data;
    })
    console.log(this.response)
  }

  ngOnInit(): void {
  }
  getFlights(source: string, destination: string) {
    this.sampleData = [];
    console.warn(source);
    console.warn(destination);
    this.api.getapi().subscribe((data: any) => {
      console.log(data);
      for (let i = 0; i < data.length; i++)
      // {
      //   console.warn(source==data[i].arrival || destination==data[i].destination)
      // }
      {
        if (source == data[i].arrival && destination == data[i].departure) {
          this.api.getData(data[i]._id).subscribe((result: any) => {
            console.warn(result);
            this.sampleData.push(result);
            // this.response = (result);

          })}
        // }else{
        //   alert('there are no flights between'+" " +source+" "+ "and"+ " "+destination);
        //   break;
        // }
      }
    })

  }
  
  increaseShow(){
    this.show +=5;
  }
  

}
