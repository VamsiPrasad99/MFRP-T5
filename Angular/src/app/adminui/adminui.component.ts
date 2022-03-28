import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FlightsService } from '../flights.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-adminui',
  templateUrl: './adminui.component.html',
  styleUrls: ['./adminui.component.css']
})
export class AdminuiComponent implements OnInit {
  head= ["Flight ID", "Flight Name","Departure","Arrival","Departure Time","Arrival Time","Duration","Fare","Operations"]
public response : Observable<Data[]> ;
public flightData : any[] = [];



@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

  constructor(private api: FlightsService, private http: HttpClient, private route: Router,public nav : NavbarService) {
    this.nav.hide();
    this.response = this.api.getapi();
    this.api.getapi().subscribe(data => {
      console.log(data)
      this.flightData = data;
    })
    console.log(this.response)
  }
  
  Addflight(){
    this.route.navigate(['addflight']);
  }
  ngOnInit(): void {
  }
  deleteData(item: any) {

    this.api.deleteData(item).subscribe((result) => {
      console.warn('result', result)
      this.api.getapi().subscribe(data => {
        console.log(data)
        this.flightData = data;
      })
    })
  }
}
