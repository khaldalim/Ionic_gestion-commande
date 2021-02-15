import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCommandesPage } from './list-commandes.page';

const routes: Routes = [
  {
    path: '',
    component: ListCommandesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCommandesPageRoutingModule {}
