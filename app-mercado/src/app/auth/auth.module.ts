import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { NuevaSesionComponent } from './login/nueva-sesion/nueva-sesion.component';
import { FormSesionComponent } from './shared/form-sesion/form-sesion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatSelectModule } from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { LayoutComponent } from '../admin/layout/layout.component';
import { AdminModule } from '../admin/admin.module';
import { NuevoVendedorComponent } from './nuevo-vendedor/nuevo-vendedor.component';
import { FormRegistrarComponent } from './shared/form-registrar/form-registrar.component';



@NgModule({
  declarations: [
    NuevaSesionComponent,
    FormSesionComponent,
    NuevoVendedorComponent,
    FormRegistrarComponent,
    

  ],
  imports: [
    AuthRoutingModule,
    CommonModule, 
    AuthRoutingModule, 
    MaterialModule, 
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatChipsModule, 
  ]
})
export class AuthModule { }
