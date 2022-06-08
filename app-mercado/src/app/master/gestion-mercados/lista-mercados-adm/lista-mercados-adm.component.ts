import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Market } from 'src/app/cliente/shared/market.model';
import { MarketService } from 'src/app/home/shared/market.service';

@Component({
  selector: 'app-lista-mercados-adm',
  templateUrl: './lista-mercados-adm.component.html',
  styleUrls: ['./lista-mercados-adm.component.css']
})
export class ListaMercadosAdmComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'distrito', 'accion'];
  dataSource: MatTableDataSource<Market>;

  constructor(private marketService: MarketService, private router: Router) { }

  ngOnInit(): void {
    this.getMercados();
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  getMercados() {
    this.marketService.getAllMercados().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el mercado?');
    if (ok) {
      this.marketService.delete(id).subscribe(
        () => {
          alert('Eliminado con éxito.');
          this.getMercados();
        },
        (error) => {
          alert('El mercado tiene puestos asociados.');
        }
      );
    }
  }

}
