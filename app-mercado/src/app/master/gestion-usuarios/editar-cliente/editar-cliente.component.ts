import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/cliente/shared/cliente.model';
import { ClienteService } from 'src/app/cliente/shared/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  cliente : any;

  constructor(
    private cienteService: ClienteService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.activedRoute.paramMap.subscribe((paramMap) => {
      this.cienteService.getClienteById(Number(paramMap.get('id'))).subscribe((data: any) => {
        this.cliente = data;
      });
    });
  }

  ngOnInit(): void {}

  updateCliente(cliente: Cliente) {
    cliente.id = this.cliente.id;
    this.cienteService.update(cliente).subscribe(
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
