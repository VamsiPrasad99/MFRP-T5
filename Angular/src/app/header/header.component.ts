import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavbarService } from '../navbar.service';
import { Userdata } from '../userdata';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //public response: Observable<Userdata[]>;
  public userdetails : any[] = [];
  displayName :any = null;
  constructor(private api: UserdataService, private http: HttpClient, private route: Router, public nav : NavbarService) {
    // this.response = this.api.getuserdata();
    // this.api.getuserdata().subscribe(data => {
    //   console.log(data)

    //   this.userdetails = data;
    //   //console.warn(data.fullname)
    // })
    // console.log(this.response)
    // this.displayName = this.userdetails
  }
 
 

  ngOnInit(): void {
  }

}
