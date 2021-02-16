import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommandeStorageService} from '../services/commande-storage.service';
import {Commande} from '../modeles/commande';

@Component({
  selector: 'app-voir-commande',
  templateUrl: './voir-commande.page.html',
  styleUrls: ['./voir-commande.page.scss'],
})
export class VoirCommandePage implements OnInit {


  commande: Commande;

  constructor(private activateRoute: ActivatedRoute, private cmStorage: CommandeStorageService) {
  }

  ngOnInit() {
    this.commande = new Commande();
    this.cmStorage.selectOne(this.activateRoute.snapshot.params.id).then((data) => {
      this.commande.id = data.id;
      this.commande.client = data.client;
      this.commande.libelle = data.libelle;
    });
  }

}
