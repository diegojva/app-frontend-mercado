import {Component,EventEmitter, OnInit,Output,} from '@angular/core';
import {  AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Producto } from 'src/app/admin/shared/producto.model';
import { ProductoService } from 'src/app/admin/shared/producto.service';
import { PuestoService } from 'src/app/admin/shared/puesto.service';
import { ClienteService } from '../shared/cliente.service';
import { MarketService } from '../shared/market.service';
import { OrderItem } from '../shared/orden-item.model';
import { Order } from '../shared/orden.model';
import { OrdenService } from '../shared/orden.service';
import { PagoContraEntrega } from '../shared/pago-contra-entrega.model';
import { PagoContraEntregaService } from '../shared/pago-contra-entrega.service';

@Component({
  selector: 'app-lista-producto-view',
  templateUrl: './lista-producto-view.component.html',
  styleUrls: ['./lista-producto-view.component.css'],
})
export class ListaProductoViewComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  form: FormGroup;
  productos: Producto[];
  quantity: number;
  cliente: any;

  myControlProducto = new FormControl('', [, Validators.required]);
  productosFiltrados$: Observable<Producto[]>;

  @Output() onSave: EventEmitter<any> = new EventEmitter();

  id: number;
  nombreMercado: string;
  nombrePuesto: string;
  dataSource: MatTableDataSource<Producto>;
  displayedColumns: string[] = [
    'id',
    'nombre',
    'medida',
    'precio',
    'disponible',
    'acciones',
  ];

  orderLines: OrderItem[] = [];
  previewTotal = 0;
  previewTotalProductos = 0;
  step = 0;

  dataSourceOrden: MatTableDataSource<OrderItem>;
  displayedColumnsOrden: string[] = [
    '#',
    'nombre',
    'precio',
    'cantidad',
    'subtotal',
    'acciones',
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productoService: ProductoService,
    private mercadoService: MarketService,
    private ordenService: OrdenService,
    private clienteService: ClienteService,
    private puestoService: PuestoService,
    private router: Router,
    private pagoContraEntrega: PagoContraEntregaService,
    private _snackBar: MatSnackBar
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.mercadoService
        .getByPuestoId(Number(paramMap.get('id')))
        .subscribe((data: any) => {
          this.nombreMercado = data.nombre;
        });
      const id: number = Number(paramMap.get('id'));
      this.puestoService.getPuestoById(id).subscribe((data: any) => {
        this.nombrePuesto = data.nombre;
      });
    });
    this.obtenerInfoProducto();
    
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      producto: this.myControlProducto,
      quantity: new FormControl('', [, Validators.required, Validators.min(1)]),
      montoAPagar: new FormControl('', [
        ,
        Validators.required,
        Validators.min(1)

      ]),
      nombreCompleto: new FormControl('', [
        ,
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(80),
      ]),
    });

    this.productosFiltrados$ = this.myControlProducto.valueChanges.pipe(
      map((val) => this.filtrarProductos(val))
    );
    this.getCliente();
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  
  obtenerInfoProducto() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get('id'));
      this.productoService
        .getProductosPorPuestoId(this.id)
        .subscribe((data: any) => {
          this.dataSource = new MatTableDataSource(data);
          this.productos = data;
        });
    });
  }
  agregarProducto() {
    let size = this.orderLines.length;
    let orderLine = new OrderItem();

    orderLine.producto = this.form.value['producto'];
    orderLine.quantity = this.form.value['quantity'];

    if (!this.existeOrdenItem(orderLine) && orderLine.quantity > 0) {
      this.orderLines.push(orderLine);
      this.dataSourceOrden = new MatTableDataSource(this.orderLines);
    }

    for (let i = 0; i < size; i++) {
      if (this.orderLines[i]?.producto == orderLine.producto) {
        this.orderLines[i].quantity =
          this.orderLines[i].quantity + this.form.value['quantity'];
      }
    }
    this.calcularTotalPreview();
    this.calcularNumeroTotalProductos();
    this.form.controls['montoAPagar'].setValue(this.previewTotal);
  }

  agregarProductoDeLista(p: any) {
    let size = this.orderLines.length;
    let orderLine = new OrderItem();

    orderLine.producto = p;
    orderLine.quantity = 1;

    if (!this.existeOrdenItem(orderLine)) {
      this.orderLines.push(orderLine);
      this.dataSourceOrden = new MatTableDataSource(this.orderLines);
    }

    for (let i = 0; i < size; i++) {
      if (this.orderLines[i]?.producto == p) {
        this.orderLines[i].quantity = this.orderLines[i].quantity + 1;
      }
    }
    this.calcularTotalPreview();
    this.calcularNumeroTotalProductos();
    this.form.controls['montoAPagar'].setValue(this.previewTotal);
  }

  existeOrdenItem(o: OrderItem) {
    var exist = false;
    for (let i = 0; i < this.orderLines.length; i++) {
      if (this.orderLines[i].producto == o.producto) {
        exist = true;
      }
    }
    return exist;
  }

  calcularTotalPreview() {
    let total = 0;
    this.previewTotal = 0;
    for (let i = 0; i < this.orderLines.length; i++) {
      total += this.orderLines[i].producto.precio * this.orderLines[i].quantity;
    }
    this.previewTotal = total;
  }

  calcularNumeroTotalProductos() {
    let total = 0;
    this.previewTotalProductos = 0;
    for (let i = 0; i < this.orderLines.length; i++) {
      total += this.orderLines[i].quantity;
    }
    this.previewTotalProductos = total;
  }

  removerCantidadProducto(index: number) {
    if (this.orderLines[index].quantity > 1) {
      this.orderLines[index].quantity = this.orderLines[index].quantity - 1;
      this.calcularTotalPreview();
      this.calcularNumeroTotalProductos();
      this.form.controls['montoAPagar'].setValue(this.previewTotal);
    } else {
      alert('La cantidad no puede ser menor que 1');
    }
  }

  removerProducto(index: number) {
    this.orderLines.splice(index, 1);
    this.dataSourceOrden = new MatTableDataSource(this.orderLines);
  }

  mostrarProducto(val: any) {
    return val ? `${val.nombre}` : val;
  }

  filtrarProductos(val: any) {
    if (val != null && val.id > 0) {
      return this.productos.filter((el) =>
        el.nombre.toLowerCase().includes(val.nombre.toLowerCase())
      );
    }
    return this.productos.filter((el) =>
      el.nombre.toLowerCase().includes(val?.toLowerCase())
    );
  }

  save() {
    const ok = confirm('¿Estás seguro de generar la orden?');
    const idCliente = Number(sessionStorage.getItem('idUsuario'));

    let order = new Order();
    var pagoContraEntrega = new PagoContraEntrega();

    pagoContraEntrega.montoAPagar = this.form.value['montoAPagar'];
    pagoContraEntrega.nombreCompleto = this.form.value['nombreCompleto'];
    order.cliente = this.cliente;
    order.items = this.orderLines;

    if (order.items.length > 0) {
      if (ok) {
        this.pagoContraEntrega.create(pagoContraEntrega).subscribe(
          (pago: any) => {
            order.pagoContraEntrega = pago;
            this.ordenService.create(order).subscribe(
              (res) => {
  
                this._snackBar.open('El pedido ha sido generado con éxito!!', 'OK', {
                  horizontalPosition: this.horizontalPosition,
                  verticalPosition: this.verticalPosition,
                  duration: 3000,
                  panelClass: ['orange-snackbar']
                });
                this.router.navigate(['/cliente/mercados/pedidos/', idCliente]);
              },
              (err) => {
                this._snackBar.open('No se pudo procesar la petición. Revisa que los datos sean correctos o no hay stock disponible!!', 'OK', {
                  horizontalPosition: this.horizontalPosition,
                  verticalPosition: this.verticalPosition,
                  duration: 4000,
                  panelClass: ['blue-snackbar-error']
                });
              }
            );
          },
          (error) => {
            this._snackBar.open('Algo salió mal. Verifica los datos, por favor!!', 'OK', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 4000,
              panelClass: ['blue-snackbar-error']
            });
          }
        );
      }
    } else {
      this._snackBar.open('No hay productos agregados al detalle!!', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 4000,
        panelClass: ['blue-snackbar-error']
      });
    }
  }

  getCliente() {
    this.clienteService
      .getClienteById(Number(sessionStorage.getItem('idUsuario')))
      .subscribe((data: any) => {
        this.cliente = data;
      });
  }
}
