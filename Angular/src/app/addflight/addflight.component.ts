import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(data: any) {
    this.http.post('http://localhost:9099/api/flights', data)
      .subscribe((result: any) => {
        console.warn("result", result);
        this.route.navigate(['adminui']);
      
      })
    console.warn(data);

  }
}
