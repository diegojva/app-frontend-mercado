import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';
import { Market } from '../shared/market.model';
import { MarketService } from '../shared/market.service';

@Component({
  selector: 'app-lista-mercados',
  templateUrl: './lista-mercados.component.html',
  styleUrls: ['./lista-mercados.component.css'],
})
export class ListaMercadosComponent implements OnInit {
  cliente: any;
  displayedColumns: string[] = ['id', 'nombre', 'distrito', 'accion'];
  dataSource: MatTableDataSource<Market>;
  constructor(
    private marketService: MarketService,
    private clienteService: ClienteService
  ) {
    this.clienteService
      .getClienteById(Number(sessionStorage.getItem('idUsuario')))
      .subscribe((data: any) => {
        this.cliente = data;
      });
  }

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
}
