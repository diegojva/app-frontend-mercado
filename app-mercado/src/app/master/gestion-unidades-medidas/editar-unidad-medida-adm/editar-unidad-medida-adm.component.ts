import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UnidadMedidaService } from 'src/app/admin/shared/unidad-medida.service';
import { UnidadMedida } from 'src/app/admin/shared/unidadMedida.model';

@Component({
  selector: 'app-editar-unidad-medida-adm',
  templateUrl: './editar-unidad-medida-adm.component.html',
  styleUrls: ['./editar-unidad-medida-adm.component.css']
})
export class EditarUnidadMedidaAdmComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  unidadMedida : any;

  constructor(
    private unidadMedidaService: UnidadMedidaService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.activedRoute.paramMap.subscribe((paramMap) => {
      this.unidadMedidaService.get(Number(paramMap.get('id'))).subscribe((data: any) => {
        this.unidadMedida = data;
      });
    });
  }

  ngOnInit(): void {}

  updateUnidadMedida(unidadMedida: UnidadMedida) {
    unidadMedida.id = this.unidadMedida.id;
    this.unidadMedidaService.update(unidadMedida).subscribe(
      () => {
        this._snackBar.open('Actualizado con éxito!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['white-snackbar']
        });
        this.router.navigate(['/master/adm/lista-unidades-medidas']);
      },
      (error: any) => {
        this._snackBar.open('Es posible que el nombre de la Medida ya exista. Intenta con otro, por favor.!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 4000,
          panelClass: ['blue-snackbar-error']
        });
      }
    );
  }

}
