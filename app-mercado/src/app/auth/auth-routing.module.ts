import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../home/layout/layout.component';
import { NuevaSesionAdmComponent } from './login/nueva-sesion-adm/nueva-sesion-adm.component';
import { NuevaSesionComponent } from './login/nueva-sesion/nueva-sesion.component';
import { SelectRolComponent } from './login/select-rol/select-rol.component';
import { NuevoAdmComponent } from './nuevo-adm/nuevo-adm.component';
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
      {
        path: 'registro-adm/solo-personal-autorizado',
        component: NuevoAdmComponent,
      },
      {
        path: 'nueva-sesion-adm',
        component: NuevaSesionAdmComponent,
      },
      {
        path: 'select-rol/:id',
        component: SelectRolComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
