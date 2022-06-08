import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Mercado } from 'src/app/home/shared/market.model';
import { MarketService } from 'src/app/home/shared/market.service';

@Component({
  selector: 'app-editar-mercado-adm',
  templateUrl: './editar-mercado-adm.component.html',
  styleUrls: ['./editar-mercado-adm.component.css']
})
export class EditarMercadoAdmComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  mercado : any;

  constructor(
    private mercadoService: MarketService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.activedRoute.paramMap.subscribe((paramMap) => {
      this.mercadoService.get(Number(paramMap.get('id'))).subscribe((data: any) => {
        this.mercado = data;
      });
    });
  }

  ngOnInit(): void {}

  updateMercado(mercado: Mercado) {
    mercado.id = this.mercado.id;
    this.mercadoService.update(mercado).subscribe(
      () => {
        this._snackBar.open('Actualizado con éxito!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['white-snackbar']
        });
        this.router.navigate([`/master/adm/lista-mercados`]);
        this.router.navigate(['/master/adm/lista-mercados']);
      },
      (error: any) => {
        alert('Es posible que el nombre del mercado ya exista. Intenta con otro, por favor.');
      }
    );
  }

}
