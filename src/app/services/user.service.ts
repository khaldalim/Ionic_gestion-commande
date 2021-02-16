import {Injectable} from '@angular/core';
import {User} from '../modeles/user';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor(private bdd: Storage, private route: Router) {
  }


  public create(user: User) {
    this.bdd.set(user.id + '', user);
  }



  public update(user: User) {
    this.bdd.set(user.id, user);

  }

  public delete(id: string) {
    this.bdd.remove(id);

  }

  public selectOne(id: string) {
    return this.bdd.get(id); // promise
  }

  findAll() {
    let users = [];
    users = [];
    this.bdd.forEach((v, k) => {
      users.push(v);
    });
    return users;
  }
}
