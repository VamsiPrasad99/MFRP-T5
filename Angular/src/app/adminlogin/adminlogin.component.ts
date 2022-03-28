import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightsService } from '../flights.service';
import { FooterService } from '../footer.service';
import { NavbarService } from '../navbar.service';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public loginform!: FormGroup;

  constructor(private router: ActivatedRoute ,private apii: FlightsService,private api:OffersService, private route :Router ,private http: HttpClient,public nav : NavbarService,public footer :FooterService) { }

  ngOnInit(): void {
    this.nav.hide()
    this.footer.hide()
  }
  login(login:any,pass:any) {
   if (login === "mohan@gmail.com" && pass === "mohan") {
        alert('Login Successfull');
        //this.loginform.reset();
        this.route.navigate(['adminui']);
      } 
      // else if(login === "rakesh@gmail.com" && pass === "rakesh")
      // {
      //   alert('Login Successfull')
      //   this.route.navigate(['adminui']);
      // }
      else{
        alert("user not found")
      }
   

  
  }
 
}