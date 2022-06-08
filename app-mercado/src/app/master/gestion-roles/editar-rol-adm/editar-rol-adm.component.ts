import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from '../../shared/rol.model';
import { RolService } from '../../shared/rol.service';

@Component({
  selector: 'app-editar-rol-adm',
  templateUrl: './editar-rol-adm.component.html',
  styleUrls: ['./editar-rol-adm.component.css']
})
export class EditarRolAdmComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  rol : any;

  constructor(
    private rolService: RolService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.activedRoute.paramMap.subscribe((paramMap) => {
      this.rolService.get(Number(paramMap.get('id'))).subscribe((data: any) => {
        this.rol = data;
      });
    });
  }

  ngOnInit(): void {}

  updateRol(rol: Rol) {
    rol.id = this.rol.id;
    this.rolService.update(rol).subscribe(
      () => {
        this._snackBar.open('Actualizado con éxito!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['white-snackbar']
        });
        this.router.navigate(['/master/adm/rol/lista-roles']);
      },
      (error: any) => {
        this._snackBar.open('Es posible que el Rol ya exista. Intenta con otro, por favor!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 4000,
          panelClass: ['blue-snackbar-error']
        });
      }
    );
  }

}
