import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurConnecteService {
  constructor() {}

  canActivate(): boolean {
    if (localStorage.getItem('auth')) {
      return true;
    } else {
      return false;
    }
  }
}
