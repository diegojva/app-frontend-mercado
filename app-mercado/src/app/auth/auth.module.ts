import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { NuevaSesionComponent } from './login/nueva-sesion/nueva-sesion.component';
import { FormSesionComponent } from './shared/form-sesion/form-sesion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatSelectModule } from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { RecaptchaModule } from 'ng-recaptcha';
import { NuevoVendedorComponent } from './nuevo-vendedor/nuevo-vendedor.component';
import { FormRegistrarComponent } from './shared/form-registrar/form-registrar.component';
import { FormRegistrarAdmComponent } from './shared/form-registrar-adm/form-registrar-adm.component';
import { NuevoAdmComponent } from './nuevo-adm/nuevo-adm.component';
import { NuevaSesionAdmComponent } from './login/nueva-sesion-adm/nueva-sesion-adm.component';
import { FormSesionAdmComponent } from './shared/form-sesion-adm/form-sesion-adm.component';
import { SelectRolComponent } from './login/select-rol/select-rol.component';



@NgModule({
  declarations: [
    NuevaSesionComponent,
    FormSesionComponent,
    NuevoVendedorComponent,
    FormRegistrarComponent,
    FormRegistrarAdmComponent,
    NuevoAdmComponent,
    NuevaSesionAdmComponent,
    FormSesionAdmComponent,
    SelectRolComponent,

  ],
  imports: [
    AuthRoutingModule,
    CommonModule, 
    MaterialModule, 
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatChipsModule, 
    RecaptchaModule
  ]
})
export class AuthModule { }
