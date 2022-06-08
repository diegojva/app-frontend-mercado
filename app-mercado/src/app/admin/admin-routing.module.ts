import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstVigilanteGuard } from '../guardianes/first-vigilante.guard';
import { IndexComponent } from '../home/index/index.component';
import { LayoutComponent } from './layout/layout.component';
import { ListMercadosVendedorComponent } from './mercados/list-mercados-vendedor/list-mercados-vendedor.component';
import { DetallePedidosAdmComponent } from './pedidos/detalle-pedidos-adm/detalle-pedidos-adm.component';
import { EditarPedidoComponent } from './pedidos/editar-pedido/editar-pedido.component';
import { ListaPedidosComponent } from './pedidos/lista-pedidos/lista-pedidos.component';

import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { NuevoProductoComponent } from './productos/nuevo-producto/nuevo-producto.component';
import { EditarPuestoComponent } from './puestos/editar-puesto/editar-puesto.component';
import { ListaPuestosComponent } from './puestos/lista-puestos/lista-puestos.component';
import { NuevoPuestoComponent } from './puestos/nuevo-puesto/nuevo-puesto.component';
import { ListaSectoresComponent } from './sectores/lista-sectores/lista-sectores.component';
import { FormPuestoComponent } from './shared/form-puesto/form-puesto.component';
import { ListaUnidadesMedidasComponent } from './unidad-medida/lista-unidades-medidas/lista-unidades-medidas.component';

const routes: Routes = [
  {
    
    path: '',
    component: LayoutComponent,
    canActivateChild:[FirstVigilanteGuard],
    children: [
      {
        path: 'vendedor/puestos/:id',
        component: ListaPuestosComponent,
      },
      {
        path: 'vendedor/nuevo-puesto',
        component: NuevoPuestoComponent,
      }, 
      {
        path: 'vendedor/puestos/:id/edit',
        component: FormPuestoComponent,
      },
      {
        path: 'vendedor/sectores',
        component: ListaSectoresComponent,
      },
      {
        path: 'vendedor/mercados',
        component: ListMercadosVendedorComponent,
      },
   
      {
        path: 'vendedor/puestos/productos/:id/edit',
        component: ListaProductosComponent,
      },
      {
        path: 'vendedor/puestos/productos/:id/update',
        component: EditarProductoComponent,
      },
      {
        path: 'vendedor/puestos/lista-productos',
        component: ListaProductosComponent,
      },
      {
        path: 'vendedor/puestos/productos/:idPrueba/nuevo-producto',
        component: NuevoProductoComponent,
      },
      {
        path: 'vendedor/unidades-medidas',
        component: ListaUnidadesMedidasComponent,
      },
      {
        path: 'vendedor/puestos/:id/edit-status',
        component: EditarPuestoComponent
      },
      {
        path: 'vendedor/pedidos/:id',
        component: ListaPedidosComponent
      },
      {
        path: 'vendedor/mercados/pedidos/:id/detalles',
        component: DetallePedidosAdmComponent
      },
      {
        path: 'vendedor/mercados/pedidos/:id/update',
        component: EditarPedidoComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
