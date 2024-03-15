import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias-angular';

  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
