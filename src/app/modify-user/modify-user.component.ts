import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrl: './modify-user.component.css'
})
export class ModifyUserComponent implements OnInit{

  //Inicializamos el objetos user con sus propiedades para quitar el error del binding bidireccional
  user:User = {
    address: {
      city: '',
      street: '',
      number: 0,
      zipcode: ''
    },
    email: '',
    phone: '',
    name: {
      firstname: '',
      lastname: ''
    }
  };

  constructor(private userService:UserService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    //Obtenemos el valor de la id de la url, ES SOLO 'ID' porque asi esta definido en el app.module.ts
    const userId = this.route.snapshot.paramMap.get('id');
    if(userId){
      this.userService.getUserById(+userId).subscribe(
        (response:User) => {
          this.user = response;
        }
      );
    }
  }

  onSubmit(): void{
    if(this.user){
      this.userService.modifyUser(this.user.id, this.user).subscribe(
        () => {
          console.log("User with id: " + this.user?.id + " updated succesfully");
          console.log(this.user);
          this.router.navigate(["users"])
        },
        (error) => {
          console.error("Error al modificar producto,", error);
        }
      );
    }
  }

}
