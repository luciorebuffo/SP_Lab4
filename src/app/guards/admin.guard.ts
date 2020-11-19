import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  usuario;

  constructor(private router : Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(localStorage.getItem("usuario") === null) {

        this.router.navigateByUrl("Login");
        
          
      }else{
  
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
        //console.log(this.usuario);
  
        if(this.usuario.estado && this.usuario.tipo == "admin")
        {
          
          
          return this.usuario.estado;
  
        }
        else{
  
          this.router.navigateByUrl("Login");
          
  
        }
    }
  }
  
}
