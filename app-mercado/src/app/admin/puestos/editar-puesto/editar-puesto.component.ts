import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Puesto } from '../../shared/puesto.model';
import { PuestoService } from '../../shared/puesto.service';
import { VendedorServicioService } from '../../shared/vendedor-servicio.service';

@Component({
  selector: 'app-editar-puesto',
  templateUrl: './editar-puesto.component.html',
  styleUrls: ['./editar-puesto.component.css'],
})
export class EditarPuestoComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  nombreSector: string;
  nombreMercado: string;
  id: number;
  puesto: any;
  vendedor: any;

  constructor(
    private puestoService: PuestoService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private vendedorService: VendedorServicioService,
    private _snackBar: MatSnackBar
  ) {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get('id'));
      this.puestoService.getPuestoById(this.id).subscribe((data: any) => {
        this.puesto = data;
        this.nombreSector = data['sector']?.['nombre'];
        this.nombreMercado = data['mercado']?.['nombre'];
        this.getVendedorByPuesto();
      });
    });
  }

  ngOnInit(): void {}

  updatePuesto(puesto: any) {
    puesto.id = this.id;
    puesto.vendedor = this.vendedor;
    this.puestoService.update(puesto).subscribe(
      () => {
        this._snackBar.open('Actualizado con éxito!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['blue-snackbar']
        });
        this.router.navigate(['/admin/vendedor/puestos/:id']);
      },
      (error: any) => {
        this._snackBar.open('Es posible que el nombre del puesto ya exista. Intenta con otro, por favor.!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 4000,
          panelClass: ['blue-snackbar-error']
        });
      }
    );
  }

  getVendedorByPuesto() {
    this.vendedorService
      .getVendedorPorPuestoId(this.id)
      .subscribe((data: any) => {
        this.vendedor = data;
      });
  }
}
