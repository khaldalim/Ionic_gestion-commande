import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoirCommandePageRoutingModule } from './voir-commande-routing.module';

import { VoirCommandePage } from './voir-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoirCommandePageRoutingModule
  ],
  declarations: [VoirCommandePage]
})
export class VoirCommandePageModule {}
