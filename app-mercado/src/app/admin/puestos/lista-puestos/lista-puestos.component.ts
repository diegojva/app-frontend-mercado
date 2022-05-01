import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from 'src/app/auth/shared/login.service';
import { Puesto } from '../../shared/puesto.model';
import { Vendedor } from '../../shared/vendedor.model';
import { PuestoService } from '../../shared/puesto.service';
import { VendedorServicioService } from '../../shared/vendedor-servicio.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-puestos',
  templateUrl: './lista-puestos.component.html',
  styleUrls: ['./lista-puestos.component.css']
})
export class ListaPuestosComponent implements OnInit {


  private id :number;
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'sector','acciones'];
  dataSource: MatTableDataSource<Puesto>;
  dataSourceVendedor: MatTableDataSource<Vendedor>;

  constructor(private puestoService:PuestoService,
   private usuarioServicio :LoginService
   , private router:Router) { }

  ngOnInit(): void {
    this.getPuestosPorUsuarioId();
  }

  getPuestosPorUsuarioId(){
    this.usuarioServicio.getVendedor(Number(sessionStorage.getItem('idUsuario'))).subscribe((data:any) => {
      this.dataSourceVendedor = data;
      this.puestoService.getPuestosPorIdVendedor(data['id']).subscribe((data:any)=>{
        this.dataSource = new MatTableDataSource(data);
      })
    });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el puesto?');
    if (ok) {
      this.puestoService.delete(id).subscribe(() => {
        this.getPuestosPorUsuarioId();
      },err=>{
        alert('No puedes eliminar el puesto. Intenta eliminar los productos primero, por favor.')
      });
    }
  }

}
