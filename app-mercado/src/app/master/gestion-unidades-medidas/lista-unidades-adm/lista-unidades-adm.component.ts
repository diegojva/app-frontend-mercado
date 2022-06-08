import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UnidadMedidaService } from 'src/app/admin/shared/unidad-medida.service';
import { UnidadMedida } from 'src/app/admin/shared/unidadMedida.model';

@Component({
  selector: 'app-lista-unidades-adm',
  templateUrl: './lista-unidades-adm.component.html',
  styleUrls: ['./lista-unidades-adm.component.css']
})
export class ListaUnidadesAdmComponent implements OnInit {

  displayedColumns: string[] = ['id', 'abreviatura', 'descripcion', 'accion'];
  dataSource: MatTableDataSource<UnidadMedida>;

  constructor(private unidadMedidadService: UnidadMedidaService, private router: Router) { }

  ngOnInit(): void {
    this.getUnidadesMedidas();
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  getUnidadesMedidas() {
    this.unidadMedidadService.getUnidadesMedidas().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el sector?');
    if (ok) {
      this.unidadMedidadService.delete(id).subscribe(
        () => {
          alert('Eliminado con éxito.');
          this.getUnidadesMedidas();
        },
        (error) => {
          alert('No se puede eliminar...');
        }
      );
    }
  }

}
