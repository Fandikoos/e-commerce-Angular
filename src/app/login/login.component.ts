import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    this.loginService.login(this.username, this.password).subscribe(
      (response) => {
        const token = response.token;
        if (token) {
          this.loginService.setToken(token); //Almacenamos el token
          console.log(token);
          this.router.navigate(['home']);
        } else {
          this.errorMessage = "Error: Token no recibido";
        }
      },
      (error) => {
        this.errorMessage = "Credenciales incorrectas";
      }
    );
  }
}
