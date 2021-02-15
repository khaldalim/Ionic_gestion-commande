import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCommandePageRoutingModule } from './add-commande-routing.module';

import { AddCommandePage } from './add-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCommandePageRoutingModule
  ],
  declarations: [AddCommandePage]
})
export class AddCommandePageModule {}
