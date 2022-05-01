import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../shared/producto.model';
import { ProductoService } from '../../shared/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  private id: number;
  private id_puesto: any;
  public producto:Producto;

  constructor(private productoService: ProductoService,
    private activeRoute: ActivatedRoute,
    private router: Router) { 
    this.activeRoute.paramMap.subscribe(paramMap =>{
      this.id = Number(paramMap.get('id'));
      this.productoService.get(this.id).subscribe((data:any)=>{
        this.producto=data;
        this.id_puesto=data.puesto;
      });
   })
  }
  

  ngOnInit(): void {
  }

  actualizarProducto(producto:Producto){
    producto.id = this.id;
    producto.puesto = this.id_puesto;
    this.productoService.update(producto).subscribe(()=>{
      this.router.navigate(['/admin/vendedor/puestos/lista-producto']);
    }, (error: any) => {
      alert('Algo salió mal... Verifica si los datos ingresados son correctos.')
    })
  }
}
