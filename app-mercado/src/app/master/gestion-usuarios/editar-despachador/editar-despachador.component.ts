import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Despachador } from 'src/app/auth/shared/despachador.mode';
import { DespachadorService } from 'src/app/despachador/shared/despachador.service';



@Component({
  selector: 'app-editar-despachador',
  templateUrl: './editar-despachador.component.html',
  styleUrls: ['./editar-despachador.component.css']
})
export class EditarDespachadorComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  despachador : any;

  constructor(
    private despachadorService: DespachadorService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.activedRoute.paramMap.subscribe((paramMap) => {
      this.despachadorService.getDespachadorById(Number(paramMap.get('id'))).subscribe((data: any) => {
        this.despachador = data;
      });
    });
  }

  ngOnInit(): void {}

  updateDespachador(despachador: Despachador) {
    despachador.id = this.despachador.id;
    this.despachadorService.update(despachador).subscribe(
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
