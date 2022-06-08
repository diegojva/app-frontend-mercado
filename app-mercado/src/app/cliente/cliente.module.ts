import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListaMercadosComponent } from './lista-mercados/lista-mercados.component';
import { MaterialModule } from '../material/material.module';
import { MatSelectModule } from '@angular/material/select';
import { ListaPuestoViewComponent } from './lista-puesto-view/lista-puesto-view.component';
import { ListaProductoViewComponent } from './lista-producto-view/lista-producto-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [
    LayoutComponent,
    ListaMercadosComponent,
    ListaPuestoViewComponent,
    ListaProductoViewComponent,
    MisPedidosComponent,
    DetallePedidoComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MaterialModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatStepperModule
  ]
})
export class ClienteModule { }
