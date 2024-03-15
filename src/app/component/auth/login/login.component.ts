import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false; // Variable para controlar la visibilidad del spinner

  logout: string = "d-none";

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]]
    });
  }

  ngOnInit(): void {
    this.verificaLogout();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.loading = true; // Mostrar el spinner al enviar el formulario
      this.authService.login(email, password).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
        }
      ).add(() => {
        this.loading = false; // Ocultar el spinner al completar la operación
      });
    }
    sessionStorage.removeItem("logout")
  }

  verificaLogout() {
    var logout = sessionStorage.getItem("logout");
    if (logout = "true") {
      this.logout = '';
    } else {
      this.logout = 'd-none'
    }
  }
}
