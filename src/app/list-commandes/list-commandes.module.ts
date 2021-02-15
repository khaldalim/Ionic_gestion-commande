import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCommandesPageRoutingModule } from './list-commandes-routing.module';

import { ListCommandesPage } from './list-commandes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCommandesPageRoutingModule
  ],
  declarations: [ListCommandesPage]
})
export class ListCommandesPageModule {}
