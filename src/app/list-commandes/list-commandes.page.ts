import { Component, OnInit } from '@angular/core';
import {CommandeStorageService} from '../services/commande-storage.service';
import {Commande} from '../modeles/commande';

@Component({
  selector: 'app-list-commandes',
  templateUrl: './list-commandes.page.html',
  styleUrls: ['./list-commandes.page.scss'],
})
export class ListCommandesPage implements OnInit {

  commandes: Commande[];

  constructor(private cmService: CommandeStorageService) { }

  ngOnInit() {
    this.commandes = this.cmService.findAll();

  }

}
