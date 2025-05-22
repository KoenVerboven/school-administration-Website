import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./services/auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
  authenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
          route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
      ): boolean | Promise<boolean> | Observable<boolean>  {
        this.authService.authenticated.subscribe({
          next:(data) =>{
            this.authenticated = data
          }
      }      
    )

    if(this.authenticated)
    {
      return true;
    } 
    else
    {
      this.router.navigate(['/login']);
      return false;
    }
       
  }
}