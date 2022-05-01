import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../home/index/index.component';
import { LayoutComponent } from './layout/layout.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { NuevoProductoComponent } from './productos/nuevo-producto/nuevo-producto.component';
import { ListaPuestosComponent } from './puestos/lista-puestos/lista-puestos.component';
import { NuevoPuestoComponent } from './puestos/nuevo-puesto/nuevo-puesto.component';
import { ListaSectoresComponent } from './sectores/lista-sectores/lista-sectores.component';
import { NuevoSectorComponent } from './sectores/nuevo-sector/nuevo-sector.component';
import { FormProductoComponent } from './shared/form-producto/form-producto.component';
import { FormPuestoComponent } from './shared/form-puesto/form-puesto.component';
import { Sector } from './shared/sector.mode';
import { ListaUnidadesMedidasComponent } from './unidad-medida/lista-unidades-medidas/lista-unidades-medidas.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
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
        path: 'vendedor/nuevo-sector',
        component: NuevoSectorComponent,
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
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
