import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = 'https://fakestoreapi.com/users';

  constructor(private httpService: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpService.get<User[]>(this.apiUrl);
  }

  getUserById(userId:number): Observable<User>{
    return this.httpService.get<User>(`${this.apiUrl}/${userId}`);
  }

  deleteUser(userId:number): Observable<any>{
    return this.httpService.delete(`${this.apiUrl}/${userId}`);
  }

  // Modificar usuario, por parametros recibira el id y un usuario,
  // El observable emitira un User y luego tenemos que pasarle la url de la api y el body, en este caso el user.
  modifyUser(userId:number, user:User): Observable<User>{
    return this.httpService.put<User>(`${this.apiUrl}/${userId}`, user);
  }
}
