import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then((m) => m.ClienteModule),
  },
  {
    path: 'despachador',
    loadChildren: () => import('./despachador/despachador.module').then((m) => m.DespachadorModule),
  },
  {
    path: 'master',
    loadChildren: () => import('./master/master.module').then((m) => m.MasterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
