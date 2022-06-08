import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Sector } from 'src/app/admin/shared/sector.model';
import { SectorService } from 'src/app/admin/shared/sector.service';

@Component({
  selector: 'app-lista-sectores-adm',
  templateUrl: './lista-sectores-adm.component.html',
  styleUrls: ['./lista-sectores-adm.component.css']
})
export class ListaSectoresAdmComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'accion'];
  dataSource: MatTableDataSource<Sector>;

  constructor(private sectorService: SectorService, private router: Router) { }

  ngOnInit(): void {
    this.getSectores();
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  getSectores() {
    this.sectorService.getSectores().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el sector?');
    if (ok) {
      this.sectorService.delete(id).subscribe(
        () => {
          alert('Eliminado con éxito.');
          this.getSectores();
        },
        (error) => {
          alert('El sector tiene puestos asociados.');
        }
      );
    }
  }

}
