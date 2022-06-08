import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Puesto } from '../../shared/puesto.model';
import { Sector } from '../../shared/sector.model';
import { SectorService } from '../../shared/sector.service';

@Component({
  selector: 'app-lista-sectores',
  templateUrl: './lista-sectores.component.html',
  styleUrls: ['./lista-sectores.component.css']
})
export class ListaSectoresComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion'];
  dataSource: MatTableDataSource<Sector>;

  constructor(private sectorService:SectorService) { }

  ngOnInit(): void {
    this.obtenerSectores();
  }

  obtenerSectores(){
    this.sectorService.getSectores().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

}
