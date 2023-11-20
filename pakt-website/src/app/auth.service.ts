import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../environment";

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {
  private authToken: string | null = null;
  constructor(private router: Router) {}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("auth_token");
    const addUrl = `${environment.apiUrl}books`;
    const editUrlPattern = new RegExp(`${environment.apiUrl}books/\\d+`); 

    if (token && (req.url === addUrl || editUrlPattern.test(req.url))) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }

  setToken(token: string): void {
    this.authToken = token;
  }

  getToken(): string | null {
    return this.authToken;
  }
  logout() {
    this.authToken = null;
    this.router.navigate(['/admin-login']);
  }
  isAuthenticated(): boolean {
    return this.authToken !== null;
  }
}
