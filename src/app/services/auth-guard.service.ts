import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private auth: AuthService
  ) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    console.log('next:');
    console.log(next);
    if ( this.auth.isAuthenticated() ) {
      console.log('paso el guard');
      return true;
    } else {
      console.log('bloqueado por el guard');
      return false;
    }
  }
}
