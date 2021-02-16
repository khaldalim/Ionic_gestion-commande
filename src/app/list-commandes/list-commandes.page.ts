import { Component, OnInit } from '@angular/core';
import {CommandeStorageService} from '../services/commande-storage.service';
import {Commande} from '../modeles/commande';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-commandes',
  templateUrl: './list-commandes.page.html',
  styleUrls: ['./list-commandes.page.scss'],
})
export class ListCommandesPage implements OnInit {

  commandes: Commande[];

  constructor(private cmService: CommandeStorageService, private route: Router) { }

  ngOnInit() {
    this.commandes = this.cmService.findAll();

  }


  afficherCommande(id: number) {
  //  this.route.navigate(['/voir-commande/' + id]);
    this.route.navigateByUrl('/voir-commande/' + id);
  }
}
