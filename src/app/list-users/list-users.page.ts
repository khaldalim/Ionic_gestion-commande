import { Component, OnInit } from '@angular/core';
import {Commande} from '../modeles/commande';
import {CommandeStorageService} from '../services/commande-storage.service';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../modeles/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.page.html',
  styleUrls: ['./list-users.page.scss'],
})
export class ListUsersPage implements OnInit {
  users: User[];

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.load();
  }

  // fonction à chaque entrer dans la page
  ionViewWillEnter(){
    this.load();
}

  public load(){
  this.users = this.userService.findAll();
}

  afficherUser(id: number) {
    //  this.route.navigate(['/voir-commande/' + id]);
    this.route.navigateByUrl('/voir-user/' + id);
  }

  Number(id: string) {
    const x = id;
    const y: number = + x;
    return y;
  }


}
