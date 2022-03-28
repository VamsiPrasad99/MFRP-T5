import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightsService } from '../flights.service';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editservice = new FormGroup({
     _id: new FormControl(''),
    flightID: new FormControl(''),
   flightName : new FormControl(''),
   arrival :new FormControl(''),
   departure :  new FormControl(''),
   arrivalTime :  new FormControl(''),
   departureTime : new FormControl(''),
   durationTime : new FormControl(''),
   price : new FormControl('')})

  constructor(private router: ActivatedRoute ,private apii: FlightsService, private route :Router ,private http: HttpClient) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['_id']);
    this.apii.getData(this.router.snapshot.params['_id']).subscribe((result: any)=>{
      this.editservice = new FormGroup({
        _id: new FormControl(result['_id']),
        flightID : new FormControl(result['flightID']),
        flightName : new FormControl(result['flightName']),
        arrival :new FormControl(result['arrival']),
        departure :  new FormControl(result['departure']),
        arrivalTime :  new FormControl(result['arrivalTime']),
        departureTime : new FormControl(result['departureTime']),
        durationTime : new FormControl(result['durationTime']),
        price : new FormControl(result['price'])
      })
    })
  }
  update(){
    console.warn(this.editservice.value);
    this.apii.updateData(this.router.snapshot.params['_id'],this.editservice.value).subscribe((result)=>{
      console.warn(result);
      this.route.navigate(['adminui']);
      // this.apii.getData(this.response1);
    })
   
  }

}
