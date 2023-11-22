import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private route: Router,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    this.formLogin = this.criarFormLogin();
  }

  ngOnInit(): void {
    localStorage.removeItem('login');
    localStorage.removeItem('nome');
    localStorage.removeItem('administrador');
    localStorage.removeItem('token');
  }

  public criarFormLogin(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  public submitForm() {
    const { username, password } = this.formLogin.value;
    this.formLogin.reset();

    this.loginService.login(username, password).subscribe(
      (resp) => {
        this.route.navigate(['']);
      },
      (err) => {
        console.error('Erro ao fazer login:', err);
      }
    );
  }
}
