import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth/shared/login.service';
import { Producto } from '../../shared/producto.model';
import { ProductoService } from '../../shared/producto.service';
import { PuestoService } from '../../shared/puesto.service';
import { SectorService } from '../../shared/sector.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css'],
})
export class NuevoProductoComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  id: number;
  dataSource: any;
  dataSourcePuesto: any;
  dataSourceSector: any;

  constructor(
    private router: Router,
    private usuarioService: LoginService,
    private puestoService: PuestoService,
    private productoService: ProductoService,
    private activeRoute: ActivatedRoute,
    private sectorService: SectorService,
    private _snackBar: MatSnackBar
  ) {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get('idPrueba'));
      this.puestoService.getPuestoById(this.id).subscribe((data: any) => {
        this.dataSourcePuesto = data;
      });
      this.productoService
        .getProductosPorPuestoId(Number(paramMap.get('idPrueba')))
        .subscribe((data: any) => {
          this.dataSource = new MatTableDataSource(data);
        });
    });
  }

  ngOnInit(): void {}

  registrarProducto(producto: Producto) {
    producto.puesto = this.dataSourcePuesto;

    this.sectorService
      .get(this.dataSourcePuesto['sector']['id'])
      .subscribe((data: any) => {
        this.dataSourceSector = data;
        producto.sector = data;
        this.productoService.create(producto).subscribe(
          (res: any) => {
            this._snackBar.open('Creado con éxito!!', 'OK', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 3000,
              panelClass: ['blue-snackbar'],
            });
            this.router.navigate([
              `/admin/vendedor/puestos/productos/${this.id}/edit`,
            ]);
          },
          (error: any) => {}
        );
      });
  }
}
