import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductsComponent } from './home-products/home-products.component';
import { IndexComponent } from './index/index.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'productos',
        component: HomeProductsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
