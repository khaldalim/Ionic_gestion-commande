import { Injectable } from '@angular/core';
import {Commande} from '../modeles/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor() { }

  public findAll(){}

  public findById(id: number){}

  public save(commande: Commande){
    console.log(commande);
  }

  public delete(id: number){}



}
