import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { ListaMercadosAdmComponent } from './gestion-mercados/lista-mercados-adm/lista-mercados-adm.component';
import { NuevoMercadoAdmComponent } from './gestion-mercados/nuevo-mercado-adm/nuevo-mercado-adm.component';
import { FormSectorAdmComponent } from './shared/form-sector-adm/form-sector-adm.component';
import { FormMercadoAdmComponent } from './shared/form-mercado-adm/form-mercado-adm.component';
import { ListaSectoresAdmComponent } from './gestion-sectores/lista-sectores-adm/lista-sectores-adm.component';
import { NuevoSectorAdmComponent } from './gestion-sectores/nuevo-sector-adm/nuevo-sector-adm.component';
import { ListaUnidadesAdmComponent } from './gestion-unidades-medidas/lista-unidades-adm/lista-unidades-adm.component';
import { NuevaUnidadMedidaAdmComponent } from './gestion-unidades-medidas/nueva-unidad-medida-adm/nueva-unidad-medida-adm.component';
import { FormUnidadMedidaAdmComponent } from './shared/form-unidad-medida-adm/form-unidad-medida-adm.component';
import { EditarMercadoAdmComponent } from './gestion-mercados/editar-mercado-adm/editar-mercado-adm.component';
import { EditarSectorAdmComponent } from './gestion-sectores/editar-sector-adm/editar-sector-adm.component';
import { EditarUnidadMedidaAdmComponent } from './gestion-unidades-medidas/editar-unidad-medida-adm/editar-unidad-medida-adm.component';
import { ListarRolesAdmComponent } from './gestion-roles/listar-roles-adm/listar-roles-adm.component';
import { NuevoRolAdmComponent } from './gestion-roles/nuevo-rol-adm/nuevo-rol-adm.component';
import { FormRolAdmComponent } from './shared/form-rol-adm/form-rol-adm.component';
import { EditarRolAdmComponent } from './gestion-roles/editar-rol-adm/editar-rol-adm.component';
import { ListaUsuariosComponent } from './gestion-usuarios/lista-usuarios/lista-usuarios.component';
import { EditarVendedorComponent } from './gestion-usuarios/editar-vendedor/editar-vendedor.component';
import { EditarClienteComponent } from './gestion-usuarios/editar-cliente/editar-cliente.component';
import { EditarDespachadorComponent } from './gestion-usuarios/editar-despachador/editar-despachador.component';
import { FormClienteComponent } from './shared/form-cliente/form-cliente.component';
import { FormVendedorComponent } from './shared/form-vendedor/form-vendedor.component';
import { FormDespachadorComponent } from './shared/form-despachador/form-despachador.component';



@NgModule({
  declarations: [
    LayoutComponent,
    ListaMercadosAdmComponent,
    NuevoMercadoAdmComponent,
    FormSectorAdmComponent,
    FormMercadoAdmComponent,
    ListaSectoresAdmComponent,
    NuevoSectorAdmComponent,
    ListaUnidadesAdmComponent,
    NuevaUnidadMedidaAdmComponent,
    FormUnidadMedidaAdmComponent,
    EditarMercadoAdmComponent,
    EditarSectorAdmComponent,
    EditarUnidadMedidaAdmComponent,
    ListarRolesAdmComponent,
    NuevoRolAdmComponent,
    FormRolAdmComponent,
    EditarRolAdmComponent,
    ListaUsuariosComponent,
    EditarVendedorComponent,
    EditarClienteComponent,
    EditarDespachadorComponent,
    FormClienteComponent,
    FormVendedorComponent,
    FormDespachadorComponent,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MaterialModule
  ]
})
export class MasterModule { }
