import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-commerce';
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  isAuthenticated(){
    this.loginService.isAuthenticated();
  }
}
