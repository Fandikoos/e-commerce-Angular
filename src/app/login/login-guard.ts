import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../login.service";
import { ignoreElements } from "rxjs";
import { faL } from "@fortawesome/free-solid-svg-icons";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private loginService:LoginService, private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.loginService.isAuthenticated()){
            return true; //El usuario esta autetificando, permitimos el acceso
        } else {
            this.router.navigate(['login']);  //Redirigir al login sino esta autenticado
            return false;
        }
    }
    
}