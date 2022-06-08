import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UnidadMedidaService } from '../../shared/unidad-medida.service';
import { UnidadMedida } from '../../shared/unidadMedida.model';

@Component({
  selector: 'app-lista-unidades-medidas',
  templateUrl: './lista-unidades-medidas.component.html',
  styleUrls: ['./lista-unidades-medidas.component.css']
})
export class ListaUnidadesMedidasComponent implements OnInit {

  private id :number;
  displayedColumns: string[] = ['id', 'abreviatura', 'descripcion'];
  dataSource: MatTableDataSource<UnidadMedida>;

  constructor(
   private unidadMedidaService :UnidadMedidaService
   , private router:Router) { }

  ngOnInit(): void {
    this.getUnidadesMedidas();
  }

  getUnidadesMedidas(){
    this.unidadMedidaService.getUnidadesMedidas().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
