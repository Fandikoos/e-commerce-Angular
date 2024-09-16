import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../user.service';
import { error } from 'console';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent implements OnInit{
  
  users: User[] = [];

  constructor(private userService:UserService){}
  
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void{
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error) => {
        console.error("Error al cargar los productos", error);
      }
    );
  }

  deleteUser(userId:any): void{
    if (userId === undefined) {
      console.error("El ID del usuario es indefinido");
      return;
    }

    if(confirm("Are you sure that you want to delete this user?")){
      this.userService.deleteUser(userId).subscribe(
        () => {
          console.log(`El usuario con ${userId} ha sido eliminado`);
          this.users = this.users.filter(user => user.id !== userId);
          console.log(this.users);
        },
        (error) => {
          console.error("Error eliminando el usuario", error);
        }
      );
    }
  }

}
