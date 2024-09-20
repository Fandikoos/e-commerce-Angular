import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  constructor(private loginService:LoginService, private router:Router){}

  logout(){
    this.loginService.removeToken();
    this.router.navigate(['login']);
  }
}
