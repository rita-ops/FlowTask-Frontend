import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface LoginModel {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Input() errorMessage = '';
  @Input() isBusy = false;

  @Output() loginSubmit = new EventEmitter<LoginModel>();

  loginModel: LoginModel = {
    username: '',
    password: ''
  };

  showPassword = false;

  submit(): void {

    // ✅ FRONTEND VALIDATION
    if (!this.loginModel.username || !this.loginModel.password) {
      this.errorMessage = 'Please fill the required fields';
      return;
    }

    this.loginSubmit.emit(this.loginModel);
  }
}