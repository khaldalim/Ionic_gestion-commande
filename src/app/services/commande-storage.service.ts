import {Injectable} from '@angular/core';
import {Commande} from '../modeles/commande';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommandeStorageService {

  constructor(private bdd: Storage, public  route: Router) {
  }

  public addCommande(commande: Commande) {
    this.bdd.set(commande.id + '', commande);
    console.log('commande ajouté avec succes');
    this.route.navigate(['/home']);
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
