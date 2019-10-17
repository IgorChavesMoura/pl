import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {

    this.login();

  }

  login(){

    this.auth.currentUser = new User();
    this.auth.currentUser.name = 'Igor Moura';
    this.auth.currentUser.login = 'igormoura';

    this.router.navigate(['/institutes']);

  }

}
