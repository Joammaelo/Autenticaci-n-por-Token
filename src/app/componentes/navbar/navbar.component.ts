import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LogueoService } from '../../services/logueo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: string | undefined;

  constructor(public auth: AuthService, private logueoService: LogueoService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.userName = user.name;
        this.logueoService.setToken('some-token'); // Establecer token de autenticación
      } else {
        this.logueoService.clearToken(); // Limpiar token si no hay usuario
      }
    });
  }

  logout() {
    const returnToUrl = window.location.origin;
    this.logueoService.clearToken(); // Limpiar token al cerrar sesión
    this.auth.logout();
    window.location.href = `https://${'dev-qfrrxmdr6mol6qs4.us.auth0.com'}/v2/logout?client_id=${'B4RFQqgBMUBXinyXlTQeNaFwvMt8eaRJ'}&returnTo=${returnToUrl}`;
  }
}
