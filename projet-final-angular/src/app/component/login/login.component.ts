import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: string = '';
  password: string = '';
  message: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  send() {
    this.loginService.login(this.login, this.password).subscribe(
      (result) => {
        localStorage.setItem('login', this.login);
        localStorage.setItem(
          'auth',
          'Basic ' + btoa(this.login + ':' + this.password)
        );
        console.log(this.login);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.message = 'infos incorrect';
      }
    );
  }
}
