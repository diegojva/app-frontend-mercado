import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilanteDespachadorGuard } from '../guardianes/vigilante-despachador.guard';

import { LayoutComponent } from './layout/layout.component';
import { ListaMercadoDespachadorComponent } from './mercado/lista-mercado-despachador/lista-mercado-despachador.component';
import { DetalleOrdenComponent } from './ordenes/detalle-orden/detalle-orden.component';
import { EditarOrdenComponent } from './ordenes/editar-orden/editar-orden.component';
import { ListaOrdenesComponent } from './ordenes/lista-ordenes/lista-ordenes.component';
import { ListarOrdenesAtendidasComponent } from './ordenes/listar-ordenes-atendidas/listar-ordenes-atendidas.component';
import { EditarInfoDespachadorComponent } from './perfil-despachador/editar-info-despachador/editar-info-despachador.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  canActivateChild:[VigilanteDespachadorGuard],
  children: [
    {
      path: 'mercados',
      component: ListaMercadoDespachadorComponent,
    },
    {
      path: '',
      component: ListaOrdenesComponent,
    },
    {
      path: 'ordenes/orden/:id/detalles',
      component: DetalleOrdenComponent,
    },
    {
      path: 'ordenes/orden/:id/update',
      component: EditarOrdenComponent,
    },
    {
      path: 'ordenes/atendidas',
      component: ListarOrdenesAtendidasComponent,
    },
    {
      path: 'editar/informacion',
      component: EditarInfoDespachadorComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespachadorRoutingModule { }
