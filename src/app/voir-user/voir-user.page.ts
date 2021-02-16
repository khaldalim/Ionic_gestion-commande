import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../modeles/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-voir-user',
  templateUrl: './voir-user.page.html',
  styleUrls: ['./voir-user.page.scss'],
})
export class VoirUserPage implements OnInit {

  user: User;

  constructor(private activateRoute: ActivatedRoute, private userService: UserService, public route: Router) {
  }

  ngOnInit() {
    this.user = new User();
    this.userService.selectOne(this.activateRoute.snapshot.params.id).then((data) => {
      this.user.id = data.id;
      this.user.nom = data.nom;
      this.user.prenom = data.prenom;
      this.user.email = data.email;
    });
  }

  public updateForm(user: User) {
    this.route.navigate(['/update-user/' + user.id]);
  }

}
