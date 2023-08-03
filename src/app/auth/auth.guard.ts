import { CanActivateFn, Router, NavigationExtras } from '@angular/router';
import { inject } from '@angular/core';
import { LoginServiceService } from './login-service.service';

export const authGuard: CanActivateFn = (route, state) => {
 
  const loginService = inject(LoginServiceService);
  const router = inject(Router);

  const navigationExtras: NavigationExtras = {
    queryParams: {  returnUrl: state.url }
    
  };

  if(loginService.isAuthenticate()){
  return true;
  }else{
    console.log("state-url",state.url );
  return router.createUrlTree(["/login"],navigationExtras);
  }
};
