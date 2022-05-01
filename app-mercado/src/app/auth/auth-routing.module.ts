import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../home/layout/layout.component';
import { NuevaSesionComponent } from './login/nueva-sesion/nueva-sesion.component';
import { NuevoVendedorComponent } from './nuevo-vendedor/nuevo-vendedor.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: NuevaSesionComponent,
      },
      {
        path: 'registrar',
        component: NuevoVendedorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
