import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginDetails: any = {};

  constructor(private http: HttpClient) { }

  checkLogin(name, password) {
    const obj = new HttpParams()
      .set('email', name)
      .set('password', password);
    let headersOptions = {
      headers: new HttpHeaders({
        'Accept': "application/json",
        'Content-Type': "application/x-www-form-urlencoded"
      })
    }

    return this.http.post('http://dev.api.staller.show/v1/users/login', obj, headersOptions)
  }

}
