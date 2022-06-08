import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Despachador } from 'src/app/auth/shared/despachador.mode';
import { DespachadorService } from '../../shared/despachador.service';

@Component({
  selector: 'app-editar-info-despachador',
  templateUrl: './editar-info-despachador.component.html',
  styleUrls: ['./editar-info-despachador.component.css']
})
export class EditarInfoDespachadorComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  form : FormGroup;
  despachador : Despachador = new Despachador();
  constructor(private despachadorService: DespachadorService,
              private formBuilder: FormBuilder,
              private router: Router,
              private _snackBar: MatSnackBar) { 
      this.despachadorService.getDespachadorById(Number(sessionStorage.getItem('idUsuario'))).subscribe((despachador)=>{
        this.despachador = despachador;
      })
    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      estado: ['', [Validators.required]],
    });
  }

  actualizarDespachador(despachador: any){
    this.despachador.estado = despachador.estado;
    this.despachadorService.update( this.despachador).subscribe((despachador)=>{
      this._snackBar.open('Actualizado con éxito!!', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000,
        panelClass: ['orange-snackbar']
      });
      this.router.navigate(['despachador']);
    },(error)=>{
      this._snackBar.open('No hay productos agregados al detalle!!', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 4000,
        panelClass: ['blue-snackbar-error']
      });
    })
  }

}
