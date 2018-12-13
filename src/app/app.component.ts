import { LoginService } from './providers/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inmobiliaria';

  constructor(private loginService: LoginService) { }

  logueado() {
    if (this.loginService.isLogged()) {
      return true;
    } else { return false; }
  }
}
