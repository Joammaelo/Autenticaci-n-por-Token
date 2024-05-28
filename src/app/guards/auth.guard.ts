import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LogueoService } from '../services/logueo.service';

export const authGuard: CanActivateFn = (route, state) => {
  //Para saber si el usuario está autenticado, se inyecta el servicio LogueoService y se llama al método isAuth().
  const authService = inject(LogueoService);

  const router = inject(Router);

  //Si el usuario está autenticado, se retorna true, de lo contrario, se redirige al usuario a la página de inicio.
  if(authService.isAuth()){
    return true;
  }else{
    return router.createUrlTree(['/home']);
  }
};
