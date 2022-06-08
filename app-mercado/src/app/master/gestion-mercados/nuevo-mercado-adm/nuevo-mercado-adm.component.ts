import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Market } from 'src/app/cliente/shared/market.model';
import { MarketService } from 'src/app/home/shared/market.service';

@Component({
  selector: 'app-nuevo-mercado-adm',
  templateUrl: './nuevo-mercado-adm.component.html',
  styleUrls: ['./nuevo-mercado-adm.component.css']
})
export class NuevoMercadoAdmComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private marketService: MarketService,
    private router: Router, private _snackBar: MatSnackBar){ }

  ngOnInit(): void {
  }

  registrarSector(mercado: Market) {

    this.marketService.createMercado(mercado).subscribe(
      (res:any)=>{
        this._snackBar.open('Creado con éxito!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['white-snackbar']
        });
        this.router.navigate([`/master/adm/lista-mercados`]);
      },
      (error: any)=> {
        this._snackBar.open('Es posible que el mercado ya exista. Intenta con otro nombre, por favor!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 4000,
          panelClass: ['blue-snackbar-error']
        });
      }
    );
    
  }

}
