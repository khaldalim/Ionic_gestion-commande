import { Injectable } from '@angular/core';
import {User} from '../modeles/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private bdd: Storage) { }


  public addUser(user: User) {
    this.bdd.set(user.id + '', user);
    console.log('commande ajouté avec succes');
  }
}
