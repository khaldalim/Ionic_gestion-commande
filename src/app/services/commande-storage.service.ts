import {Injectable} from '@angular/core';
import {Commande} from '../modeles/commande';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CommandeStorageService {

  constructor(private bdd: Storage) {
  }

  public addCommande(commande: Commande) {
    this.bdd.set(commande.id + '', commande);
    console.log('commande ajouté avec succes');
  }



  public selectOne(id: string){
    return this.bdd.get(id); // promise
  }

  findAll() {
    let commandes = [];
    commandes = [];
    this.bdd.forEach((v, k) => {
      commandes.push(v);
    });
    return commandes;
  }


}
