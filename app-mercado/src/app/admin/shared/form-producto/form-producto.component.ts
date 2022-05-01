import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/auth/shared/login.service';
import { ListaProductosComponent } from '../../productos/lista-productos/lista-productos.component';
import { NuevoPuestoComponent } from '../../puestos/nuevo-puesto/nuevo-puesto.component';
import { Producto } from '../producto.model';
import { ProductoService } from '../producto.service';
import { Puesto } from '../puesto.model';
import { PuestoService } from '../puesto.service'
import { SectorService } from '../sector.service';
import { UnidadMedidaService } from '../unidad-medida.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  public id : number;
  public sectores : Array<any> = [];
  public unidades_medidas : Array<any> = [];
  public dataSourcePuesto:any;
  dataSource : any;
  dataSourceSector: any;

  form: FormGroup;

  @Input() set producto (producto:Producto){

    this.form?.patchValue(producto);
  }

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();


  constructor(private productoService: ProductoService,
    private sectorService: SectorService,
    private formBuilder: FormBuilder,
    private unidadMedida: UnidadMedidaService,
    private activatedRoute: ActivatedRoute,
    private puestoService: PuestoService, private activeRoute: ActivatedRoute) { 
      this.activeRoute.paramMap.subscribe(paramMap =>{
        this.id = Number(paramMap.get('idPrueba'));
        this.puestoService.getPuestoById(this.id).subscribe(
          (data:any)=>{
            this.dataSourcePuesto = data;
          }
        )
     })
    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:[
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      stock:['', [Validators.required]],
      precio: ['', [Validators.required]],
      unidadMedida: ['',[Validators.required]],
      //sector:['',Validators.required]

    });
    //this.cargarSectores();
    this.cargarUnidadesMedidas();
    //this.getSectorByPuestoId();
    this.getSectorByPuestoId();
  }

  registrar() {
    this.onSubmit.emit(this.form.value);
  }

  getSectorByPuestoId(){
    this.activatedRoute.paramMap.subscribe(paramMap =>{

      this.puestoService.getPuestoById(this.id).subscribe(
        (data:any)=>{
          this.dataSourceSector = data;
        }
      )
   })
  }

  /*cargarSectores(){
    this.sectorService.getSectores().subscribe(
      (data:any)=>{
        this.sectores.push(data);
      },
      (err: any)=> {
        console.log(err);
      }
    );
  }*/

  cargarUnidadesMedidas(){
    this.unidadMedida.getUnidadesMedidas().subscribe(
      (data:any)=>{
        this.unidades_medidas.push(data);
      },
      (err: any)=> {
        console.log(err);
      }
    );
  }

}
