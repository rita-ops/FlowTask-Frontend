import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { LoginComponent, LoginModel } from './login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,   // ✅ FIX *ngIf
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentUser: any = null;
  errorMessage = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const saved = localStorage.getItem('flowtask-user');
    if (saved) {
      this.currentUser = JSON.parse(saved);
    }
  }

login(model: LoginModel): void {

  this.errorMessage = '';

  this.http.post('http://localhost:5072/api/auth/login', model)
    .subscribe({
      next: (user: any) => {

        this.currentUser = user;
        localStorage.setItem('flowtask-user', JSON.stringify(user));

        this.router.navigate(['/projects']);
      },

      error: (err) => {

        // ✅ WRONG CREDENTIALS
        if (err.status === 401) {
          this.errorMessage = 'Username or password incorrect';
        } else {
          this.errorMessage = 'Server error. Please try again later';
        }
      }
    });
}

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('flowtask-user');
    this.router.navigate(['/login']);
  }

  goProjects() {
    this.router.navigate(['/projects']);
  }

  goAdmin() {
    this.router.navigate(['/admin']);
  }

  goLogin() {
    this.router.navigate(['/login']);
  }
}