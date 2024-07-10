import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, UpperCasePipe],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    public authService: AuthService,
    private cookieService: CookieService
  ) {}

  onUsernameChange(value: string) {
    this.username = value;
  }

  onPasswordChange(value: string) {
    this.password = value;
  }

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.errorMessage = '';
      this.cookieService.set('username', this.username); // Guardar el nombre de usuario en la cookie
      alert('Inicio de sesión exitoso');
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }

  logout() {
    this.authService.logout();
    this.cookieService.delete('username'); // Eliminar la cookie de nombre de usuario
    alert('Sesión cerrada');
  }
}
