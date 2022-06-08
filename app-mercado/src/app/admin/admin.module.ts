import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MaterialModule } from '../material/material.module';
import { MatSelectModule } from '@angular/material/select';


import { ListaPuestosComponent } from './puestos/lista-puestos/lista-puestos.component';
import { NuevoPuestoComponent } from './puestos/nuevo-puesto/nuevo-puesto.component';
import { FormPuestoComponent } from './shared/form-puesto/form-puesto.component';
import { ListaSectoresComponent } from './sectores/lista-sectores/lista-sectores.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { NuevoProductoComponent } from './productos/nuevo-producto/nuevo-producto.component';
import { FormProductoComponent } from './shared/form-producto/form-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { NuevoSectorComponent } from './sectores/nuevo-sector/nuevo-sector.component';
import { FormSectorComponent } from './shared/form-sector/form-sector.component';
import { ListaUnidadesMedidasComponent } from './unidad-medida/lista-unidades-medidas/lista-unidades-medidas.component';
import { EditarPuestoComponent } from './puestos/editar-puesto/editar-puesto.component';
import { ListaPedidosComponent } from './pedidos/lista-pedidos/lista-pedidos.component';
import { DetallePedidosAdmComponent } from './pedidos/detalle-pedidos-adm/detalle-pedidos-adm.component';
import { EditarPedidoComponent } from './pedidos/editar-pedido/editar-pedido.component';
import { ListMercadosVendedorComponent } from './mercados/list-mercados-vendedor/list-mercados-vendedor.component';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    LayoutComponent,
    ListaPuestosComponent,
    NuevoPuestoComponent,
    FormPuestoComponent,
    ListaSectoresComponent,
    ListaProductosComponent,
    NuevoProductoComponent,
    FormProductoComponent,
    EditarProductoComponent,
    NuevoSectorComponent,
    FormSectorComponent,
    ListaUnidadesMedidasComponent,
    EditarPuestoComponent,
    ListaPedidosComponent,
    DetallePedidosAdmComponent,
    EditarPedidoComponent,
    ListMercadosVendedorComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule, 
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatChipsModule,
    NgxSpinnerModule
    
  ],
  exports: [

  ],providers: []
})
export class AdminModule { }
