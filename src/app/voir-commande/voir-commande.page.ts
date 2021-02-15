import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-voir-commande',
  templateUrl: './voir-commande.page.html',
  styleUrls: ['./voir-commande.page.scss'],
})
export class VoirCommandePage implements OnInit {

  id: string;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
  }

}
