import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from 'src/app/login/service/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) { }

  canActivate(): boolean {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
