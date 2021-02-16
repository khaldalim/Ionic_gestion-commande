import {Component, OnInit} from '@angular/core';
import {Commande} from '../modeles/commande';
import {CommandeStorageService} from '../services/commande-storage.service';
import {User} from '../modeles/user';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  user: User;

  constructor(private userService: UserService, private activateRoute: ActivatedRoute, private route: Router) {
  }

  ngOnInit() {

    // user vide
    this.user = new User();

    // si update => le remplir grace à l'objet user récupé avec "selectOne" avec comme parametre l'ID
    if (this.userService.selectOne(this.activateRoute.snapshot.params.id) != null) {
      this.userService.selectOne(this.activateRoute.snapshot.params.id).then((data) => {
        this.user.id = data.id;
        this.user.nom = data.nom;
        this.user.prenom = data.prenom;
        this.user.email = data.email;
      });
    }


  }

  ajouterUser() {
    if (this.userService.selectOne(this.activateRoute.snapshot.params.id) != null) {
      this.userService.update(this.user);
    } else {
      this.userService.create(this.user);
    }
    this.route.navigate(['/list-users']);


  }

}
