import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { sha512 } from 'js-sha512';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string = 'tamilselvan@mailinator.com'
  password: string = 'Staller123#'
  constructor(private loginService: LoginService, private router: Router) { }


  ngOnInit() {
  }

  onSubmit() {
    this.loginService.checkLogin(this.name, sha512(this.password)).subscribe(resp => {
      this.loginService.loginDetails = resp.data;
      if (resp.data.email) {
        this.router.navigate(['horses'])
      }
    })
  }
  clear() {
    this.name = ""
    this.password = ""
  }
}
