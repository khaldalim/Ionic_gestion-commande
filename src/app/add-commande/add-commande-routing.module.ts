import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCommandePage } from './add-commande.page';

const routes: Routes = [
  {
    path: '',
    component: AddCommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCommandePageRoutingModule {}
