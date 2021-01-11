import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions: { headers: HttpHeaders; };
  API_URL: string;
  TOKEN: any;

  constructor(
    private http: HttpClient
  ) {
    this.API_URL = environment.BASE_API_ENDPOINT;
    this.TOKEN = undefined;
    this.setHeader();
  }
  setHeader() {
    if (this.TOKEN !== undefined) {
      this.httpOptions = {
        headers: new HttpHeaders({
          // 'Content-Type': 'application/json',
          Accept: 'multipart/form-data',
          'x-access-token': this.TOKEN
        })
      };
    } else {
      this.httpOptions = {
        headers: new HttpHeaders({
          // 'Content-Type': 'application/json',
          Accept: 'multipart/form-data',
        })
      };
    }
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()) {
    return this.http.get(`${this.API_URL}${path}`, { headers: this.httpOptions.headers, params })
      .pipe(catchError(this.formatErrors));
  }

  post(path: any, body: object = {}) {
    return this.http.post(`${this.API_URL}${path}`, body, this.httpOptions).pipe(catchError(this.formatErrors));
  }


  postMultiData(path: string, file: FormData): Observable<any> {
    const httpOptionsimg = {
      headers: new HttpHeaders({
        Accept: 'multipart/form-data',
        'x-access-token': this.TOKEN !== undefined ? this.TOKEN : ''
      })
    };
    return this.http.post(`${this.API_URL}${path}`, file, httpOptionsimg).pipe(catchError(this.formatErrors));
  }

}
