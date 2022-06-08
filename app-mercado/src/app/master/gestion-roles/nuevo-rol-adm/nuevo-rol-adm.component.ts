import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Rol } from '../../shared/rol.model';
import { RolService } from '../../shared/rol.service';

@Component({
  selector: 'app-nuevo-rol-adm',
  templateUrl: './nuevo-rol-adm.component.html',
  styleUrls: ['./nuevo-rol-adm.component.css']
})
export class NuevoRolAdmComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private rolService: RolService,
    private router: Router, private _snackBar: MatSnackBar){ }

  ngOnInit(): void {
  }

  registrarRol(rol: Rol) {

    this.rolService.create(rol).subscribe(
      (res:any)=>{
        this._snackBar.open('Creado con éxito!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['white-snackbar']
        });
        this.router.navigate([`/master/adm/rol/lista-roles`]);
      },
      (error: any)=> {
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
