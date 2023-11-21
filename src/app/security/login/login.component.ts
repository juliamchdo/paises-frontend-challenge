import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin:FormGroup;

  constructor(private fb:FormBuilder, private loginService:LoginService, private route:Router) { 
    this.formLogin = this.criarFormLogin();
  }

  ngOnInit(): void {
  }

  public criarFormLogin() : FormGroup{
    return this.fb.group({
      username:["", [Validators.required, Validators.minLength(5)]],
      password:["", [Validators.required, Validators.minLength(5)]]
    })
  }
  public isFormControlInvalid(controlName : string):boolean {
    return !!(this.formLogin.get(controlName)?.invalid && this.formLogin.get(controlName)?.touched)
  }
  public submitForm(){
    const {username, password} = this.formLogin.value;
    console.log(username, password)
    this.formLogin.reset;

    this.loginService.login(username, password).subscribe(
      resp => {
        this.route.navigate(['']);
      },

      err => {

      }
    )
  }
  

}
