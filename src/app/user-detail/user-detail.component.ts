import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})

export class UserDetailComponent implements OnInit{

  user:User;

  constructor(private userService:UserService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(userId).subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        console.error("Error al mostrar usuario", error);
      }
    );
  }

  backUserPage(){
    this.router.navigate(["users"]);
  }

}
