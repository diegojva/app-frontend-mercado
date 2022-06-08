import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Sector } from 'src/app/admin/shared/sector.model';
import { SectorService } from 'src/app/admin/shared/sector.service';

@Component({
  selector: 'app-nuevo-sector-adm',
  templateUrl: './nuevo-sector-adm.component.html',
  styleUrls: ['./nuevo-sector-adm.component.css']
})
export class NuevoSectorAdmComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private sectorService: SectorService,
    private router: Router, private _snackBar: MatSnackBar){ }

  ngOnInit(): void {
  }

  registrarSector(sector: Sector) {

    this.sectorService.create(sector).subscribe(
      (res:any)=>{
        this._snackBar.open('Creado con éxito!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['white-snackbar']
        });
        this.router.navigate([`/master/adm/lista-sectores`]);
      },
      (error: any)=> {
        this._snackBar.open('Es posible que el Sector ya exista. Intenta con otro, por favor!!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 4000,
          panelClass: ['blue-snackbar-error']
        });
      }
    );
    
  }

}
