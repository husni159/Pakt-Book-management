import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environment";
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient, private authService: AuthService) { }
  bookdet : any ;
  apiUrl : string = "";
  getBooks(page : number, filterValues: any = {}): Observable<any> {
    this.apiUrl  = `${environment.apiUrl}search?page=${page}&perpage=${environment.perpage}`;
    if(filterValues) {
      const queryString = this.objectToQueryString(filterValues);
      this.apiUrl = this.apiUrl + '&'+queryString;
    }
    return this.http.get<any>(this.apiUrl);
  }

  getBookById(bookId: number): Observable<any> {
    const url = `${environment.apiUrl}books/${bookId}`;
    return this.http.get<any>(url);
  }

  addBook(book: any): Observable<any> {
    const url = `${environment.apiUrl}books`;
    return this.http.post(url, book);
  }

  editBook(id: number, book: any): Observable<any> {
    const url = `${environment.apiUrl}books/${id}`;
    return this.http.put(url, book);
  }

  deleteBook(id: number): Observable<any> {
    const url = `${environment.apiUrl}books/${id}`;
    return this.http.delete(url);
  }

  objectToQueryString(obj: any) {
    
    const keyValuePairs :any = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== null&& obj[key] !=='' && obj[key] !== undefined) {
         keyValuePairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
      }
    }    
    return keyValuePairs.join('&');
  }
}
