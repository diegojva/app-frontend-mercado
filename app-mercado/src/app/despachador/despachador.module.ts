import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespachadorRoutingModule } from './despachador-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatSelectModule } from '@angular/material/select';
import { LayoutComponent } from './layout/layout.component';
import { ListaOrdenesComponent } from './ordenes/lista-ordenes/lista-ordenes.component';
import { ListaMercadoDespachadorComponent } from './mercado/lista-mercado-despachador/lista-mercado-despachador.component';
import { DetalleOrdenComponent } from './ordenes/detalle-orden/detalle-orden.component';
import { EditarOrdenComponent } from './ordenes/editar-orden/editar-orden.component';
import { ListarOrdenesAtendidasComponent } from './ordenes/listar-ordenes-atendidas/listar-ordenes-atendidas.component';
import { EditarInfoDespachadorComponent } from './perfil-despachador/editar-info-despachador/editar-info-despachador.component';



@NgModule({
  declarations: [
    LayoutComponent,
    ListaOrdenesComponent,
    ListaMercadoDespachadorComponent,
    DetalleOrdenComponent,
    EditarOrdenComponent,
    ListarOrdenesAtendidasComponent,
    EditarInfoDespachadorComponent,
  ],
  imports: [
    CommonModule,
    DespachadorRoutingModule,
    MaterialModule,
    MatSelectModule,
    ReactiveFormsModule,
  ]
})
export class DespachadorModule { }
