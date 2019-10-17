import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:User;
  adms: User[] = [];


  constructor() { }
}
