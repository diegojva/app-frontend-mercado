import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilanteAdmGuard } from '../guardianes/vigilante-adm.guard';
import { EditarMercadoAdmComponent } from './gestion-mercados/editar-mercado-adm/editar-mercado-adm.component';

import { ListaMercadosAdmComponent } from './gestion-mercados/lista-mercados-adm/lista-mercados-adm.component';
import { NuevoMercadoAdmComponent } from './gestion-mercados/nuevo-mercado-adm/nuevo-mercado-adm.component';
import { EditarRolAdmComponent } from './gestion-roles/editar-rol-adm/editar-rol-adm.component';
import { ListarRolesAdmComponent } from './gestion-roles/listar-roles-adm/listar-roles-adm.component';
import { NuevoRolAdmComponent } from './gestion-roles/nuevo-rol-adm/nuevo-rol-adm.component';
import { EditarSectorAdmComponent } from './gestion-sectores/editar-sector-adm/editar-sector-adm.component';
import { ListaSectoresAdmComponent } from './gestion-sectores/lista-sectores-adm/lista-sectores-adm.component';
import { NuevoSectorAdmComponent } from './gestion-sectores/nuevo-sector-adm/nuevo-sector-adm.component';
import { EditarUnidadMedidaAdmComponent } from './gestion-unidades-medidas/editar-unidad-medida-adm/editar-unidad-medida-adm.component';
import { ListaUnidadesAdmComponent } from './gestion-unidades-medidas/lista-unidades-adm/lista-unidades-adm.component';
import { NuevaUnidadMedidaAdmComponent } from './gestion-unidades-medidas/nueva-unidad-medida-adm/nueva-unidad-medida-adm.component';
import { EditarClienteComponent } from './gestion-usuarios/editar-cliente/editar-cliente.component';
import { EditarDespachadorComponent } from './gestion-usuarios/editar-despachador/editar-despachador.component';
import { EditarVendedorComponent } from './gestion-usuarios/editar-vendedor/editar-vendedor.component';
import { ListaUsuariosComponent } from './gestion-usuarios/lista-usuarios/lista-usuarios.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  canActivateChild:[VigilanteAdmGuard],
  children: [
    {
    path: 'adm/lista-mercados',
    component: ListaMercadosAdmComponent
    },
    {
      path: 'adm/nuevo-mercado',
      component: NuevoMercadoAdmComponent
    }
    ,
    {
      path: 'adm/lista-sectores',
      component: ListaSectoresAdmComponent
    },
    {
      path: 'adm/nuevo-sector',
      component: NuevoSectorAdmComponent
    },
    {
      path: 'adm/lista-unidades-medidas',
      component: ListaUnidadesAdmComponent
    },
    {
      path: 'adm/nueva-unidad-medida',
      component: NuevaUnidadMedidaAdmComponent
    },
    {
      path: 'adm/mercado/:id/editar',
      component: EditarMercadoAdmComponent
    },
    {
      path: 'adm/sector/:id/editar',
      component: EditarSectorAdmComponent
    },
    {
      path: 'adm/unidad-medida/:id/editar',
      component: EditarUnidadMedidaAdmComponent
    },
    {
      path: 'adm/rol/lista-roles',
      component: ListarRolesAdmComponent
    }
    ,
    {
      path: 'adm/rol/nuevo-rol',
      component: NuevoRolAdmComponent
    }
    ,
    {
      path: 'adm/rol/:id/editar',
      component: EditarRolAdmComponent
    },
    {
      path: '',
      component: ListaUsuariosComponent
    },
    {
      path: 'adm/vendedor/:id/editar',
      component: EditarVendedorComponent
    },
    {
      path: 'adm/despachador/:id/editar',
      component: EditarDespachadorComponent
    },
    {
      path: 'adm/cliente/:id/editar',
      component: EditarClienteComponent
    },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
