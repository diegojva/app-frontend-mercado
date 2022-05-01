import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/auth/shared/login.service';
import { Producto } from '../../shared/producto.model';
import { ProductoService } from '../../shared/producto.service';
import { Puesto } from '../../shared/puesto.model';
import { PuestoService } from '../../shared/puesto.service';
import { Sector } from '../../shared/sector.mode';
import { Vendedor } from '../../shared/vendedor.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  public idPrueba: any;
  static id :number;
  static idSector :any;
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'unidadMedida','stock','sector','acciones'];
  dataSource: MatTableDataSource<Producto>;
  dataSourcePuesto: MatTableDataSource<Puesto>;
  static dataSourcePuesto2: MatTableDataSource<Puesto>;
  dataSourceVendedor: MatTableDataSource<Vendedor>;


  constructor(
    private productoService : ProductoService,
    private activatedRoute: ActivatedRoute ,
    private puestoService : PuestoService) { 
    }

  ngOnInit(): void {
    this.obtenerId();
  }

  obtenerId(){
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.idPrueba = Number(paramMap.get('id'));
      ListaProductosComponent.id = Number(paramMap.get('id'));
      this.puestoService.getPuestoById(ListaProductosComponent.id).subscribe(
        (data:any)=>{
          this.dataSourcePuesto = data;
          ListaProductosComponent.dataSourcePuesto2 = data;
          ListaProductosComponent.idSector = data['sector'];
        }
      )
      this.productoService.getProductosPorPuestoId( Number(paramMap.get('id'))).subscribe((data:any)=>{
        this.dataSource = new MatTableDataSource(data);
      });
   })
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el producto?');
    if (ok) {
      this.productoService.delete(id).subscribe(() => {
        this.obtenerId();
      });
    }
  }

  static obtenerSector(){
    return  ListaProductosComponent.idSector;
  }

}
