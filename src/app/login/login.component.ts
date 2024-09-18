import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  username: string= "";
  password: string= "";
  errorMessage: string= "";

  constructor(private loginService:LoginService, private router:Router){}

  onSubmit(){
    console.log(this.username, this.password);
    this.loginService.login(this.username, this.password).subscribe(
      (response) => {
        console.log("Login succesfull", response);

        //Guardamos el token que viene en la respuesta
        const token =response.token;
        if(token){
          this.loginService.setToken(token);
          this.router.navigate(["home"]);
        } else {
          console.error("Token no recibido");
        }
      }
    );
  }

}
