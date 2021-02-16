import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-commande',
    loadChildren: () => import('./add-commande/add-commande.module').then( m => m.AddCommandePageModule)
  },
  {
    path: 'historique-commande',
    loadChildren: () => import('./historique-commande/historique-commande.module').then( m => m.HistoriqueCommandePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'voir-commande/:id',
    loadChildren: () => import('./voir-commande/voir-commande.module').then( m => m.VoirCommandePageModule)
  },
  {
    path: 'list-commandes',
    loadChildren: () => import('./list-commandes/list-commandes.module').then( m => m.ListCommandesPageModule)
  },
  {
    path: 'list-users',
    loadChildren: () => import('./list-users/list-users.module').then( m => m.ListUsersPageModule)
  },
  {
    path: 'voir-user',
    loadChildren: () => import('./voir-user/voir-user.module').then( m => m.VoirUserPageModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./add-user/add-user.module').then( m => m.AddUserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
