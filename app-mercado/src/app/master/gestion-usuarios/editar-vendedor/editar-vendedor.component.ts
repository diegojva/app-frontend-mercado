import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { VendedorServicioService } from 'src/app/admin/shared/vendedor-servicio.service';
import { Vendedor } from 'src/app/admin/shared/vendedor.model';

@Component({
  selector: 'app-editar-vendedor',
  templateUrl: './editar-vendedor.component.html',
  styleUrls: ['./editar-vendedor.component.css']
})
export class EditarVendedorComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  vendedor : any;

  constructor(
    private vendedorService: VendedorServicioService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.activedRoute.paramMap.subscribe((paramMap) => {
      this.vendedorService.get(Number(paramMap.get('id'))).subscribe((data: any) => {
        this.vendedor = data;
      });
    });
  }

  ngOnInit(): void {}

  updateVendedor(vendedor: Vendedor) {
    vendedor.id = this.vendedor.id;
    this.vendedorService.update(vendedor).subscribe(
      () => {
        this._snackBar.open('Actualizado con éxito!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['white-snackbar']
        });
        this.router.navigate(['/master']);
      },
      (error: any) => {
        this._snackBar.open('No es posible realizar la actualización. Intenta con otros datos, por favor!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 4000,
          panelClass: ['blue-snackbar-error']
        });
      }
    );
  }


}
