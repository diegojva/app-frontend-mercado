import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/shared/login.service';
import { Puesto } from '../../shared/puesto.model';
import { PuestoService } from '../../shared/puesto.service';
import { Vendedor } from '../../shared/vendedor.model';

@Component({
  selector: 'app-nuevo-puesto',
  templateUrl: './nuevo-puesto.component.html',
  styleUrls: ['./nuevo-puesto.component.css'],
})
export class NuevoPuestoComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  vendedor: Vendedor;
  dataSource: any;

  constructor(
    private router: Router,
    private usuarioService: LoginService,
    private puestoService: PuestoService,
    private _snackBar: MatSnackBar,
  ) {
    
  }

  ngOnInit(): void {
    this.getUsuarioPorId();
  }

  getUsuarioPorId() {
    this.usuarioService
      .getVendedor(Number(sessionStorage.getItem('idUsuario')))
      .subscribe((data: any) => {
        this.dataSource = data;
      });
  }

  registrarPuesto(puesto: Puesto) {

    puesto.vendedor = this.dataSource;
    this.puestoService.create(puesto).subscribe(
      (res: any) => {
        this._snackBar.open('Creado con éxito!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['blue-snackbar']
        });
        this.router.navigate([`/admin/vendedor/puestos/${this.dataSource.id}`]);
      },
      (error: any) => {
        this._snackBar.open('Es posible que ya tengas un puesto con el mismo nombre. Intenta con otro, por favor!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 4000,
          panelClass: ['blue-snackbar-error']
        });
      }
    );
  }


}
