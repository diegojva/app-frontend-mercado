import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/cliente/shared/orden.model';
import { OrdenService } from 'src/app/cliente/shared/orden.service';
import { DespachadorService } from 'src/app/despachador/shared/despachador.service';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  idPuesto : number;
  id: number;
  orden: any;
  form: FormGroup;
  items : any = [];
  despachadores : any;
  selected : any;

  constructor(
    private ordenService: OrdenService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private despachadorService : DespachadorService,
    private _snackBar: MatSnackBar
  ) {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get('id'));
      this.ordenService.get(this.id).subscribe((data: any) => {
        this.idPuesto = data['items'][0]['producto']['puesto']['id'];
        this.orden = data;
        this.form.patchValue(data);
        this.form.controls['cliente'].setValue(data['cliente']['nombre']);
        this.verificarEstadoPedido();
      });
    });
    this.despachadorService.getDespachadoresByEstados("DISPONIBLE","OCUPADO").subscribe((despachadores : any ) =>{
      this.despachadores = despachadores;
    })
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
      despachador: ['',[Validators.required]]
    });
    this.selected = this.form.value['despachador'];
  }

  actualizarEstadoPedido(orden: any) {
    this.orden.estado = orden.estado;
    this.orden.despachador = orden.despachador;
    this.ordenService.update(this.orden).subscribe(ordenResponse => {
      this._snackBar.open('Se ha actualizado el estado de la orden!!', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
        this.router.navigate(['/admin/vendedor/pedidos/',this.idPuesto]);
    }, (error)=>{
      this._snackBar.open('No se pudo realizar la actualización!!', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 4000,
        panelClass: ['blue-snackbar-error']
      });
    })
  }

  verificarEstadoPedido(){
    if(this.orden.estado === 'ATENDIDO'){
      this.form.controls?.['despachador'].disable();
    }
  }

}
