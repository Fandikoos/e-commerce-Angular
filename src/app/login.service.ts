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

    return this.httpService.post(this.apiUrl, loginData, {
      headers: { 'xsrfHeaderName': ''}
    });
  }

  //Metodo para almacenar el token
  setToken(token: string): void{
    localStorage.setItem('authToken', token);
  }

  //Metodo para coger el token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  //Metodo para eliminar el token al cerrar sesion
  logout(): void{
    localStorage.removeItem('authToken');
  }

  //Metodo booleano para saber si hay token (si hay alguien registrado)
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
