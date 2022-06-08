import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Sector } from 'src/app/admin/shared/sector.model';
import { SectorService } from 'src/app/admin/shared/sector.service';

@Component({
  selector: 'app-editar-sector-adm',
  templateUrl: './editar-sector-adm.component.html',
  styleUrls: ['./editar-sector-adm.component.css']
})
export class EditarSectorAdmComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  sector : any;

  constructor(
    private sectorService: SectorService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.activedRoute.paramMap.subscribe((paramMap) => {
      this.sectorService.get(Number(paramMap.get('id'))).subscribe((data: any) => {
        this.sector = data;
      });
    });
  }

  ngOnInit(): void {}

  updateSector(sector: Sector) {
    sector.id = this.sector.id;
    this.sectorService.update(sector).subscribe(
      () => {
        this._snackBar.open('Actualizado con éxito!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['white-snackbar']
        });
        this.router.navigate(['/master/adm/lista-sectores']);
      },
      (error: any) => {
        this._snackBar.open('Es posible que el nombre del sector ya exista. Intenta con otro, por favor.!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 4000,
          panelClass: ['blue-snackbar-error']
        });
      }
    );
  }

}
