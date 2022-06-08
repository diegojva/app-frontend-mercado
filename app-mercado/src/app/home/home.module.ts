import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { IndexComponent } from './index/index.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeProductsComponent } from './home-products/home-products.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    LayoutComponent,
    IndexComponent,
    HomeProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule

  ]
})
export class HomeModule { }
