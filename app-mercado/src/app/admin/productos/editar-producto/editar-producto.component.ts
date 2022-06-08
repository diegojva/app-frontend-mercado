import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../shared/producto.model';
import { ProductoService } from '../../shared/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css'],
})
export class EditarProductoComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  private id: number;
  private id_puesto: any;
  private id_sector: any;
  public producto: Producto;

  constructor(
    private productoService: ProductoService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get('id'));
      this.productoService.get(this.id).subscribe((data: any) => {
        this.producto = data;
        this.id_puesto = data.puesto;
        this.id_sector = data.sector;
      });
    });
  }

  ngOnInit(): void {}

  actualizarProducto(producto: Producto) {
    producto.id = this.id;
    producto.puesto = this.id_puesto;
    producto.sector = this.id_sector;
    this.productoService.update(producto).subscribe(
      () => {
        this._snackBar.open('Actualizado con éxito!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['blue-snackbar'],
        });
        this.router.navigate([`/admin/vendedor/puestos/productos/${ producto.puesto.id}/edit`]);
      },
      (error: any) => {
        alert(
          'Algo salió mal... Verifica si los datos ingresados son correctos.'
        );
      }
    );
  }
}
