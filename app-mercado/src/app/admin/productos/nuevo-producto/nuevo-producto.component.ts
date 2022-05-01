import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth/shared/login.service';
import { NuevoPuestoComponent } from '../../puestos/nuevo-puesto/nuevo-puesto.component';
import { Producto } from '../../shared/producto.model';
import { ProductoService } from '../../shared/producto.service';
import { PuestoService } from '../../shared/puesto.service';
import { SectorService } from '../../shared/sector.service';
import { ListaProductosComponent } from '../lista-productos/lista-productos.component';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  private id: number;
  dataSource: any;
  dataSourcePuesto: any;
  dataSourceSector: any;
  msg='';
  constructor(
    private router: Router,
    private usuarioService: LoginService,
    private puestoService: PuestoService, 
    private productoService: ProductoService,
    private activeRoute: ActivatedRoute,
    private sectorService: SectorService
  ) {
    //this.getPuestoPorVendedorId();
    //this.getProductosByPuesto();
    this.activeRoute.paramMap.subscribe(paramMap =>{
      this.id = Number(paramMap.get('idPrueba'));
      this.puestoService.getPuestoById(this.id).subscribe(
        (data:any)=>{
          this.dataSourcePuesto = data;
        }
      )
      this.productoService.getProductosPorPuestoId( Number(paramMap.get('idPrueba'))).subscribe((data:any)=>{
        this.dataSource = new MatTableDataSource(data);
      });
   })
   }

  ngOnInit(): void {
  }

  /*getPuestoPorVendedorId(){
    this.usuarioService.getVendedor(Number(sessionStorage.getItem('idUsuario'))).subscribe((data:any) => {
      this.dataSource = data;
    });
  }*/

  /*getProductosByPuesto(){
    this.productoService.getProductosPorPuestoId(ListaProductosComponent.id).subscribe((data:any) => {
      this.dataSourcePuesto = data;
      console.log('sdsd',ListaProductosComponent.dataSourcePuesto2);
    });
  }*/

  registrarProducto(producto: Producto) {

    producto.puesto =  this.dataSourcePuesto;

    this.sectorService.get( this.dataSourcePuesto['sector']['id']).subscribe((data:any) => {
      this.dataSourceSector = data;
      producto.sector = data;
      this.productoService.create(producto).subscribe(
        (res:any)=>{
  
          alert('El producto se ha registrado con éxito' );
          this.router.navigate([`/admin/vendedor/puestos/${this.dataSource.id}`]);
        },
        (error: any)=> {
         
        }
      ); 
    });
    //producto.sector= this.dataSource['sector'];
    //console.log(producto,'dasd');
    //producto.sector = this.dataSource['sector'];


  }

  

}
