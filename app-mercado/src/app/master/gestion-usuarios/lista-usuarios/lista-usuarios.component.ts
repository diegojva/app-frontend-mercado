import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { VendedorServicioService } from 'src/app/admin/shared/vendedor-servicio.service';
import { Vendedor } from 'src/app/admin/shared/vendedor.model';
import { Despachador } from 'src/app/auth/shared/despachador.mode';
import { Cliente } from 'src/app/cliente/shared/cliente.model';
import { ClienteService } from 'src/app/cliente/shared/cliente.service';
import { DespachadorService } from 'src/app/despachador/shared/despachador.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  vendedores : any;
  despachadores : any;
  clientes : any;

  displayedColumnsVendedores: string[] = ['id', 'nombre', 'apellido','username','dni','estado','acciones'];
  dataSourceVendedores: MatTableDataSource<Vendedor>;

  displayedColumnsDespachadores: string[] = ['id', 'nombre', 'apellido','username','dni','estado','acciones'];
  dataSourceDespachadores: MatTableDataSource<Despachador>;

  displayedColumnsClientes: string[] = ['id', 'nombre', 'apellido','email','telefono','direccion','acciones'];
  dataSourceClientes: MatTableDataSource<Cliente>;

  constructor(private vendedorService: VendedorServicioService, 
              private despachadorService: DespachadorService,
              private clienteService: ClienteService,
              private router: Router) { }

  ngOnInit(): void {
    this.getVendedores();
    this.getDespachadores();
    this.getClientes();
  }

  //VENDEDORES
  applyFilter(value: string) {
    this.dataSourceVendedores.filter = value.trim().toLowerCase();
  }

  getVendedores() {
    this.vendedorService.getVendedores().subscribe((data: any) => {
      this.dataSourceVendedores = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el vendedor? Esto eliminará al vendedor y todas sus dependencias. Está acción no se puede deshacer.');
    if (ok) {
      this.vendedorService.delete(id).subscribe(
        () => {
          alert('Eliminado con éxito.');
          this.getVendedores();
        },
        (error) => {
          alert('El usuario tiene al menos una dependencia asociada.');
        }
      );
    }
  }
  
  //DESPACHADORES
  applyFilterDespachador(value: string) {
    this.dataSourceDespachadores.filter = value.trim().toLowerCase();
  }

  getDespachadores() {
    this.despachadorService.getDespachadores().subscribe((data: any) => {
      this.despachadores = data;
      this.dataSourceDespachadores = new MatTableDataSource(data);
    });
  }

  eliminarDespachador(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el despachador? Esto eliminará al despachador y todas sus dependencias. Está acción no se puede deshacer.');
    if (ok) {
      this.despachadorService.delete(id).subscribe(
        () => {
          alert('Eliminado con éxito.');
          this.getDespachadores();
        },
        (error) => {
          alert('El usuario tiene al menos una dependencia asociada.');
        }
      );
    }
  }

  //CLIENTES

  applyFilterClientes(value: string) {
    this.dataSourceClientes.filter = value.trim().toLowerCase();
  }

  getClientes() {
    this.clienteService.getClientes().subscribe((data: any) => {
      this.dataSourceClientes = new MatTableDataSource(data);
    });
  }

  eliminarCliente(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el cliente? Esto eliminará al cliente y todas sus dependencias. Está acción no se puede deshacer.');
    if (ok) {
      this.clienteService.delete(id).subscribe(
        () => {
          alert('Eliminado con éxito.');
          this.getClientes();
        },
        (error) => {
          alert('El usuario tiene al menos una dependencia asociada.');
        }
      );
    }
  }
}
