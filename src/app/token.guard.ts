import { R3SelectorScopeMode } from '@angular/compiler';
import { CanActivateFn } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
export const tokenGuard: CanActivateFn = (route, state) => {
   return true;
};
