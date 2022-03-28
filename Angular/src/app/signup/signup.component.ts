import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public signupform !: FormGroup;
  constructor(private formbuilder : FormBuilder, private route : Router, private http : HttpClient) { }

  ngOnInit(): void {
    this.signupform = this.formbuilder.group({
      fullname : [''],
      email : [''],
      phno : [''],
      password : ['']

    })
  }

  Signup(){
    console.warn(this.signupform.value)
    this.http.post('http://localhost:3033/api/userdata',this.signupform.value)
    .subscribe(result=>{
      alert('Signup Successfull');
      this.signupform.reset();
      this.route.navigate(["login"]);
    },err=>{
      alert('Something went wrong')
    })
  }

}
