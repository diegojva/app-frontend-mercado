import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MarketService } from 'src/app/home/shared/market.service';
import { Puesto } from '../puesto.model';
import { PuestoService } from '../puesto.service';
import { SectorService } from '../sector.service';

@Component({
  selector: 'app-form-puesto',
  templateUrl: './form-puesto.component.html',
  styleUrls: ['./form-puesto.component.css']
})
export class FormPuestoComponent implements OnInit {

  sectores : Array<any> = [];
  mercados : Array<any> = [];
  enviado : boolean;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  @Input() set puesto (p:Puesto){

    this.form.patchValue(p);
  }
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

      form = this.formBuilder.group({
      nombre:[
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      descripcion: ['', [Validators.required,  Validators.minLength(10), Validators.maxLength(150),]],
      sector: ['',[Validators.required]],
      mercado: ['',[Validators.required]],
      estado: ['',[Validators.required]],
    });


  constructor(private puestoService: PuestoService,
    private sectorService: SectorService,
    private mercadoService: MarketService,
    private formBuilder: FormBuilder) {
      this.cargarSectores();
      this.cargarMercados();
     }

  ngOnInit(): void {
  }

  registrar() {
    this.enviado = true;
    setTimeout(() => {
      this.onSubmit.emit(this.form.value);
      this.enviado = false;
    }, 500);
  }

  cargarSectores(){
    this.sectorService.getSectores().subscribe(
      (data:any)=>{

        this.sectores.push(data);
      },
      (err: any)=> {
      }
    );
  }

  cargarMercados(){
    this.mercadoService.getAllMercados().subscribe(
      (data:any)=>{

        this.mercados.push(data);
      },
      (error: any)=> {
      }
    );
  }

}
