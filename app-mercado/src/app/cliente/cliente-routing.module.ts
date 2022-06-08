import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilanteClienteGuard } from '../guardianes/vigilante-cliente.guard';

import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';
import { LayoutComponent } from './layout/layout.component';
import { ListaMercadosComponent } from './lista-mercados/lista-mercados.component';
import { ListaProductoViewComponent } from './lista-producto-view/lista-producto-view.component';
import { ListaPuestoViewComponent } from './lista-puesto-view/lista-puesto-view.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';

const routes: Routes = [
{
  path: '',
  component: LayoutComponent,
  canActivateChild:[VigilanteClienteGuard],
  children: [
    {
    path:'',
    component: ListaMercadosComponent
  },
  {
    path:'mercados/:id/puestos',
    component: ListaPuestoViewComponent
  },
  {
    path:'mercados/puestos/:id/productos',
    component: ListaProductoViewComponent
  },
  {
    path:'mercados/pedidos/:id',
    component: MisPedidosComponent
  },
  {
    path:'mercados/puestos/pedidos/:id/detalles',
    component: DetallePedidoComponent
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
