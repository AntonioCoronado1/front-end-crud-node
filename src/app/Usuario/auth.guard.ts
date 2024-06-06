import { inject } from '@angular/core';
import { CanActivateFn, Router} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  if(authService.isLogged()){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }
  
  
};
