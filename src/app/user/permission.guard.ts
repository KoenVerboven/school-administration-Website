import { CanActivateFn } from '@angular/router';

export const permissionGuard: CanActivateFn = (route, state) => {
  return true;
};
