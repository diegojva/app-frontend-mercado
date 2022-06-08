import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/admin/shared/producto.service';
import { PuestoService } from 'src/app/admin/shared/puesto.service';
import { MarketService } from '../shared/market.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css'],
})
export class HomeProductsComponent implements OnInit {
  datos: any = [];
  datosPuestos: any = [];
  datosMercados: any = [];
  idMercado: any;
  productosPorMercado: any = [];

  constructor(
    private productoService: ProductoService,
    private puestoService: PuestoService,
    private mercadoService: MarketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productoService.getAllProductos().subscribe((data: any) => {
      this.datos = data;
    });
    this.getMercados();
  }

  verificarAcceso(id: number) {
    if (String(sessionStorage.getItem('rol')) == 'ROLE_USER') {
      console.log(String(sessionStorage.getItem('rol')));
      this.router.navigate(['/cliente/mercados/puestos/', id, 'productos']);
    }
    if (String(sessionStorage.getItem('rol')) == 'ROLE_ADMIN') {
      console.log(String(sessionStorage.getItem('rol')));
      this.router.navigate(['/admin/vendedor/puestos/', id]);
    }
    if (!sessionStorage.getItem('rol')) {
      this.router.navigate(['/auth']);
    }
  }

  onChange(id) {
    this.datos = [];
    this.puestoService.getPuestosByIdMercado(id).subscribe((data: any) => {
      this.datosPuestos = data;
      this.datosPuestos.forEach((element) => {
        this.productoService
          .getProductosPorPuestoId(element.id)
          .subscribe((data2: any) => {
            this.productosPorMercado = data2;
            this.productosPorMercado.forEach((element2) => {
              this.datos.push(element2);
            });
          });
      });
    });
  }

  getMercados() {
    this.mercadoService.getAllMercados().subscribe((data: any) => {
      this.datosMercados = data;
    });
  }
}
