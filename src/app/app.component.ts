import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias-angular';

  constructor(private router: Router, private authService: AuthService) { }

  goBack(): void {
    this.router.navigate(['/']);
  }

  cerrarSesion() {
    this.authService.logout();
    sessionStorage.setItem("logout", "true");
    this.router.navigate(['/signin']);
  }
}
