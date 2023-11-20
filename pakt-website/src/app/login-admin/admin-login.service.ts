import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environment";
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  login(username: string, password: string): Observable<any> {
    const body = { "username" :username, "password" :password };
   
    return this.http.post(`${environment.apiUrl}login-user`, body).pipe(
      map((response: any) => {
        const token = response.token;
        this.authService.setToken(token);
        return response;
      })
    );
  }
}
