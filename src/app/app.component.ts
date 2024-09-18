import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce';

  constructor(private loginService: LoginService){}

  //Controlamos que el usuario este logeado para mostrar o no el header
  get isLoggedIn(): boolean{
    return this.loginService.isLoggedIn();
  }
}
