import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formLogin = this.formBuilder.group({
    user:[null],
    password:[null]
  })


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
  }

  get user(){
    return this.formLogin.get('user')?.value;
  }

  get password(){
    return this.formLogin.get('password')?.value;
  }
}
