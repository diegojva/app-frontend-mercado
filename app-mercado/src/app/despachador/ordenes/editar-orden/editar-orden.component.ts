import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenService } from 'src/app/cliente/shared/orden.service';

@Component({
  selector: 'app-editar-orden',
  templateUrl: './editar-orden.component.html',
  styleUrls: ['./editar-orden.component.css']
})
export class EditarOrdenComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  id: number;
  orden: any;
  form: FormGroup;
  items : any = [];
  despachadores : any;
  idPedido : any;

  constructor(
    private ordenService: OrdenService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) { 
    this.activeRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get('id'));
      this.ordenService.get(this.id).subscribe((data: any) => {
        this.orden = data;
        this.items = data['items']
        this.form.patchValue(data);
        this.form.controls['cliente'].setValue(data['cliente']['nombre']);

      });
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [
        '',
        [
        ],
      ],

      cliente: ['', []],
      estado: ['', [Validators.required]],
    });
  }

  actualizarEstadoPedido(orden: any) {
    this.orden.estado = orden.estado;
    this.ordenService.update(this.orden).subscribe(ordenResponse => {
      this._snackBar.open('Se ha actualizado el estado de la orden!!', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000,
        panelClass: ['orange-snackbar']
      });
        this.router.navigate(['/despachador']);
    }, (error)=>{
      this._snackBar.open('No se pudo realizar la actualización!!', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 4000,
        panelClass: ['blue-snackbar-error']
      });
    })
  }
}
