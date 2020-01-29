import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class HorsesService {

  horses: any[];
  constructor(private http: HttpClient, private loginSevice: LoginService) { }

  getHorses() {
    let headersOptions = {
      headers: new HttpHeaders({
        'Accept': "application/json",
        "Authorization": "Bearer " + this.loginSevice.loginDetails.access_token
      })
    }

    return this.http.get('http://dev.api.staller.show/v1/horses', headersOptions)
  }
  createHorse(horse) {
    let headersOptions = {
      headers: new HttpHeaders({
        'Accept': "application/json",
        "Authorization": "Bearer " + this.loginSevice.loginDetails.access_token
      })
    }

    return this.http.post('http://dev.api.staller.show/v1/horses', horse, headersOptions)
  }
  updateHorse(horse) {
    let headersOptions = {
      headers: new HttpHeaders({
        'Accept': "application/json",
        "Authorization": "Bearer " + this.loginSevice.loginDetails.access_token
      })
    }

    return this.http.put('http://dev.api.staller.show/v1/horses/' + horse.id, horse, headersOptions)
  }
  deleteHorse(horse) {
    let headersOptions = {
      headers: new HttpHeaders({
        'Accept': "application/json",
        "Authorization": "Bearer " + this.loginSevice.loginDetails.access_token
      })
    }
    return this.http.delete('http://dev.api.staller.show/v1/horses/' + horse.id, headersOptions).subscribe(res => {
      this.horses.splice(this.horses.indexOf(horse), 1);
    })
  }

  getHorse(horseId) {
    let headersOptions = {
      headers: new HttpHeaders({
        'Accept': "application/json",
        "Authorization": "Bearer " + this.loginSevice.loginDetails.access_token
      })
    }
    return this.http.get('http://dev.api.staller.show/v1/horses/' + horseId, headersOptions)
  }
}
