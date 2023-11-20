
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminLoginService } from './admin-login.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private adminLoginService: AdminLoginService, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.adminLoginService.login(username, password).subscribe(
        response => {          
        // Save the token on successful login
        this.authService.setToken(response.details.token);
        
        localStorage.setItem('auth_token', response.details.token);
          alert("Login success");
          this.router.navigate(['/dashboard']);  
        },
        error => {
          // Handle login error
          alert(`Invalid credential`);
          console.error('Login failed:', error);
        }
      );
    }
  }
}
