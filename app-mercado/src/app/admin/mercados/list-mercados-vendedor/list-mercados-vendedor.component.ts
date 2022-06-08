import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Mercado } from 'src/app/home/shared/market.model';
import { MarketService } from 'src/app/home/shared/market.service';

@Component({
  selector: 'app-list-mercados-vendedor',
  templateUrl: './list-mercados-vendedor.component.html',
  styleUrls: ['./list-mercados-vendedor.component.css']
})
export class ListMercadosVendedorComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'distrito', 'ubicacion'];
  dataSource: MatTableDataSource<Mercado>;

  constructor(private mercadoService:MarketService) { }

  ngOnInit(): void {
    this.obtenerSectores();
  }

  obtenerSectores(){
    this.mercadoService.getAllMercados().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

}
