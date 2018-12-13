import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

const USUARIO_NOMBRE = "admin";
const USUARIO_PASSWORD = "admin";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  usuario: Usuario;

  constructor() {
    this.usuario = undefined;
  }
  isLogged(): boolean {
    if (this.usuario) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.usuario = undefined;
  }

  login(u: Usuario): boolean {
    if (u && u.nombre === USUARIO_NOMBRE && u.password === USUARIO_PASSWORD) {
      this.usuario = u;
      return true;
    } else {
      this.usuario = undefined;
      return false;
    }
  }
}