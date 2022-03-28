import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 public logindata : any[] = [];
  public loginform!: FormGroup;
  constructor(private formbuilder: FormBuilder, private route: Router, private http: HttpClient, private api: UserdataService) { }

  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      email: [''],
      password: ['']
    })
  }

  login() {
    this.api.getuserdata().subscribe(result => {
        this.logindata.push(result);
        console.warn(result)
      const user = result.find((a: any) => {
        return a.email === this.loginform.value.email && a.password === this.loginform.value.password

      });
      if (user) {
        alert('Login Successfull');
        this.loginform.reset();
        this.route.navigate(['home']);
      } else {
        alert('user not found');
      }
    }, err => {
      alert('something went wrong')
    })

  }

}
