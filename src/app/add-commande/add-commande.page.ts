import { Component, OnInit } from '@angular/core';
import {Commande} from '../modeles/commande';
import {CommandeService} from '../services/commande.service';
import {CommandeStorageService} from '../services/commande-storage.service';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.page.html',
  styleUrls: ['./add-commande.page.scss'],
})
export class AddCommandePage implements OnInit {

  commande: Commande;
  constructor(private cmService: CommandeStorageService) { }

  ngOnInit() {
    this.commande = new Commande();
  }

  ajouterCommande(){
    this.cmService.addCommande(this.commande);
    console.log('ajouterCommande');
  }



}
