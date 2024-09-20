import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://fakestoreapi.com/auth/login';


  constructor(private httpService:HttpClient) { }

  login(username:string, password:string): Observable<any>{
    const loginData = {
      username: username,
      password: password
    };

    return this.httpService.post(this.apiUrl, loginData);
  }

  setToken(token:string){
    localStorage.setItem('authToken', token); //Almacenamos el token en la localStorage
  }

  getToken(): string | null {
    return localStorage.getItem('authToken'); //Obtenemos el token
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    console.log('token actual: ' + token);
    return !!token; //Verificamos si el token existe
  }

  removeToken(){
    localStorage.clear();
  }



  
  
}
