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


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule, 
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatChipsModule,
  ],
  exports: [

  ],providers: []
})
export class AdminModule { }
