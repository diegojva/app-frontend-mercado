import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UnidadMedidaService } from 'src/app/admin/shared/unidad-medida.service';
import { UnidadMedida } from 'src/app/admin/shared/unidadMedida.model';

@Component({
  selector: 'app-nueva-unidad-medida-adm',
  templateUrl: './nueva-unidad-medida-adm.component.html',
  styleUrls: ['./nueva-unidad-medida-adm.component.css']
})
export class NuevaUnidadMedidaAdmComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private unidadMedidaService: UnidadMedidaService,
    private router: Router, private _snackBar: MatSnackBar){ }

  ngOnInit(): void {
  }

  registrarUnidadMedida(unidadMedida: UnidadMedida) {

    this.unidadMedidaService.create(unidadMedida).subscribe(
      (res:any)=>{
        this._snackBar.open('Creado con éxito!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['white-snackbar']
        });
        this.router.navigate([`/master/adm/lista-unidades-medidas`]);

      },
      (error: any)=> {
        this._snackBar.open('Es posible que la Medida ya exista. Intenta con otro, por favor!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 4000,
          panelClass: ['blue-snackbar-error']
        });
      }
    );
    
  }

}
