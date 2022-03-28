import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { Data } from '../data';
import { FlightsService } from '../flights.service';
import { FooterService } from '../footer.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show = 8;
  public count = 0;
  min = new Date();
  max = new Date(this.min.getFullYear(), this.min.getMonth() + 6, this.min.getDate());
  @ViewChild('source')
  source!: any;

  @ViewChild('destination')
  destination!: any;
  date: any
  public sampleData: any[] = [];
  public exclusiveDeals: any[] = []
  public response: Observable<Data[]>;
  x: any;
  constructor(private api: FlightsService, private http: HttpClient, private route: Router,public nav:NavbarService,public footer:FooterService) {
    this.nav.show();
    this.footer.show();
    
    this.response = this.api.getapi();
    this.api.getapi().subscribe(data => {
      console.log(data)
      this.exclusiveDeals = data;
    })
    console.log(this.response)
    
   
  }

  onBlur(event: any) {
    console.log(event)
    let data = { ...this.Places };
    this.Places = Object.values(data);
    if (event) {

      setTimeout(() => {

        if (this.count === 0) {
          let index = this.Places.findIndex(x => x === this.source.nativeElement.value);
          this.Places.splice(index, 1);
          console.log(this.Places);
          this.count++;
        }
      }, 500);


    }
  }
  getFlights(source: string, destination: string) {
    console.warn(source);
    console.warn(destination);
    this.api.getapi().subscribe((data: any) => {
      console.log(data);
      this.sampleData = []
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
          // else{
          //   alert('there are no flights between'+" " +source+" "+ "and"+ " "+destination);
          //   break;
          // }
          
        
        //else{
        //   alert('no flights found in between these routes')
        // }
      }

    })
    var a = (document.getElementById('date') as HTMLInputElement).value;
    this.date = a;


  }
  increaseShow() {
    this.show += 4;
  }






  control = new FormControl();
  Places: any[] = ['Visakhapatnam', 'Hyderabad', 'Chennai', 'Banglore'];
  filteredPlaces!: Observable<string[]>;

  ngOnInit() {
    this.filteredPlaces = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.Places.filter(Place => this._normalizeValue(Place).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}

