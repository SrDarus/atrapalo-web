import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private builder: FormBuilder ) { 
    this.formInit()
  }

  ngOnInit(): void {
  }

  login() {
    console.log("1")
  }

 

  formLogin: any

  formInit() {
    this.formLogin = this.builder.group({
      user: [ '' ],
      password: [ '' ]
    })
  }

}
